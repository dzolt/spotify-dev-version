import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  // if token exists or of its a token request proceed with the request
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // redirect them to login if they don't have token and are requesting a protected route
  if (!token && pathname !== "/login") {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/login";

    return NextResponse.rewrite(loginUrl);
  }
}
