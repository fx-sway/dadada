import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schema/*",
  dialect: "sqlite",
  dbCredentials: {
    url: "file:./db/local.db",
  },
});
