import Markdown from "@/components/markdown";

const RollIntro = ({ roll, bgColorClassName, textColorClassName }: { roll: roll, bgColorClassName: string, textColorClassName: string }) => {
  return (
    <div className="flex flex-col min-w-[90vw] h-full p-4">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <h1 className="flex-none text-6xl bold">
          {roll.name}
        </h1>
        <p className="flex-none text-xl">
          {roll.description}
        </p>
        <hr className="flex-none opacity-50 w-full my-3" />
        <div className="flex-1 flex min-h-0">
          <div className="flex flex-col justify-center h-full overflow-y-auto z-10">
            <Markdown
              filePath={roll.forewordPath}
              className="prose prose-invert text-justify h-full p-4"
            />
          </div>
        </div>
        <hr className="flex-none opacity-50 w-full my-3" />
        <div className="flex-none flex flex-row justify-around gap-4">
          {roll.camera && (
            <p className="text-2xl font-bold mt-4">
              {roll.camera?.brand} {roll.camera?.model}
            </p>
          )}
          {roll.filmStock && (
            <p className="text-2xl mt-4">
              {roll.filmStock.brand} {roll.filmStock.model} ({roll.filmStock.speed} ISO)
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RollIntro;
