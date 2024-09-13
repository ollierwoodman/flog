import Link from "next/link";

const RollCard: React.FC<{roll: roll}> = ({
  roll,
}) => {
  return (
    <Link href={`/roll/${roll.id}`}>
      <div className="relative flex flex-col border-2 border-black p-12">
        <h2 className="text-3xl font-bold">{roll.name}</h2>
        <p className="text-lg">{roll.description}</p>
        <p className="absolute text-9xl opacity-25 leading-none inset-y-0 right-0">{roll.chineseName}</p>
      </div>
    </Link>
  );
};

export default RollCard;