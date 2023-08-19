import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "@carbon/icons-react";

function ProfilePage() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-start justify-start gap-12 py-8">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-5xl font-black text-primary">Profile</h1>
        </div>
        <div className="w-full flex flex-col gap-4">
          <img src="/images/avatar.png" className="w-24"></img>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground text-lg">Username</p>
            <p className="text-xl font-bold">AlexLee</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground text-lg">Wallet ID</p>
            <p className="text-xl font-bold">7895265786592X</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground text-lg">Address</p>
            <p className="text-xl font-bold">78S50EX, 33F3G5Y, EARTH</p>
          </div>
        </div>
        <Separator />

        <div className="w-full flex flex-col gap-4">
          <h1 className="text-2xl font-black">Manage your account</h1>

          <div className="flex flex-col gap-2">
            <div className="flex justify-start gap-2 items-center">
              <p className="text-xl">Edit profile</p>
              <ArrowUpRight size={"20"} />
            </div>

            <div className="flex justify-start gap-2 items-center">
              <p className="text-xl">Security</p>
              <ArrowUpRight size={"20"} />
            </div>

            <div className="flex justify-start gap-2 items-center">
              <p className="text-xl">Log out</p>
              <ArrowUpRight size={"20"} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
