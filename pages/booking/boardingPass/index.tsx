import router from "next/router";
import { useBookingStore } from "@/stores/bookingStore";
import { useState, useEffect, use } from "react";

export default function Home() {
  const from = useBookingStore((state) => state.from);
  const to = useBookingStore((state) => state.to);
  const date = useBookingStore((state) => state.date);
  const adults = useBookingStore((state) => state.adults);
  const children = useBookingStore((state) => state.children);
  const seats = useBookingStore((state) => state.seats);
  const price = useBookingStore((state) => state.price);
  const total = useBookingStore((state) => state.total);
  const setMode = useBookingStore((state) => state.setMode);
  const mode = useBookingStore((state) => state.mode);
  const setTotal = useBookingStore((state) => state.setTotal);

  const generateSeatsList = () => {
    return seats.map((seatNumber) => `${mode}${seatNumber}`).join(", ");
  };

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
          Boarding Pass
        </div>
        <div className="pl-[16px] pr-[16px] pt-[8px] bg-input w-full mb-4 pb-2">
          <div>Economy Class</div>
          <div className="border-t my-4 bg-white text-white w-full"></div>
          <div className=" flex flex-row gap-10">
            <div className=" flex flex-col text-4xl">{from}</div>
            <img
              className="w-[70px] h-[26px] ml-2 mr-2 mt-2"
              src="https://res.cloudinary.com/dyj197xd4/image/upload/v1692549278/---__sav5kn.png"
            />
            <div className=" flex flex-col text-4xl">{to}</div>
          </div>
          <div className="flex flex-row  gap-5 text-[14px] text-gray-400 mb-8 mt-8">
            <div className=" flex flex-col w-10 ">
              <div>From</div>
              <div>To</div>
              <div>Time</div>
            </div>
            <div className=" flex flex-col w-40  ">
              <div>{from}</div>
              <div>{to}</div>
              <div>
                {date.departureDate.toString().split(" ").slice(1, 4).join(" ")}
              </div>
            </div>
          </div>
          <div className=" text-gray-400">Seats</div>
          <div className=" mb-8 text-2xl ">{generateSeatsList()}</div>
          <img
            className="w-[150px] h-[150px] mb-8"
            src="https://res.cloudinary.com/dyj197xd4/image/upload/v1692551856/Untitled_kw7a3q.png"
          />
        </div>
        <div
          onClick={() => router.push("/booking")}
          className="w-full h-[35px] bg-primary cursor-pointer text-center font-bold flex justify-center items-center  align-middle mt-4 mb-4 ">
          Download boarding pass
        </div>
      </div>
    </main>
  );
}
