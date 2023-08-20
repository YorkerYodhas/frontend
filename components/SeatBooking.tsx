import React, { useState, useEffect } from "react";

enum SeatStatus {
  EMPTY = "EMPTY",
  BOOKED = "BOOKED",
  SELECTED = "SELECTED",
}

interface Seat {
  id: number;
  status: SeatStatus;
}

interface SeatBookingComponentProps {
  bookedSeats: number[];
}

const SeatBookingComponent: React.FC<SeatBookingComponentProps> = ({
  bookedSeats,
}) => {
  const initialSeats = Array.from({ length: 52 }, (_, index) => {
    return { id: index + 1, status: SeatStatus.EMPTY };
  });

  const [seats, setSeats] = useState<Seat[]>(initialSeats);

  useEffect(() => {
    const updatedSeats = seats.map((seat) => {
      if (bookedSeats.includes(seat.id)) {
        return { ...seat, status: SeatStatus.BOOKED };
      }
      return seat;
    });
    setSeats(updatedSeats);
  }, [bookedSeats]);

  const handleSeatClick = (seatId: number) => {
    const updatedSeats = seats.map((seat) => {
      if (seat.id === seatId && seat.status === SeatStatus.EMPTY) {
        return { ...seat, status: SeatStatus.SELECTED };
      } else if (seat.id === seatId && seat.status === SeatStatus.SELECTED) {
        return { ...seat, status: SeatStatus.EMPTY };
      }
      return seat;
    });
    setSeats(updatedSeats);
  };

  return (
    <div className="grid grid-cols-6 gap-2 w-[210px]">
      {seats.map((seat, index) => {
        if (index < 6 || index >= 46 || (index % 6 !== 0 && index % 6 !== 5)) {
          return (
            <div
              key={seat.id}
              onClick={() => handleSeatClick(seat.id)}
              className={`w-6 h-6 flex items-center justify-center rounded-full cursor-pointer ${
                seat.status === SeatStatus.EMPTY
                  ? "bg-gray-400"
                  : seat.status === SeatStatus.BOOKED
                  ? "bg-orange-500"
                  : "bg-green-500"
              }`}>
              {seat.id}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default SeatBookingComponent;

// Usage:
// <SeatBookingComponent bookedSeats={[5, 15, 25, 35]} />
