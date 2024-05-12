// file to show the parallel routing in notification page

import Card from "@/components/cards";
import Link from "next/link";

const Notification = () => {
  return (
    <Card>
      <div>Notification</div>
      <Link href="/dashboard/archive">archive</Link>
    </Card>
  );
};

export default Notification;
