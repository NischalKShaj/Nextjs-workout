// file to show the server side rendering
import { cookies } from "next/headers";

const About = () => {
  console.log("server component");
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  return (
    <div>
      <h1>About page{new Date().toLocaleTimeString()}</h1>
    </div>
  );
};

export default About;
