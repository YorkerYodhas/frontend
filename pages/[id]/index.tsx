import { Button } from "@/components/ui/button";
import {
  Calendar,
  Cloud,
  Events,
  Favorite,
  Home,
  PreviousOutline,
  Rocket,
} from "@carbon/icons-react";
import { useRouter } from "next/router";

function PlanetPage() {
  const router = useRouter();

  return (
    <div>
      <main className="flex min-h-screen flex-col items-start justify-start gap-8 py-8">
        <div className="w-full flex justify-between items-center">
          <PreviousOutline
            size={24}
            onClick={() => router.back()}
            className="cursor-pointer"
          />
          <p>Mars</p>
          <Favorite size={24} />
        </div>

        <div className="bg-[#131320] w-full flex items-center justify-center p-4">
          <img src="/images/mars.png" className="w-56"></img>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Mars</h1>
          <p className="text-muted-foreground -mt-2">2 Light Years</p>
          <Button size={"lg"} className="text-lg">
            <Rocket className="mr-2" size={"24"} />
            Book Now
            <span className="mx-2">|</span>
            <span>5999STR</span>
          </Button>
        </div>

        <hr className="w-full border-t"></hr>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex gap-2 overflow-x-auto">
            <Button variant={"secondary"}>
              <Home className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button variant={"outline"}>
              <Cloud className="mr-2 h-4 w-4" />
              Weather
            </Button>
            <Button variant={"outline"}>
              <Events className="mr-2 h-4 w-4" />
              Culture
            </Button>
            <Button variant={"outline"}>
              <Calendar className="mr-2 h-4 w-4" />
              Upcoming Trips
            </Button>
          </div>
          <div className="w-full flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate non illo quibusdam eligendi accusamus, maxime amet,
              temporibus, cupiditate perspiciatis sapiente veniam consequatur!
              Cumque ab, alias numquam provident sed pariatur, quis aut commodi
              quibusdam ea nesciunt doloribus aspernatur fuga! Aperiam, eos.
              Quisquam natus optio omnis culpa, cum repellendus accusamus vitae
              ipsam totam odio impedit consequuntur mollitia facere nam dolorem.
              Mollitia, aut blanditiis, impedit nostrum animi fuga ea corporis,
              commodi quis excepturi veritatis debitis sequi? Deleniti obcaecati
              neque eius placeat quas, quam illo, temporibus in consequuntur,
              tenetur vitae rerum quisquam perferendis optio voluptatum earum
              fugiat voluptates pariatur ullam quasi deserunt. Qui maiores sed
              consequatur ipsa fugit! Et, omnis repellendus sit excepturi
              eligendi commodi id aliquid provident quisquam accusantium
              aspernatur deleniti illo minima?
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PlanetPage;
