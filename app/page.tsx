import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Team } from "@/components/main/team";
import { Skills } from "@/components/main/skills";
import BaseLayout from "@/components/layout/base.layout";
import { Spacer } from "@/components/layout/helper.layout";

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Skills />
      <Team />
      <Spacer height="150px" />
      <Encryption />
    </BaseLayout>
  );
}
