import { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <main className="h-full w-full">
  <div className="flex flex-col gap-20">
    <div className="relative flex flex-col w-full pt-24 overflow-hidden">
      
      {/* Blackhole Video */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-10.1rem] lg:top-[-10.1rem] left-1/2 -translate-x-1/2 object-cover max-w-[800px] -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* Content Wrapper */}
      <div className="flex flex-col items-center justify-center px-20 w-full z-20">
        {children}
      </div>

    </div>
  </div>
</main>

  );
}
