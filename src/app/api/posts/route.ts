import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(process.env.BASE_URL_DUMMY + "/posts");
  const payload = await response.json();
  return NextResponse.json(payload);
}
