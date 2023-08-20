import Appbar from "@/components/Appbar";
import CalendarComponent from "@/components/Calendar";
import { useState } from "react";
import router from "next/router";
import SeatBookingComponent from "@/components/SeatBooking";

export default function Home() {
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);

  return (
    <main className="relative flex min-h-screen flex-col items-start justify-between">
      <div className=" p-[24px] w-full">
        <div className="w-full flex flex-row mb-[32px]">
          <svg
            onClick={() => router.back()}
            className="cursor-pointer"
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

        <div className="flex flex-row flex-wrap w-3/5 text-[20px] font-bold text-primary mb-8">
          Payment Summary
        </div>
        <div className="pl-[16px] pr-[16px] pt-[8px] bg-input w-full mb-4">
          <div className="text-center text-[30px] font-bold mb-4">
            17500 STR
          </div>
          <div className="flex flex-col">
            <div className="text-gray-400 text-[15px] text-center mb-10">
              Your payment was successful
            </div>
            <div className="flex flex-row justify-center   items-center gap-5 ml-20 text-[14px] text-gray-400 mb-8">
              <div className=" flex flex-col w-10 ">
                <div>From</div>
                <div>To</div>
                <div>Time</div>
              </div>
              <div className=" flex flex-col w-40  ">
                <div>Earth</div>
                <div>Mars</div>
                <div>14 Aug, 2163</div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => router.push("/booking/payment/summary")}
          className="w-full h-[35px] ring ring-primary cursor-pointer text-center font-bold text-primary flex justify-center items-center  align-middle mt-8 mb-4 ">
          View boarding pass
        </div>
        <div
          onClick={() => router.push("/booking/payment/summary")}
          className="w-full h-[35px] bg-primary cursor-pointer text-center font-bold flex justify-center items-center  align-middle mt-4 mb-4 ">
          Download boarding pass
        </div>
      </div>
      <Appbar />
    </main>
  );
}
