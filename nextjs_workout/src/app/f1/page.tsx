// file to show the intercepting routes

import Link from "next/link";

const F1 = () => {
  return (
    <div>
      F1
      <Link href="/f1/f2">F2</Link>
    </div>
  );
};

export default F1;
