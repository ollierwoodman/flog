import Link from "next/link";

const RollCard: React.FC<{roll: roll}> = ({
  roll,
}) => {
  let thumbnailPath = roll.thumbnailPath;
  if (!thumbnailPath) {
    thumbnailPath = roll.images.findLast((image) => image !== null)?.path;
  }


  return (
    <Link className="group" href={`/roll/${roll.id}`}>
      <div 
        className="relative flex flex-col justify-center items-center text-center rounded-md shadow-md group-hover:scale-105 transition-transform p-4 aspect-[4/3] -z-20"
        style={{
          backgroundImage: `url(${thumbnailPath})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center bg-white bg-opacity-50 w-2/3 p-2 rounded-md group-hover:bg-opacity-80 transition-colors">
          <h2 className="text-3xl font-bold">{roll.name}</h2>
          <p className="text-lg">{roll.description}</p>
        </div>
        <p className="absolute text-[1000%] inset-0 opacity-50 text-white leading-none inset-y-0 right-0 -z-10">{roll.chineseName}</p>
      </div>
    </Link>
  );
};

export default RollCard;