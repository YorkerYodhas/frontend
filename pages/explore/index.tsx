import PlanetBox from "@/components/planet-box";
import UpcomingShipBox from "@/components/upcoming-ship";
import { Rocket, Search } from "@carbon/icons-react";
import { Calendar } from "lucide-react";
import Link from "next/link";

function ExplorePage() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-start justify-start gap-12 py-8">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-5xl font-black text-primary">Explore</h1>
          <Link href="/search">
            <Search size={24} />
          </Link>
        </div>
        <div className="w-full">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-2xl flex gap-1 items-center">
              <span>
                <Rocket className="mr-2" size={"24"} />
              </span>
              Trending Destinations
            </h2>
            <p className="text-sm">
              <Link href="/destinations">See all</Link>
            </p>
          </div>

          <div className="flex gap-2 overflow-x-scroll">
            <PlanetBox />
            <PlanetBox />
            <PlanetBox />
          </div>
        </div>

        <div className="w-full flex flex-col gap-8">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-2xl flex gap-1 items-center">
              <span>
                <Calendar className="mr-2" size={"24"} />
              </span>
              Upcoming Ships
            </h2>
            <p className="text-sm">
              <Link href="/ships">See all</Link>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <UpcomingShipBox />
            <UpcomingShipBox />
            <UpcomingShipBox />
            <UpcomingShipBox />
            <UpcomingShipBox />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ExplorePage;
