import Image from "next/image";
import Link from "next/link";

type TeamCardProps = {
  src: string;
  title: string;
  designation: string;
  description: string;
  link: string;
};

export const TeamCard = ({
  src,
  title,
  designation,
  description,
  link,
}: TeamCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <div style={{ height: '250px' }}>

        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{title}</h1>
        <p className="text-[10px] text-center mt-2 text-gray-300"><b>{designation}</b></p>
        <p className="text-[15px] text-center mt-2 text-gray-300">{description}</p>
      </div>
    </Link>
  );
};
