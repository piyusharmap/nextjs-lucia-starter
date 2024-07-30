import { z } from "zod";

export const userLoginSchema = z.object({
	username: z
		.string({ required_error: "Username is required" })
		.min(1, "Username is required")
		.max(12, "Username must be at most 12 characters long"),
	password: z
		.string({ required_error: "Password is required" })
		.min(1, "Password is required")
		.max(12, "Password must be at most 12 characters long"),
});

export const userSignupSchema = z.object({
	username: z
		.string({ required_error: "Username is required" })
		.min(1, "Username is required")
		.max(12, "Username must be at most 12 characters long"),
	password: z
		.string({ required_error: "Password is required" })
		.min(1, "Password is required")
		.max(12, "Password must be at most 12 characters long"),
});
