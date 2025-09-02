import Appliances from "@/components/Appliances";
import Compare from "@/components/Compare";
import Favourite from "@/components/Favourite";
import Service from "@/components/Service";
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div>
      <Appliances/>
      <Service/>
      <Compare/>
      <Favourite/>
    </div>
  );
}
