import Link from "next/link";
import { IconHome } from "./icons";

export const HomeButton = ({...props}) => {
  return (
    <Link title="Home" href="/" className="bg-slate-200 hover:bg-slate-300 active:ring-2 text-slate-950 rounded-full p-1">
      <span className="text-3xl">
        <IconHome />
      </span>
      <span className="sr-only">Home</span>
    </Link>
  );
};
