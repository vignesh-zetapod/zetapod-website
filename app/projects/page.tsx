import BaseLayout from "@/components/layout/base.layout";
import { ProjectsHero } from "@/components/projects/hero";
import { Projects } from "@/components/projects/projects";

export default function AboutUs() {
  return (
    <BaseLayout>
      <ProjectsHero />
      <Projects />
    </BaseLayout>
  );
}
