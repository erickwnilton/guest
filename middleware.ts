import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function Middleware(req: NextRequest) {
  const token = await getToken({ req });

  if (req.nextUrl.pathname.startsWith("/(private)")) {
    if (!token) {
      return NextResponse.redirect(new URL("/signin", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/(private)/:path*"],
};
