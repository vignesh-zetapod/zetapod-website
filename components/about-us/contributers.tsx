"use client";

import { TeamCard } from "@/components/widgets/team-card";
import { TEAM } from "@/constants";

export const Contributers = () => {
  return (
    <section
      id="team"
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">
        <span className="hidden lg:block">Our Contributers</span>
        <span className="lg:hidden">Contributers</span>
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-[5%]">
        {TEAM.map((member) => (
          <div 
            key={member.name}
            className="flex justify-center w-full"
          >

          <TeamCard
            src={member.image}
            title={member.name}
            designation={member.designation}
            description={member.description}
            link={member.link}
            />
            </div>
        ))}
      </div>
    </section>
  );
};
