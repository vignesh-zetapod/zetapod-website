import { Encryption } from "@/components/main/encryption";
import { Projects } from "@/components/main/projects";
import { Hero } from "@/components/main/hero";
import { Team } from "@/components/main/team";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Team />
        <Encryption />
      </div>
    </main>
  );
}
