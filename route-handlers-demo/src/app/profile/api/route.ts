// file to create a route

import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export const GET = async (req: NextRequest) => {
  const requestHeaders = new Headers(req.headers);
  const headerList = headers();
  const theme = req.cookies.get("theme");
  cookies().set("results", "20");
  console.log(theme);
  console.log(headerList.get("Authorization"));
  console.log(requestHeaders.get("Authorization"));
  console.log(cookies().get("results"));
  // passing the content type
  return new Response("<h2>Hello World!</h2>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
};
