import { env } from "@/env/server";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "postgresql",
	schema: "./src/db/schema.ts",
	out: "./src/db/migrations",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	// strict: it is used for drizzle-kit push command and will always ask for your confirmation before execution of statements
	strict: true,
	// verbose: it is used for drizzle-kit push command and prints all statements that will be executed
	verbose: true,
});
