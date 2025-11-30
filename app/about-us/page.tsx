import { Contributers } from "@/components/about-us/contributers";
import { AboutUsHero } from "@/components/about-us/about-us";
import { VisionAndMission } from "@/components/sub/vision-mission";
import BaseLayout from "@/components/layout/base.layout";
import { Spacer } from "@/components/layout/helper.layout";

export default function AboutUs() {
  return (
    <BaseLayout>
      <AboutUsHero />
      <Spacer height="60px" />
      <VisionAndMission />
      <Spacer height="60px" />
      <Contributers />
    </BaseLayout>
  );
}
