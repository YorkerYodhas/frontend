import React, { useState, useEffect } from "react";

interface DateProps {
  departureDate: Date | null;
  arrivalDate: Date | null;
}

const CalendarComponent: React.FC = () => {
  const [dates, setDates] = useState<DateProps>({
    departureDate: null,
    arrivalDate: null,
  });
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const handleDateClick = (date: Date) => {
    if (!dates.departureDate || (dates.departureDate && dates.arrivalDate)) {
      setDates({ departureDate: date, arrivalDate: null });
    } else if (!dates.arrivalDate) {
      setDates({ ...dates, arrivalDate: date });
    }
  };

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  return (
    <div className="border p-2 w-full mt-8 mb-2">
      <div className="text-center p-2 bg-background ">
        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
      </div>
      <div className="grid grid-cols-7 gap-2 mt-2">
        {weekdays.map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}
        {[...Array(daysInMonth)].map((_, index) => (
          <div
            key={index}
            onClick={() =>
              handleDateClick(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  index + 1
                )
              )
            }
            className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${
              dates.departureDate?.getDate() === index + 1
                ? "bg-green-500   text-white"
                : dates.arrivalDate?.getDate() === index + 1
                ? "bg-primary text-white"
                : "bg-transparent"
            }`}>
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarComponent;

// Usage:
// <CalendarComponent />
