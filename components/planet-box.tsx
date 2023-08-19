import { Button } from "./ui/button";

function PlanetBox() {
  return (
    <div className="bg-slate-700 w-[260px] flex flex-col p-4 relative mr-14 mt-16 mb-8 space-y-2 flex-shrink-0">
      <img
        src="/images/mars.png"
        className="absolute -right-12 -top-12 w-36"
      ></img>
      <h1 className="text-3xl font-bold">Mars</h1>
      <p className="text-muted-foreground">2 Light Years</p>
      <Button variant={"outline"}>Plan</Button>
    </div>
  );
}

export default PlanetBox;
