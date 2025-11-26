import { Contributers } from "@/components/about-us/contributers";
import { AboutUsHero } from "@/components/about-us/about-us";
import { VisionAndMission } from "@/components/sub/vision-mission";

export default function AboutUs() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <AboutUsHero />
        <VisionAndMission />
        <Contributers />
      </div>
    </main>
  );
}
