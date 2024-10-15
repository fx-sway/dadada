import { randomUUID } from "crypto";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable("users", {
  id: text("id").primaryKey().$default(() => randomUUID()),

  role: text("role").notNull().default("user"),
  name: text("name").notNull(),
  surname: text("surname").notNull(),
  lastName: text("last_name").notNull(),
  password: text("password").notNull(),
  phoneNumber: text("phone_number").notNull().unique(),
  dateOfBirth: text("date_of_birth").notNull(),
  encodedImage: text("encoded_image"),

  rank: text("rank").notNull(),
  division: text("division").notNull(),
  recruitedBy: text("recruited_by").notNull(),
  servingKind: text("serving_kind").notNull(),
  servingPeriod: text("serving_period").notNull(),
  recruitmentDate: text("recruitment_date").notNull(),
});
