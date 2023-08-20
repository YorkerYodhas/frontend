import router from "next/router";
import Appbar from "@/components/Appbar";
import { useBookingStore } from "@/stores/bookingStore";
import { useState, useEffect } from "react";

export default function Home() {
  const [mode, setMode] = useState("");
  const [showRing, setShowRing] = useState(false);

  const setModeStore = useBookingStore((state) => state.setMode);
  const modeStore = useBookingStore((state) => state.mode);
  const price = useBookingStore((state) => state.price);
  const setPrice = useBookingStore((state) => state.setPrice);

  const onClick = (m: string) => {
    setModeStore(m);
    if (m == "Eco") {
      setPrice(4999);
    } else if (m == "Lux") {
      setPrice(8999);
    } else if (m == "Plt") {
      setPrice(11999);
    }
    router.push("/booking/seat");
  };

  useEffect(() => {
    console.log("modeStore", modeStore);
    if (modeStore) {
      setMode(modeStore);
    }
  }, []);

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
        <div className=" flex flex-row w-full justify-start items-start ">
          <img
            src="https://res.cloudinary.com/dyj197xd4/image/upload/v1692455224/Group_21_1_r9fcid.png"
            className="w-full"
          />
        </div>

        <div className="flex flex-row flex-wrap w-3/5 text-[20px] font-bold text-primary">
          Choose the mode
        </div>
        <div className=" flex flex-col overflow-y-auto  w-full mb-8">
          <div
            className={
              mode == "Eco"
                ? "pl-[16px] pr-[16px] pt-[8px] bg-input w-full mb-4 ring ring-primary ml-1 mr-1 mt-1"
                : "pl-[16px] pr-[16px] pt-[8px] bg-input w-full mb-4 "
            }>
            <div className="text-center text-[30px] font-bold mb-4">
              Galactic Economy
            </div>
            <div className="flex flex-col">
              <div className="mb-8">
                <ul className="text-primary">Seating:</ul>
                <ul className=" flex flex-wrap ml-4">
                  Compact seats arranged to maximize the number of passengers.
                  Limited recline and personal space. Amenities: Basic life
                  support and entertainment system. Standard meals with limited
                  beverage options. Baggage: Restricted weight and size limits
                  for personal items and checked baggage.
                </ul>
              </div>
              <div className="mb-8">
                <ul className="text-primary">Amenities:</ul>
                <ul className=" flex flex-wrap ml-4">
                  Basic life support and entertainment system. Standard meals
                  with limited beverage options.
                </ul>
              </div>
              <div className="mb-8">
                <ul className="text-primary">Baggage:</ul>
                <ul className=" flex flex-wrap ml-4">
                  Restricted weight and size limits for personal items and
                  checked baggage.
                </ul>
              </div>
              <div className="flex flex-row justify-end items-end">
                <div
                  onClick={() => onClick("Eco")}
                  className=" w-[160px] h-[40px] ring ring-primary text-center align-baseline font-bold p-3 mb-4 cursor-pointer">
                  4999 STR
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              mode == "Lux"
                ? "pl-[16px] pr-[16px] pt-[8px] bg-input w-full mb-4 ring ring-primary ml-1 mr-1 mt-1"
                : "pl-[16px] pr-[16px] pt-[8px] bg-input w-full mb-4 "
            }>
            <div className="text-center text-[30px] font-bold mb-4">
              Lunar Luxe
            </div>
            <div className="flex flex-col">
              <div className="mb-8">
                <ul className="text-primary">Seating:</ul>
                <ul className=" flex flex-wrap ml-4">
                  Compact seats arranged to maximize the number of passengers.
                  Limited recline and personal space. Amenities: Basic life
                  support and entertainment system. Standard meals with limited
                  beverage options. Baggage: Restricted weight and size limits
                  for personal items and checked baggage.
                </ul>
              </div>
              <div className="mb-8">
                <ul className="text-primary">Amenities:</ul>
                <ul className=" flex flex-wrap ml-4">
                  Basic life support and entertainment system. Standard meals
                  with limited beverage options.
                </ul>
              </div>
              <div className="mb-8">
                <ul className="text-primary">Baggage:</ul>
                <ul className=" flex flex-wrap ml-4">
                  Restricted weight and size limits for personal items and
                  checked baggage.
                </ul>
              </div>
              <div className="flex flex-row justify-end items-end">
                <div
                  onClick={() => onClick("Lux")}
                  className=" w-[160px] h-[40px] ring ring-primary text-center align-baseline font-bold p-3 mb-4 cursor-pointer">
                  8999 STR
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              mode == "Plt"
                ? "pl-[16px] pr-[16px] pt-[8px] bg-input w-full mb-4 ring ring-primary ml-1 mr-1 mt-1"
                : "pl-[16px] pr-[16px] pt-[8px] bg-input w-full mb-4 "
            }>
            <div className="text-center text-[30px] font-bold mb-4">
              Galactic Plt
            </div>
            <div className="flex flex-col">
              <div className="mb-8">
                <ul className="text-primary">Seating:</ul>
                <ul className=" flex flex-wrap ml-4">
                  Compact seats arranged to maximize the number of passengers.
                  Limited recline and personal space. Amenities: Basic life
                  support and entertainment system. Standard meals with limited
                  beverage options. Baggage: Restricted weight and size limits
                  for personal items and checked baggage.
                </ul>
              </div>
              <div className="mb-8">
                <ul className="text-primary">Amenities:</ul>
                <ul className=" flex flex-wrap ml-4">
                  Basic life support and entertainment system. Standard meals
                  with limited beverage options.
                </ul>
              </div>
              <div className="mb-8">
                <ul className="text-primary">Baggage:</ul>
                <ul className=" flex flex-wrap ml-4">
                  Restricted weight and size limits for personal items and
                  checked baggage.
                </ul>
              </div>
              <div className="flex flex-row justify-end items-end">
                <div
                  onClick={() => onClick("Plt")}
                  className=" w-[160px] h-[40px] ring ring-primary text-center align-baseline font-bold p-3 mb-4 cursor-pointer">
                  11999 STR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => router.push("/booking/seat")}
          className="w-full h-[35px] bg-primary cursor-pointer text-center font-bold flex justify-center items-center  align-middle mt-8 mb-8 ">
          Next
        </div>
      </div>
    </main>
  );
}
