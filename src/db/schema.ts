import { char, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const userTable = pgTable('user', {
  id: text('id').primaryKey(),
  username: varchar('username', { length: 32 }).notNull().unique(),
  firstName: char('first_name', { length: 128 }).notNull(),
  lastName: char('last_name', { length: 128 }),
  passwordHash: text('password_hash').notNull(),
});

export const sessionTable = pgTable('session', {
  id: text('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => userTable.id, { onDelete: 'cascade' }),
  expiresAt: timestamp('expires_at', {
    withTimezone: true,
    mode: 'date',
  }).notNull(),
});
