// file to show the caching of the route handlers

export const dynamic = "force-dynamic";

export const GET = async () => {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
};
