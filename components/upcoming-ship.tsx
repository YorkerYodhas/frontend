import { ArrowRight } from "@carbon/icons-react";
import { Button } from "./ui/button";

function UpcomingShipBox() {
  return (
    <div className="bg-slate-700 w-full flex flex-col gap-4 p-4">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl font-bold">Earth</h1>
        <ArrowRight size={"32"} />
        <h1 className="text-xl font-bold">Mars</h1>
      </div>
      <hr className="w-full border-t border-slate-600"></hr>
      <div className="flex justify-between items-center text-sm gap-8 w-full">
        <div className="w-full flex justify-start gap-8">
          <p className="text-muted-foreground flex flex-col items-center">
            Distance<br></br>
            <span className="text-white">2 Light years</span>
          </p>
          <p className="text-muted-foreground flex flex-col items-center">
            Trip Time<br></br>
            <span className="text-white">24 Days</span>
          </p>

          <p className="text-muted-foreground flex flex-col items-center">
            Price<br></br>
            <span className="text-white">5999STR</span>
          </p>
        </div>
        <div className="flex-shrink-0">
          <Button variant={"secondary"}>Book</Button>
        </div>
      </div>
    </div>
  );
}

export default UpcomingShipBox;
