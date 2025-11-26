import Link from "next/link";

import { FOOTER_DATA, FOOTER_DATA_ABOUT } from "@/constants";
import { RxPerson } from "react-icons/rx";

export const Footer = () => {
  const about = FOOTER_DATA_ABOUT;
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] mt-20">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row justify-around flex-wrap">
          <div
            key="ReachUs"
            className="min-w-[200px] h-auto flex flex-col items-center justify-start"
          >
            <h3 className="font-bold text-[16px]">{about.title}</h3>
            <span className="text-[15px] ml-[6px] my-[15px]">{about.name}</span>
            <Link
              key={`mail-us-zetapod`}
              href={`mailto:${about.email}`}
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-row items-center"
            >
              <RxPerson />
              <span className="text-[15px] ml-[6px]">{about.email}</span>
            </Link>
            <div className="flex justify-center gap-6 mt-6">
              {about.data.map(({ link, name, icon: Icon }) => (
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={name}
                >
                  <Icon className="h-8 w-8 text-white" />
                </Link>
              ))}
            </div>
          </div>
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                !link ?
                  <div
                    key={`${column.title}-${name}`}
                    className="flex flex-row items-center my-[10px] cursor-default"
                  >
                    {Icon && <Icon />}
                    <span className="text-[15px] ml-[6px]">{name}</span>
                  </div> :
                  <Link
                    key={`${column.title}-${name}`}
                    href={link ?? ""}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex flex-row items-center my-[10px]"
                    aria-disabled={!link}
                  >
                    {Icon && <Icon />}
                    <span className="text-[15px] ml-[6px]">{name}</span>
                  </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] mt-[20px] text-[12px] text-center">
          &copy; {about.name} {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </div>
  );
};
