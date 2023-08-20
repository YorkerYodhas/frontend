import { Button } from "@/components/ui/button";
import Image from "next/image";
import router from "next/router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Appbar from "@/components/Appbar";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-start justify-between">
      <div className=" p-[24px] w-full">
        <div className="w-full flex flex-row mb-[32px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none">
            <path
              d="M0.5 8L8 0.5L9.05 1.55L2.6 8L9.05 14.45L8 15.5L0.5 8Z"
              fill="white"
            />
          </svg>
          <div className="w-full text-center text-[14px] font-bold">
            Booking
          </div>
        </div>
        <div className=" flex flex-row w-full justify-start items-start ">
          <img
            src="https://res.cloudinary.com/dyj197xd4/image/upload/v1692445639/Group_20_rrfcus.png"
            className="w-full"
          />
        </div>

        <div className="flex flex-row flex-wrap w-3/5 text-[20px] font-bold text-primary">
          Where you off to next cosmos trip ?
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className=" w-full text-start h-[35px] mt-[39px] bg-input flex flex-row justify-between align-middle pl-4 pr-4 pt-2">
              <div>From</div>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 3 4 L 8 12 L 13 4"
                  fill="none"
                  stroke="white"
                  stroke-width="1"
                />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuItem className="w-full">Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className=" w-full text-start h-[35px] mt-[39px] bg-input flex flex-row justify-between align-middle pl-4 pr-4 pt-2">
              <div>To</div>
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 3 4 L 8 12 L 13 4"
                  fill="none"
                  stroke="white"
                  stroke-width="1"
                />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuItem className="w-full">Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div
          onClick={() => router.push("/booking/date")}
          className="w-full h-[35px] bg-primary cursor-pointer text-center font-bold flex justify-center items-center  align-middle mt-8 ">
          Next
        </div>
      </div>
      <Appbar />
    </main>
  );
}
