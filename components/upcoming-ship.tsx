import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from '@carbon/icons-react';
import React from 'react';

interface Price {
  mode: string;
  amount: number;
}

export interface Ship {
  _id: string;
  shipId: string;
  name: string;
  capacity: number;
  status: string;
  startPoint: string;
  destination: string;
  duration: number;
  departureDate: string;
  prices: Price[];
  travelMode: string;
}

function formatDepartureDate(dateString: string) {
  return new Date(dateString).toLocaleString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
}

function UpcomingShipBox({ ship }: { ship: Ship }) {
  const formattedDepartureDate = formatDepartureDate(ship.departureDate);

  return (
    <div className='bg-[#2A2A46] w-full flex flex-col gap-4 p-4'>
      <div className='w-full flex items-center justify-evenly'>
        <h1 className='text-xl font-bold'>{ship.startPoint}</h1>
        <ArrowRight size={'32'} />
        <h1 className='text-xl font-bold'>{ship.destination}</h1>
      </div>
      <Separator />
      <div className='flex justify-evenly items-center text-sm gap-8 w-full'>
        <div className='w-full flex justify-evenly gap-8'>
          <p className='text-muted-foreground flex flex-col items-center'>
            Distance<br></br>
            <span className='text-white'>{ship.duration} Light years</span>
          </p>
          <p className='text-muted-foreground flex flex-col items-center'>
            <br></br>
            <span>Depart On</span>
            <span className='text-white'>{formattedDepartureDate}</span>
          </p>
        </div>
        <div className='w-full flex flex-col items-center text-white'>
          <p>Prices:</p>
          <ul>
            {ship.prices.map((price) => (
              <li key={price.mode}>
                {price.mode}: {price.amount}STR
              </li>
            ))}
          </ul>
        </div>
        <div className='flex-shrink-0'>
          <Button variant={'secondary'}>Book</Button>
        </div>
      </div>
    </div>
  );
}

export default UpcomingShipBox;
