import Appbar from "@/components/Appbar";
import CalendarComponent from "@/components/Calendar";
import { useState, useEffect } from "react";
import router from "next/router";
import { useBookingStore } from "@/stores/bookingStore";

interface DateProps {
  departureDate: Date | null;
  arrivalDate: Date | null;
}

export default function Home() {
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const datesStore = useBookingStore((state) => state.date);
  const setDateStore = useBookingStore((state) => state.setDate);
  const adultsStore = useBookingStore((state) => state.adults);
  const setAdultsStore = useBookingStore((state) => state.setAdults);
  const childrenStore = useBookingStore((state) => state.children);
  const setChildrenStore = useBookingStore((state) => state.setChildren);

  const [dates, setDates] = useState<DateProps>({
    departureDate: null,
    arrivalDate: null,
  });

  useEffect(() => {
    console.log("dates", dates);
    if (dates.departureDate && dates.arrivalDate) {
      setDateStore(dates);
    }
    if (adults) {
      setAdultsStore(adults);
    }
    if (children) {
      setChildrenStore(children);
    }
  }, [dates, adults, children]);

  useEffect(() => {
    if (datesStore.departureDate && datesStore.arrivalDate) {
      setDates(datesStore);
    }
    if (adultsStore) {
      setAdults(adultsStore);
    }
    if (childrenStore) {
      setChildren(childrenStore);
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
            src="https://res.cloudinary.com/dyj197xd4/image/upload/v1692454681/Group_21_dkwclw.png"
            className="w-full"
          />
        </div>

        <div className="flex flex-row flex-wrap w-3/5 text-[20px] font-bold text-primary">
          Where are you going?
        </div>
        <CalendarComponent dates={dates} onDatesChange={setDates} />
        <div className="flex flex-row justify-around mb-2">
          <div className="flex flex-row">
            <div className=" bg-green-500 w-5 h-5 rounded-full mr-1"></div>
            <div>Departure Time</div>
          </div>
          <div className="flex flex-row">
            <div className=" bg-primary w-5 h-5 rounded-full mr-1"></div>
            <div>Arrival Time</div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap w-3/5 text-[20px] font-bold text-primary">
          With whom you are going?
        </div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col">
            <div className="text-center">Adults</div>
            <div className="flex flex-row gap-2">
              <svg
                onClick={() => setAdults(adults - 1)}
                className="cursor-pointer"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9.5" stroke="white" />
                <line x1="3" y1="10" x2="17" y2="10" stroke="white" />
              </svg>
              {adults}
              <svg
                onClick={() => setAdults(adults + 1)}
                className="cursor-pointer"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9.5" stroke="white" />
                <line x1="10" y1="3" x2="10" y2="17" stroke="white" />
                <line x1="3" y1="10" x2="17" y2="10" stroke="white" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-center">Child</div>
            <div className="flex flex-row gap-2">
              <svg
                onClick={() => setChildren(children - 1)}
                className="cursor-pointer"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9.5" stroke="white" />
                <line x1="3" y1="10" x2="17" y2="10" stroke="white" />
              </svg>
              {children}
              <svg
                onClick={() => setChildren(children + 1)}
                className="cursor-pointer"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9.5" stroke="white" />
                <line x1="10" y1="3" x2="10" y2="17" stroke="white" />
                <line x1="3" y1="10" x2="17" y2="10" stroke="white" />
              </svg>
            </div>
          </div>
        </div>
        <div
          onClick={() => router.push("/booking/mode")}
          className="w-full h-[35px] bg-primary cursor-pointer text-center font-bold flex justify-center items-center  align-middle mt-4 mb-4 ">
          Next
        </div>
      </div>
    </main>
  );
}
