"use client";

import { TeamCard } from "@/components/sub/team-card";
import { TEAM } from "@/constants";

export const Contributers = () => {
  return (
    <section
      id="team"
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5">
        Our Contributers
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {TEAM.map((member) => (
          <TeamCard
            key={member.name}
            src={member.image}
            title={member.name}
            designation={member.designation}
            description={member.description}
            link={member.link}
          />
        ))}
      </div>
    </section>
  );
};
