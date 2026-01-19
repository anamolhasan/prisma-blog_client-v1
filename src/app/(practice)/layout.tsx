import Link from "next/link";
import React from "react";

const layout = ({
  children,
  marketingSlot,
  salesSlot,
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  salesSlot: React.ReactNode;
}) => {
  return (
    <div>
      <nav className="flex gap-10 m-8">
        <Link className="hover:underline" href={"/development"}>
          Development
        </Link>
        <Link className="hover:underline" href={"/marketing"}>
          Marketing
        </Link>
        <Link className="hover:underline" href={"/marketing/setting"}>
          Setting
        </Link>
        <Link className="hover:underline" href={"/sales"}>
          Sales
        </Link>
      </nav>
      <div className="flex gap-32">
         <div className="border ">{children}</div>
        <div className="flex gap-12 border">
          {marketingSlot}
          {salesSlot}
        </div>
       
      </div>
    </div>
  );
};

export default layout;
