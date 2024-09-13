import { HomeButton } from "@/components/homeButton";

export const runtime = "edge";

export default function NotFound() {
  return (
    <>
      <title>404: This page could not be found.</title>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="text-5xl mb-8">404</h1>
        <p className="text-xl">Couldn&apos;t find what you&apos;re looking for!</p>
        <HomeButton />
      </div>
    </>
  );
}