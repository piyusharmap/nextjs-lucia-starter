import { db } from "@/db";
import { userTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUserDetails({ username }: { username: string }) {
	const user = await db.query.userTable.findFirst({
		where: eq(userTable.username, username),
	});

	return user;
}
