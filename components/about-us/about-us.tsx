import { AboutUsHeroContent } from "@/components/sub/about-us-hero-content";

export const AboutUsHero = () => {
  return (
    <div className="relative flex flex-col h-full w-full mt-24">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <AboutUsHeroContent />
    </div>
  );
};
