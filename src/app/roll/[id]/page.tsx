import { ROLLS } from "@/lib/rolls";
import Body from "./body";

const rolls = ROLLS;

export default function RollPage({ params }: { params: { id: string } }) {
  const roll = rolls.find((roll) => roll.id === params.id);

  if (roll === undefined) {
    return null;
  }

  return (
    <Body roll={roll} />
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return ROLLS.map((roll) => ({
    id: roll.id,
  }))
}