import Image from "next/image";
import Link from "next/link";

type TeamCardProps = {
  src: string;
  title: string;
  designation: string;
  description: string;
  link?: string | null;
};

export const TeamCard = ({
  src,
  title,
  designation,
  description,
  link,
}: TeamCardProps) => {
  const memberCard = <div className="overflow-hidden justify-center items-center flex flex-col w-full">
    <div style={{ height: '250px', width: '250px' }}>

      <Image
        src={src}
        alt={title}
        width={250}
        height={250}
        className="object-contain"
      />
    </div>

    <div className="relative p-4">
      <h1 className="text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{title}</h1>
      <p className="text-[10px] text-center mt-2 text-gray-300"><b>{designation}</b></p>
      <p className="text-[15px] text-center mt-2 text-gray-300">{description}</p>
    </div>
  </div>;
  if(!link){
    return <div className="overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] justify-center items-center flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out w-full">
      {memberCard}
    </div>;
  }
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] justify-center items-center flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out w-full"
    >
      {memberCard}
    </Link>
  );
};
