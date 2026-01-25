import Link from "next/link";
import React from "react";

const PrismaLayoutDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="py-3 text-center font-bold">Prisma Layout Dashboard</h1>
      <div className="flex">
        <div className=" w-1/4 border-4 min-h-screen pt-3">
          <Link href={"#"}>ddddd</Link>
        </div>
        <div className="w-3/4 pt-3">{children}</div>
      </div>
    </div>
  );
};

export default PrismaLayoutDashboard;
