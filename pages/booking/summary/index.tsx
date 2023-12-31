import router from "next/router";
import { useBookingStore } from "@/stores/bookingStore";
import { useState, useEffect } from "react";

export default function Home() {
  const from = useBookingStore((state) => state.from);
  const to = useBookingStore((state) => state.to);
  const date = useBookingStore((state) => state.date);
  const adults = useBookingStore((state) => state.adults);
  const children = useBookingStore((state) => state.children);
  const seats = useBookingStore((state) => state.seats);
  const price = useBookingStore((state) => state.price);
  const total = useBookingStore((state) => state.total);
  const mode = useBookingStore((state) => state.mode);
  const setTotal = useBookingStore((state) => state.setTotal);

  const [depDate, setDepDate] = useState<string>("");

  useEffect(() => {
    console.log("seats", seats);
    setTotal(price * seats.length);
    console.log(date.departureDate.toString().split(" ").slice(1, 4).join(" "));
    setDepDate(date.departureDate.toString().split(" ").slice(1, 4).join(" "));
  }, []);

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
          Booking Summary
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-[12px] text-gray-400">From</div>
            <div className="flex flex-row gap-2 text-[14px] text-white">
              <img
                className="w-[26px] h-[26px]"
                src="https://res.cloudinary.com/dyj197xd4/image/upload/v1692493809/pngwing_3_a9icht.png"
              />
              <div>{from}</div>
            </div>
          </div>
          <div>
            <div className="text-[12px] text-gray-400">To</div>
            <div className="flex flex-row gap-2 text-[14px] text-white">
              <img
                className="w-[26px] h-[26px]"
                src="https://res.cloudinary.com/dyj197xd4/image/upload/v1692494112/pngegg_1_y8273a.png"
              />
              <div>{to}</div>
            </div>
          </div>
          <div>
            <div className="text-[12px] text-gray-400">Date</div>
            <div className="flex flex-row gap-2 text-[14px] text-white">
              <div>{depDate}</div>
            </div>
          </div>
          <div>
            <div className="text-[12px] text-gray-400">Passengers</div>
            <div className="flex flex-row gap-2 text-[14px] text-white">
              <div>
                {adults} Adults & {children} Children
              </div>
            </div>
          </div>
          <div>
            <div className="text-[12px] text-gray-400">Seats</div>
            <div className="flex flex-row gap-2 text-[14px] text-white">
              <div>{generateSeatsList()}</div>
            </div>
          </div>
          <div>
            <div className="text-[12px] text-gray-400">Price</div>
            <div className="flex flex-row gap-2 text-[14px] text-white">
              <div>{total}.00 STR</div>
            </div>
          </div>
        </div>
        <div
          onClick={() => router.push("/booking/payment/method")}
          className="w-full h-[35px] bg-primary cursor-pointer text-center font-bold flex justify-center items-center  align-middle mt-8 mb-4 ">
          Continue to Payment
        </div>
      </div>
    </main>
  );
}
