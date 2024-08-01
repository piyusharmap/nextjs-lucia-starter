"use server";

import { cookies } from "next/headers";
import { generateIdFromEntropySize } from "lucia";
import { hash, verify } from "@node-rs/argon2";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { userTable } from "@/db/schema";
import { lucia } from "@/lib/auth";
import { validateRequest } from "@/lib/validate-user";

export async function userSignupAction({
	username,
	firstName,
	lastName,
	password,
}: {
	username: string;
	firstName: string;
	lastName?: string;
	password: string;
}) {
	try {
		// Proceed with the rest of your signup logic
		const passwordHash = await hash(password, {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1,
		});

		const userId = generateIdFromEntropySize(10); // 16 characters long

		const existingUser = await db.query.userTable.findFirst({
			where: eq(userTable.username, username),
		});

		if (existingUser) {
			return {
				status: false,
				message: "Username already in use.",
			};
		}

		await db.insert(userTable).values({
			id: userId,
			username,
			firstName,
			lastName: lastName || "",
			passwordHash,
			createdAt: new Date(),
		});

		const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies().set(
			sessionCookie.name,
			sessionCookie.value,
			sessionCookie.attributes
		);

		return {
			status: true,
			message: "Signed in successfully.",
		};
	} catch (error) {
		console.error("Error signing up: ", error);

		return {
			status: false,
			message: "Error signing up.",
		};
	}
}

export async function userLoginAction({
	username,
	password,
}: {
	username: string;
	password: string;
}) {
	try {
		const existingUser = await db.query.userTable.findFirst({
			where: eq(userTable.username, username),
		});

		if (!existingUser) {
			return {
				status: false,
				message: "Incorrect username or password.",
			};
		}

		const validPassword = await verify(
			existingUser.passwordHash,
			password,
			{
				memoryCost: 19456,
				timeCost: 2,
				outputLen: 32,
				parallelism: 1,
			}
		);
		if (!validPassword) {
			return {
				status: false,
				message: "Incorrect username or password.",
			};
		}

		const session = await lucia.createSession(existingUser.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies().set(
			sessionCookie.name,
			sessionCookie.value,
			sessionCookie.attributes
		);

		return {
			status: true,
			message: "Logged in successfully.",
		};
	} catch (error) {
		console.error("Error logging in: ", error);

		return {
			status: false,
			message: "Error logging in.",
		};
	}
}

export async function userLogoutAction() {
	try {
		const { session } = await validateRequest();

		if (!session) {
			return {
				status: false,
				message: "Not authorized to perform this action.",
			};
		}

		await lucia.invalidateSession(session.id);

		const sessionCookie = lucia.createBlankSessionCookie();
		cookies().set(
			sessionCookie.name,
			sessionCookie.value,
			sessionCookie.attributes
		);

		return {
			status: true,
			message: "Logged out successfully.",
		};
	} catch (error) {
		console.error("Error logging out: ", error);

		return {
			status: false,
			message: "Error logging out.",
		};
	}
}

export async function userUpdateAction({
	username,
	firstName,
	lastName,
	bio,
}: {
	username: string;
	firstName: string;
	lastName?: string;
	bio?: string;
}) {
	try {
		const existingUser = await db.query.userTable.findFirst({
			where: eq(userTable.username, username),
		});

		if (!existingUser) {
			return {
				status: false,
				message: "User not found.",
			};
		}

		await db.update(userTable).set({
			firstName,
			lastName,
			bio,
			updatedAt: new Date(),
		});

		return {
			status: true,
			message: `Profile details updated successfully.`,
		};
	} catch (error) {
		console.error("Error updating profile: ", error);

		return {
			status: false,
			message: "Error updating profile.",
		};
	}
}
