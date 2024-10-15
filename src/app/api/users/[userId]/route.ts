import { eq } from "drizzle-orm";
import { database } from "@/drizzle/instance";
import { userTable } from "@/drizzle/schema/user.schema";
import { NextRequest, NextResponse } from "next/server";

interface PathParams {
  params: {
    userId: string;
  };
}

export async function GET(
  request: NextRequest,
  { params }: PathParams
): Promise<NextResponse> {
  const { userId } = params;
  const existingUser = await database
    .select()
    .from(userTable)
    .where(eq(userTable.id, userId))
    .get();

  if (existingUser) {
    return NextResponse.json({
      success: true,
      message: null,
      payload: existingUser,
    });
  }

  return NextResponse.json({
    success: false,
    message: "User does not exist",
    payload: null,
  });
}

export async function PATCH(
  request: NextRequest,
  { params }: PathParams
): Promise<NextResponse> {
  const { userId } = params;
  const requestBody = await request.json();
  const existingUser = await database
    .select()
    .from(userTable)
    .where(eq(userTable.id, userId))
    .get();

  if (existingUser) {
    const updatedUser = await database
      .update(userTable)
      .set(requestBody)
      .where(eq(userTable.id, userId))
      .returning()
      .get();

    return NextResponse.json({
      success: true,
      message: null,
      payload: updatedUser,
    });
  }

  return NextResponse.json({
    success: false,
    message: "User does not exist",
    payload: null,
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: PathParams
): Promise<NextResponse> {
  const { userId } = params;
  const existingUser = await database
    .select()
    .from(userTable)
    .where(eq(userTable.id, userId))
    .get();

  if (existingUser) {
    const deletedUser = await database
      .delete(userTable)
      .where(eq(userTable.id, userId))
      .returning()
      .get();

    return NextResponse.json({
      success: true,
      message: null,
      payload: deletedUser,
    });
  }

  return NextResponse.json({
    success: false,
    message: "User does not exist",
    payload: null,
  });
}
