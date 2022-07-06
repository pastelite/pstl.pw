import { HTMLAttributes } from "react";

interface BackgroundProps extends HTMLAttributes<HTMLDivElement> {
  isZoom: boolean;
}

export default function Background({ isZoom, ...other }: BackgroundProps) {
  return (
    <div
      {...other}
      className="overflow-hidden fixed h-screen w-screen pointer-events-none -z-10"
    >
      <div className={`${isZoom ? "zoom" : ""} background`}></div>
    </div>
  );
}
