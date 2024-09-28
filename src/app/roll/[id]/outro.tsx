import Markdown from "@/components/markdown";

const RollOutro = ({ roll, bgColorClassName, textColorClassName }: { roll: roll, bgColorClassName: string, textColorClassName: string }) => {
  if (!roll.epiloguePath) {
    return null;
  }
  
  return (
    <div className="flex flex-col justify-center items-center min-w-[90vw] h-[90vh] overflow-y-scroll">
      {/* TODO: make this scrollable */}
      <Markdown
        filePath={roll.epiloguePath}
        className="prose prose-invert text-justify h-full p-8"
      />
    </div>
  );
};

export default RollOutro;
