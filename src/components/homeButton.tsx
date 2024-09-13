import Link from "next/link";
import { Button } from "./ui/button";
import { IconBackArrow } from "./icons";

export const HomeButton = ({...props}) => {
  return (
    <Button 
      title="Go home"
      className="mt-4"
      asChild
      {...props}
    >
      <Link href="/">
        <IconBackArrow className="mr-2" />
        Go home
      </Link>
    </Button>
  );
};
