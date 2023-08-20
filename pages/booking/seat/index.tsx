import Appbar from "@/components/Appbar";
import CalendarComponent from "@/components/Calendar";
import { useState } from "react";
import router from "next/router";
import SeatBookingComponent from "@/components/SeatBooking";
import { useEffect } from "react";
import { useBookingStore } from "@/stores/bookingStore";

export default function Home() {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const seatsStore = useBookingStore((state) => state.seats);
  const setSeatsStore = useBookingStore((state) => state.setSeats);

  useEffect(() => {
    console.log(selectedSeats);
    setSeatsStore(selectedSeats);
  }, [selectedSeats]);

  useEffect(() => {
    console.log(seatsStore);
    setSelectedSeats(seatsStore);
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
            src="https://res.cloudinary.com/dyj197xd4/image/upload/v1692458256/Group_21_2_h77d3d.png"
            className="w-full"
          />
        </div>

        <div className="flex flex-row flex-wrap w-3/5 text-[20px] font-bold text-primary mb-8">
          Select your seat
        </div>
        <div className=" bg-[url('https://res.cloudinary.com/dyj197xd4/image/upload/v1692468094/spaceship2_3_vpsdlr.png')] bg-no-repeat w-cover h-[367px] bg-center  ">
          <div className="flex flex-row justify-center items-center pt-[60px]">
            <SeatBookingComponent
              bookedSeats={[5, 15, 25, 35]}
              selectedSeats={selectedSeats}
              onSelectedSeatsChange={setSelectedSeats}
            />
          </div>
          <div className="flex flex-row justify-center gap-4 mb-2 mt-4">
            <div className="flex flex-row">
              <div className=" bg-gray-400 w-5 h-5 rounded-full mr-1"></div>
              <div>Available</div>
            </div>
            <div className="flex flex-row">
              <div className=" bg-primary w-5 h-5 rounded-full mr-1"></div>
              <div>Booked</div>
            </div>
          </div>
        </div>

        <div
          onClick={() => router.push("/booking/summary")}
          className="w-full h-[35px] bg-primary cursor-pointer text-center font-bold flex justify-center items-center  align-middle mt-4 mb-4 ">
          Next
        </div>
      </div>
      <Appbar />
    </main>
  );
}
