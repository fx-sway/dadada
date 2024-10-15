"use client";

import { User } from "@/drizzle/types";

const endpoint = "http://localhost:3000/api/users";

export async function fetchAllUsers(): Promise<User[]> {
  const body = await fetch(endpoint, {
    method: "GET",
  }).then((res) => res.json());

  return body.payload;
}
