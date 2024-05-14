// file for the server side
import "server-only";

export const serverSide = () => {
  console.log(
    "contains confidential details , fetching db details, credentials in the .env file"
  );
  return "server side code";
};
