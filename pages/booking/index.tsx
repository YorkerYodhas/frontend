import router from "next/router";
import Appbar from "@/components/Appbar";
import Dropdown from "@/components/Dropdown";
import { useState, useEffect } from "react";
import { useBookingStore } from "@/stores/bookingStore";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const setFromStore = useBookingStore((state) => state.setFrom);
  const setToStore = useBookingStore((state) => state.setTo);
  const fromStore = useBookingStore((state) => state.from);
  const toStore = useBookingStore((state) => state.to);

  const onClickNext = () => {
    setFromStore(from);
    setToStore(to);
    router.push("/booking/date");
  };

  useEffect(() => {
    //console.log("fromStore", fromStore);
    // if (!fromStore && !toStore) {
    //   return;
    // }
    console.log("fromStore", fromStore);
    console.log("toStore", toStore);
    if (fromStore == "Earth") {
      console.log(typeof fromStore);
    }
    setFrom(fromStore);
    setTo(toStore);
  }, []);

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

        <div className="flex flex-row flex-wrap w-3/5 text-[20px] font-bold text-primary mb-4">
          Where you off to next cosmos trip ?
        </div>
        <div>From</div>
        <Dropdown
          options={["Earth", "Mars", "Jupyter", "Moon"]}
          value={setFrom}
          set={typeof fromStore == "string" ? fromStore : ""}
        />
        <div>To</div>
        <Dropdown
          options={["Earth", "Mars", "Jupyter", "Moon"]}
          value={setTo}
          set={typeof toStore == "string" ? toStore : ""}
        />
        <div
          onClick={onClickNext}
          className="w-full h-[35px] bg-primary cursor-pointer text-center font-bold flex justify-center items-center  align-middle mt-8 ">
          Next
        </div>
      </div>
    </main>
  );
}
