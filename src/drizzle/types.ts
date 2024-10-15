import { userTable } from "./schema/user.schema";

export type User = typeof userTable.$inferSelect;
