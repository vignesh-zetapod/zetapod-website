import { ProjectCard } from "@/components/projects/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-[5%]">
        <h2 className="w-full text-4xl font-semibold text-white text-center mb-10">
          <i>
            We&apos;re assembling our portfolio with great projects—stay tuned for the reveal!
          </i>
        </h2>
        {/* {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))} */}
      </div>
    </section>
  );
};
