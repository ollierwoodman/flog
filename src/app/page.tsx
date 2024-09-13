import { ROLLS } from "@/lib/rolls";
import RollCard from "@/components/rollCard";

const rolls: roll[] = ROLLS;
const bestRollIds = ["first"]

const bestPicksPredicate = (roll: roll) => {
  return bestRollIds.includes(roll.id);
};

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-9xl font-bold">Ollie's Film Blog</h1>
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
        <h2 className="text-5xl mt-24 mb-8">All rolls</h2>
        <div className="flex flex-row">
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
