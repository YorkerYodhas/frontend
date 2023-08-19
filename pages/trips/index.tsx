import TripInfoBox from "@/components/trip-info-box";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function TripsPage() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-start justify-start gap-12 py-8">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-5xl font-black text-primary">My Trips</h1>
        </div>
        <div className="w-full flex flex-col gap-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="flex flex-col gap-2 mt-4">
                <TripInfoBox />
                <TripInfoBox />
                <TripInfoBox />
                <TripInfoBox />
                <TripInfoBox />
              </div>
            </TabsContent>
            <TabsContent value="upcoming">
              <div className="flex flex-col gap-2 mt-4">
                <TripInfoBox />
                <TripInfoBox />
                <TripInfoBox />
                <TripInfoBox />
                <TripInfoBox />
              </div>
            </TabsContent>
            <TabsContent value="completed">
              <div className="flex flex-col gap-2 mt-4">
                <TripInfoBox />
                <TripInfoBox />
                <TripInfoBox />
                <TripInfoBox />
                <TripInfoBox />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default TripsPage;
