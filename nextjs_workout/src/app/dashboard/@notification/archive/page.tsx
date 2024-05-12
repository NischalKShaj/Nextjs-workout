// file to show the parallel routing in notification page

import Card from "@/components/cards";
import Link from "next/link";

const Notification = () => {
  return (
    <Card>
      <div>Notification</div>
      <Link href="/dashboard/">default</Link>
    </Card>
  );
};

export default Notification;
