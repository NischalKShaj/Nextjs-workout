// server component

import ImageSlider from "@/components/imageSlider";
import { serverSide } from "@/utils/server-utils";

const ServerComponent = () => {
  console.log("server component rendered");
  const result = serverSide();
  return (
    <div>
      <h2>Server component</h2>
      <p>{result}</p>
      <ImageSlider />
    </div>
  );
};

export default ServerComponent;
