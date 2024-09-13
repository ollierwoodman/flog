"use client";
import { Button } from "@/components/ui/button";
import { RefObject } from "react";

const bottomMenu = ({scrollingContainerRef}: {scrollingContainerRef: RefObject<HTMLDivElement>}) => {
  return (
    <div className="fixed bottom-2 right-2 z-50">
      <Button
        title="Back to start"
        variant="secondary"
        className="mr-2"
        disabled={scrollingContainerRef.current === null}
        onClick={() => {
          scrollingContainerRef.current?.scrollTo(0, 0);
        }}
      >
        Back to start
      </Button>
      <Button
        title="Skip to end"
        variant="secondary"
        disabled={scrollingContainerRef.current === null}
        onClick={() => {
          scrollingContainerRef.current?.scrollTo(document.body.scrollWidth, 0);
        }}
      >
        Skip to end
      </Button>
    </div>
  );
};

export default bottomMenu;