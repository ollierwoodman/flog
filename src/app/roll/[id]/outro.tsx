import Markdown from "@/components/markdown";

const RollOutro = ({ epiloguePath, bgColorClassName, textColorClassName }: { epiloguePath: string, bgColorClassName: string, textColorClassName: string }) => {
  return (
    <>
      <div className="flex-1 flex flex-col justify-center w-full overflow-y-scroll">
        <Markdown
          filePath={epiloguePath}
          className="prose prose-invert text-start min-w-full max-w-full w-full"
        />
      </div>
    </>
  );
};

export default RollOutro;
