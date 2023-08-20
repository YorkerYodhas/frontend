// bookingStore.ts
import create from 'zustand';

type BookingState = {
    from: any;
    to: any;
    date: any;
    adults: number;
    children: number;
    seats: number[];
    mode: string;
    price: number;
  paymentDetails: any;
  bookingConfirmation: boolean;
  setPaymentDetails: (details: any) => void;
  setFrom: (from: any) => void;
    setTo: (to: any) => void;
    setDate: (date: any) => void;
    setAdults: (adults: number) => void;
    setChildren: (children: number) => void;
    setSeats: (seats: number[]) => void;
    setMode: (mode: string) => void;
    setPrice: (price: number) => void;
  confirmBooking: () => void;
};

export const useBookingStore = create<BookingState>((set) => ({
    from: {},
    to: {},
    date: {},
    adults: 0,
    children: 0,
    seats: [],
    mode: '',
    price: 0,
  paymentDetails: {},
  bookingConfirmation: false,
  setPaymentDetails: (details) => set({ paymentDetails: details }),
    setFrom: (from) => set({ from }),
    setTo: (to) => set({ to }),
    setDate: (date) => set({ date }),
    setAdults: (adults) => set({ adults }),
    setChildren: (children) => set({ children }),
    setSeats: (seats) => set({ seats }),
    setMode: (mode) => set({ mode }),
    setPrice: (price) => set({ price }),
  confirmBooking: () => set({ bookingConfirmation: true }),
}));
