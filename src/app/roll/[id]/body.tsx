"use client";
import ExposureBackground from "@/components/exposureBackground";
import Image from "next/image";
import RollIntro from "./intro";
import RollOutro from "./outro";
import BottomMenu from "./bottomMenu";

export default function Body({ roll }: { roll: roll }) {
  const bgColorClassName = "bg-slate-950";
  const textColorClassName = "text-slate-200";

  return (
    <>
      <div className={`relative flex flex-row flex-nowrap items-center ${bgColorClassName} ${textColorClassName} text-center text-balance h-screen overflow-x-scroll px-2`}>
        <p className="absolute inset-y-0 left-0 text-[75vh] text-center leading-tight opacity-10">
          {roll.chineseName}
        </p>
        <BottomMenu />
        <RollIntro roll={roll} bgColorClassName={bgColorClassName} textColorClassName={textColorClassName} />
        <div className="relative flex flex-row flex-nowrap items-center h-screen gap-[7.8571vh] overflow-x-clip">
          {roll.images.map((image, index) => {
            return (
              <div
                key={index}
                id={`image-${index}`}
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
                      blurDataURL={image.placeholderSrc}
                      placeholder="blur"
                      priority={index < 1}
                    />
                  )}
              </div>
            );
          })}
          <ExposureBackground
            nExposures={roll.images.length + 3}
            className="absolute top-0 left-0 h-full"
          />
        </div>
        {roll.epiloguePath && (
          <RollOutro roll={roll} bgColorClassName={bgColorClassName} textColorClassName={textColorClassName} />
        )}
      </div>
    </>
  );
};