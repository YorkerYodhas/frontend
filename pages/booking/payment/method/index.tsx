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
          Booking Confirmation
        </div>

        <div>Payment Method</div>
        <div className="mt-4 mb-4 w-full rounded-md ring-1 ring-white h-10 flex flex-row gap-4 justify-start items-start cursor-pointer pt-3 pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none">
            <path
              d="M15.3116 3.72059C15.2421 3.65045 15.1594 3.59482 15.0682 3.55695C14.9769 3.51908 14.8791 3.49972 14.7804 3.5H14.25V2.25C14.2498 2.05116 14.1707 1.86052 14.0301 1.71992C13.8895 1.57931 13.6988 1.50022 13.5 1.5H2.70709C2.12174 1.50001 1.56036 1.73254 1.14645 2.14645C0.732543 2.56036 0.500008 3.12174 0.5 3.70709V12.2929C0.500008 12.8783 0.732543 13.4396 1.14645 13.8535C1.56036 14.2675 2.12174 14.5 2.70709 14.5H14.7508C14.9492 14.4996 15.1394 14.4208 15.2799 14.2808C15.4204 14.1407 15.4998 13.9508 15.5008 13.7524L15.5303 4.25256C15.531 4.15382 15.5119 4.05594 15.4744 3.96462C15.4369 3.87329 15.3815 3.79034 15.3116 3.72059ZM14.5017 13.5H2.70709C2.38695 13.5 2.07992 13.3728 1.85355 13.1465C1.62718 12.9201 1.5 12.613 1.5 12.2929V3.70709C1.5 3.38695 1.62718 3.07992 1.85355 2.85355C2.07992 2.62718 2.38695 2.5 2.70709 2.5H13.25V3.5H2.75V4.5H14.5296L14.5017 13.5Z"
              fill="#CEC7D6"
            />
            <path d="M12.25 8.25H13.25V9.25H12.25V8.25Z" fill="black" />
          </svg>
          <div className="">Crypto wallet</div>
        </div>

        <div>Summary</div>

        <div
          onClick={() => router.push("/booking/payment/summary")}
          className="w-full h-[35px] bg-primary cursor-pointer text-center font-bold flex justify-center items-center  align-middle mt-4 mb-4 ">
          Pay Now
        </div>
      </div>
      <Appbar />
    </main>
  );
}
