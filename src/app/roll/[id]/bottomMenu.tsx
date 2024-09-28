"use client";
import { HomeButton } from "@/components/homeButton";
import { IconArrowLeftCircle } from "@/components/icons";
import { RefObject } from "react";

const BottomMenu = ({
  
}: {

}) => {
  return (
    <div className={`fixed z-50 bottom-0 right-0 w-min flex flex-row justify-center items-center bg-slate-200 bg-opacity-75 rounded-full mx-2 my-4 p-4 gap-2`}>
      <HomeButton />
      {/* <button 
        title="Back to start" 
        className="bg-slate-200 text-3xl text-slate-950 rounded-full p-1"
      >
        <IconArrowLeftCircle />
        <span className="sr-only">Back to start</span>
      </button> */}
    </div>
  );
};

export default BottomMenu;