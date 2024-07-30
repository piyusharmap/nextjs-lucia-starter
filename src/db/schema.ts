import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

const userTable = pgTable("user", {
	id: text("id").primaryKey(),
});

const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date",
	}).notNull(),
});
