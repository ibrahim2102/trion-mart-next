import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (email === "admin@test.com" && password === "123456") {
      const response = NextResponse.json({ success: true });

      response.cookies.set("auth", "true", {
        httpOnly: true,
        path: "/",
      });

      return response;
    }

    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
