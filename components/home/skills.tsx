import { SkillDataProvider } from "@/components/widgets/skill-data-provider";
import { SkillText } from "@/components/widgets/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";
import VideoBackground from "../layout/video-bg.layout";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative py-20"
    >
      <VideoBackground path="/videos/skills-bg.webm">
      <SkillText />
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center" style={{ transform: "scale(0.9)" }}>
        {SKILL_DATA.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center" style={{ transform: "scale(0.9)" }}>
        {FRONTEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center" style={{ transform: "scale(0.9)" }}>
        {BACKEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center" style={{ transform: "scale(0.9)" }}>
        {FULLSTACK_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center" style={{ transform: "scale(0.9)" }}>
        {OTHER_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
        </VideoBackground>
    </section>
  );
};
