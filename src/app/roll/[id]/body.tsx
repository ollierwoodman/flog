"use client";
import ExposureBackground from "@/components/exposureBackground";
import { HomeButton } from "@/components/homeButton";
import Image from "next/image";
import { useRef } from "react";
import RollIntro from "./intro";
import RollOutro from "./outro";

export default function Body({ roll }: { roll: roll }) {
  const scrollingContainer = useRef<HTMLDivElement>(null);

  const bgColorClassName = "bg-slate-950";
  const textColorClassName = "text-slate-200";

  return (
    <div className={`relative flex flex-row flex-nowrap items-center ${bgColorClassName} ${textColorClassName} text-center text-balance h-screen overflow-y-clip overflow-x-scroll px-2`}>
      <HomeButton className="fixed top-2 left-2 z-50" variant="secondary" />
      <div ref={scrollingContainer} className="relative flex flex-row flex-nowrap items-center h-screen gap-[7.8571vh] overflow-x-clip">
        <ExposureBackground
          nExposures={roll.images.length + 5}
          className="absolute top-0 left-0 h-full"
        />
        <div className="relative flex flex-col items-center h-[68.67vh] w-[75vw] p-4">
          <RollIntro roll={roll} bgColorClassName={bgColorClassName} textColorClassName={textColorClassName} />
        </div>
        {roll.images.map((image, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center h-[68.67vh] min-w-[102.8571vh] w-[102.8571vh] bg-black"
            >
              {image === null ?
                <p className="text-xl italic">Redacted for privacy</p>
                : (
                  <Image
                    className="object-fill"
                    src={image.path}
                    alt={image.alt ?? roll.name}
                    width={image.width}
                    height={image.height}
                    quality={50}
                  />
                )}
            </div>
          );
        })}
        {roll.epiloguePath && (
          <div className="flex flex-col items-center h-[68.67vh] w-[50vw] p-4">
            <RollOutro epiloguePath={roll.epiloguePath} bgColorClassName={bgColorClassName} textColorClassName={textColorClassName} />
          </div>
        )}
      </div>

    </div>
  );
};