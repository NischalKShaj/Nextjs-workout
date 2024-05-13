// file to show the get request

import { type NextRequest } from "next/server";
import { comments } from "./data";

// creating a get request
export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredQuery = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredQuery);
};

// creating a post request
export const POST = async (req: Request) => {
  const comment = await req.json();

  console.log(comment);

  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
};
