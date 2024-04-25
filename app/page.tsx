import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-full flex flex-col gap-2 items-center ">
      <span className="flex flex-row gap-2 p-5 text-2xl w-full h-fit justify-center rounded-md">
        Arabica🧾
      </span>
      <div className=" h-full w-full flex flex-col gap-4 items-center justify-center">
        <h3 className="bold text-xl">شروع به ساخت فعل کن </h3>
        <Button variant={"outline"}>
          <Link href="/create">شروع</Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
