// file to show the working of the middleware

import { NextRequest, NextResponse } from "next/server";
// middleware for the redirection and rewriting
// export const middleware = (req: NextRequest) => {
//   // conditional rendering
//   if (req.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/hello", req.url));

//     // rewriting the response in a particular path
//     // return NextResponse.rewrite(new URL("/hello", req.url));  // comment redirect and uncomment rewrite
//   }
//   //   return NextResponse.redirect(new URL("/", req.url));
// };

// creating custom matcher config
// export const config = {
//   matcher: "/profile",
// };

// middleware for setting the cookie
export const middleware = (req: NextRequest) => {
  const response = NextResponse.next();
  const themePreference = req.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  //   adding a custom header
  response.headers.set("custom-header", "custom-value");

  return response;
};
