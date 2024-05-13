// file to show the interception

import Link from "next/link";

const F4 = () => {
  return (
    <div>
      <h1>F4 content</h1>
      <Link href="/f1/f3">F3</Link>
      <Link href="/about">about</Link>
    </div>
  );
};

export default F4;
