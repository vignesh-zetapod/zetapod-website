import { ReactNode } from "react";

interface VideoBackgroundProps {
  path: string;
  children: ReactNode;
}

export default function VideoBackground({ path, children }: VideoBackgroundProps) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* BACKGROUND VIDEO (layer 0) */}
      <div
        className="absolute inset-0 z-[-10] opacity-30 absolute flex items-center justify-center"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle at center, black 50%, transparent 100%)",
          maskImage:
            "radial-gradient(circle at center, black 50%, transparent 100%)",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      >
        <video
          className="w-full h-full object-cover"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src={path} type="video/webm" />
        </video>
      </div>

      {/* FOREGROUND CONTENT (layer 2) */}
      <div className="relative z-20">
        { children }
      </div>
    </div>


  );
}