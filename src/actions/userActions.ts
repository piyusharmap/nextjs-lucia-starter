"use server";

import { getUserDetails } from "@/data-access/user";

export async function getUserInfoAction(username: string) {
	const user = await getUserDetails({ username });

	return user;
}
