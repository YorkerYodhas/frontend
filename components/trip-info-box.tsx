import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "@carbon/icons-react";

function TripInfoBox() {
  return (
    <div className="bg-[#2A2A46] w-full flex flex-col gap-4 p-4">
      <div className="w-full flex items-center justify-evenly">
        <h1 className="text-xl font-bold">Earth</h1>
        <ArrowRight size={"32"} />
        <h1 className="text-xl font-bold">Mars</h1>
      </div>
      <Separator />
      <div className="flex justify-evenly items-center text-sm gap-8 w-full">
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
    </div>
  );
}

export default TripInfoBox;
