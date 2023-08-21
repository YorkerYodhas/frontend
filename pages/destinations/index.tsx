import PlanetListBox from "@/components/planet-list-box";

function DestinationsPage() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-start justify-start gap-12 py-8">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-5xl font-black text-primary">Destinations</h1>
        </div>

        <div className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <PlanetListBox />
            <PlanetListBox />
            <PlanetListBox />
            <PlanetListBox />
            <PlanetListBox />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DestinationsPage;
