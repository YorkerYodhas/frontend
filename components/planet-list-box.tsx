import { Button } from "@/components/ui/button";

function PlanetListBox() {
  return (
    <div className="bg-[#2A2A46] w-full flex flex-col p-4 space-y-2 flex-shrink-0">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-4">
          <img src="/images/mars.png" className="w-16"></img>
          <div>
            <h1 className="text-2xl font-bold">Mars</h1>
            <p className="text-muted-foreground">2 Light Years</p>
          </div>
        </div>
        <Button variant={"outline"}>Plan</Button>
      </div>
    </div>
  );
}

export default PlanetListBox;
