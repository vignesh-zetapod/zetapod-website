import { Encryption } from "@/components/home/encryption";
import { Hero } from "@/components/home/hero";
import { Team } from "@/components/home/team";
import { Skills } from "@/components/home/skills";
import BaseLayout from "@/components/layout/base.layout";
import { Spacer } from "@/components/layout/helper.layout";

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Skills />
      <Team />
      <div className="h-full w-full hidden lg:block">
      <Spacer height="150px" />
      <Encryption />
      </div>
    </BaseLayout>
  );
}
