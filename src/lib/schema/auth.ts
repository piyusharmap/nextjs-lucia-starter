import { z } from "zod";

export const userLoginSchema = z.object({
	username: z
		.string({ required_error: "Username is required" })
		.min(1, "Username is required")
		.max(31, "Username must be at most 12 characters long"),
	password: z
		.string({ required_error: "Password is required" })
		.min(1, "Password is required")
		.max(128, "Password must be at most 12 characters long"),
});

export const userSignupSchema = z.object({
	username: z
		.string({ required_error: "Username is required" })
		.min(1, "Username is required")
		.max(31, "Username must be at most 12 characters long"),
	firstName: z
		.string({ required_error: "First name is required" })
		.min(1, "First name is required"),
	lastName: z.string().optional(),
	password: z
		.string({ required_error: "Password is required" })
		.min(1, "Password is required")
		.max(128, "Password must be at most 12 characters long"),
});

export const updateUserSchema = z.object({
	firstName: z
		.string({ required_error: "First name is required" })
		.min(1, "First name is required"),
	lastName: z.string().optional(),
	bio: z
		.string()
		.max(128, "Bio must be at most 128 characters long")
		.optional(),
});
