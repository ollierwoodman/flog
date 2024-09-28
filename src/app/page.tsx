import { ROLLS } from "@/lib/rolls";
import RollCard from "@/components/rollCard";
import ExposureBackground from "@/components/exposureBackground";

const rolls: roll[] = ROLLS;
const bestRollIds = ["first"]

const bestPicksPredicate = (roll: roll) => {
  return bestRollIds.includes(roll.id);
};

export default function Home() {
  return (
    <main className="flex flex-col p-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-center">Ollie's Film&nbsp;Blog</h1>
        {/* <h2 className="text-5xl mt-24 mb-8">Best picks</h2>
        <div className="flex flex-row">
          {rolls
            .filter(bestPicksPredicate)
            .map((roll) => {
              return (
                <RollCard
                  key={roll.id}
                  roll={roll}
                />
              );
            }
          )}
        </div> */}
        <h2 className="text-3xl mt-24 mb-8">About</h2>
        <p className="text-lg max-w-xl">
          My goal with film photography are to capture moments and places in their rawest form, without the contamination of software tricks, AI enhancement or anything of the like.
          <br />
          <br />
          Just like when learning anything new, not every shot I have taken here is perfect. However, by presenting them as a (mostly) complete roll of film, I want to present these mistakes in their original form and document my learning and improvement.
        </p>
        <h2 className="text-3xl mt-24 mb-8">All rolls</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {rolls
            .map((roll) => {
              return (
                <RollCard
                  key={roll.id}
                  roll={roll}
                />
              );
            }
          )}
        </div>
      </div>
    </main>
  );
}
