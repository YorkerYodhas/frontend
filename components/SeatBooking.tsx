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
  selectedSeats: number[];
  onSelectedSeatsChange: (selectedSeats: number[]) => void;
}

interface SeatBookingComponentProps {
  bookedSeats: number[];
}

const SeatBookingComponent: React.FC<SeatBookingComponentProps> = ({
  bookedSeats,
  selectedSeats,
  onSelectedSeatsChange,
}) => {
  const initialSeats = Array.from({ length: 52 }, (_, index) => {
    const seatId = index + 1;
    if (bookedSeats.includes(seatId)) {
      return { id: seatId, status: SeatStatus.BOOKED };
    } else if (selectedSeats.includes(seatId)) {
      return { id: seatId, status: SeatStatus.SELECTED };
    }
    return { id: seatId, status: SeatStatus.EMPTY };
  });

  const [seats, setSeats] = useState<Seat[]>(initialSeats);

  useEffect(() => {
    const updatedSeats = seats.map((seat) => {
      if (bookedSeats.includes(seat.id)) {
        return { ...seat, status: SeatStatus.BOOKED };
      } else if (selectedSeats.includes(seat.id)) {
        return { ...seat, status: SeatStatus.SELECTED };
      }
      return seat;
    });
    setSeats(updatedSeats);
  }, [bookedSeats, selectedSeats]);

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

    const newSelectedSeats = updatedSeats
      .filter((seat) => seat.status === SeatStatus.SELECTED)
      .map((seat) => seat.id);
    onSelectedSeatsChange(newSelectedSeats);
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
