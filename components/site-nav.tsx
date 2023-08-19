"use client";

import { Explore, Plan, User as UserIcon } from "@carbon/icons-react";
import Link from "next/link";

const UserNav: React.FC = () => {
  return (
    <header className="fixed inset-x-0 bottom-0 flex py-4 bg-background border-t z-40 container mx-auto max-w-xl overflow-x-hidden text-sm">
      <ul className="flex items-center gap-6 justify-center w-full">
        <Link href="/explore">
          <li className="flex flex-col items-center justify-center  p-3 hover:bg-[#2A2A46] w-24">
            <Explore size={"24"} />
            <p>Explore</p>
          </li>
        </Link>

        <Link href="/trips">
          <li className="flex flex-col items-center justify-center  p-3 hover:bg-[#2A2A46] w-24">
            <Plan size={"24"} />
            <p>Trips</p>
          </li>
        </Link>

        <Link href="/profile">
          <li className="flex flex-col items-center justify-center  p-3 hover:bg-[#2A2A46] w-24">
            <UserIcon size={"24"}></UserIcon>
            <p>Profile</p>
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default UserNav;
