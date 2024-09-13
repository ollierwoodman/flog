import Markdown from "@/components/markdown";

const RollIntro = ({ roll, bgColorClassName, textColorClassName }: { roll: roll, bgColorClassName: string, textColorClassName: string }) => {
  return (
    <>
      <p className="absolute -top-1/4 text-[75vh] text-center leading-tight opacity-10">
        {roll.chineseName}
      </p>
      <div className="flex-1 flex flex-col justify-center items-center w-full">
        <h1 className="text-6xl bold">
          {roll.name}
        </h1>
        <p className="text-xl">
          {roll.description}
        </p>
        <hr className="opacity-50 w-full my-3" />
        <div className="flex-1 flex flex-col justify-center w-full overflow-y-scroll">
          <Markdown
            filePath={roll.forewordPath}
            className="prose prose-invert text-start min-w-full max-w-full w-full"
          />
        </div>
        <hr className="opacity-50 w-full my-3" />
        <div className="flex flex-row justify-around gap-4">
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
    </>
  );
};

export default RollIntro;
