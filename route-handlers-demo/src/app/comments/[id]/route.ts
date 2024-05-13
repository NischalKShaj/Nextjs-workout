// file to show the dynamic routing

import { comments } from "../data";
import { redirect } from "next/navigation";

// get request
export const GET = async (
  _req: Request,
  { params }: { params: { id: string } }
) => {
  if (parseInt(params.id) > comments.length) {
    redirect("/comments");
  }
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
};

// patch request
export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const body = await req.json();
  const { text } = body;

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );

  comments[index].text = text;

  return Response.json(comments[index]);
};

// delete request
export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment);
};
