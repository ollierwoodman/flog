import { ROLLS } from "@/lib/rolls";
import Body from "./body";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

const rolls = ROLLS;

export default async function RollPage({ params }: { params: { id: string } }) {
  const roll = rolls.find((roll) => roll.id === params.id);

  if (roll === undefined) {
    return null;
  }
  
  const imagesWithPlaceholders = roll.images.map(async (image) => {
    if (image === null) return image;

    try {
      const file = await fs.readFile(`./public/${image?.path}`);
      const { base64 } = await getPlaiceholder(file);
      return {
        ...image,
        placeholderSrc: base64,
      }
    } catch (err) {
      console.error(err);
      return image;
    }
  })

  roll.images = await Promise.all(imagesWithPlaceholders);

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