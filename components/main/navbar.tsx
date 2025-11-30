'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS, SOCIALS } from "@/constants";

interface NavLink {
  title: string;
  link: string;
  subItems?: Array<{ title: string; link: string }>;
}

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (link: string) => pathname === link;
  const isDropdownActive = (parent: string) => pathname.startsWith(parent);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <Link
          href="/"
          className="flex items-center"
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="hidden md:flex md:selffont-bold ml-[10px] text-gray-300">Zetapod</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden lg:flex w-[560px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] rounded-full text-gray-200">
            {NAV_LINKS.map((link: NavLink) => (
              <div key={link.title} className="relative">
                {link.subItems ? (
                  <div
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className={`cursor-pointer ${
                      isDropdownActive(link.link) ? "bg-[rgba(255,255,255,0.7)] text-[#000000ff] rounded-full shadow-md" : "hover:bg-[rgba(255,255,255,0.2)] hover:rounded-full"
                    }`}
                  >
                    <span className="block px-4 py-2">{link.title}</span>
                    {isDropdownOpen && (
                      <div
                        className="absolute top-full left-0 pt-2 w-48 bg-[rgba(3,0,20,0.37)] backdrop-blur-md rounded-lg shadow-lg"
                      >
                        {link.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.link}
                            className={`block px-4 py-2 text-gray-300 ${
                              pathname === subItem.link ? "bg-[rgba(255,255,255,0.7)] text-[#000000ff] rounded-md" : "hover:bg-[rgba(255,255,255,0.2)] hover:text-primary"
                            }`}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.link}
                    target="_self"
                    className={`block px-4 py-2 cursor-pointer ${
                      isActive(link.link) ? "bg-[rgba(255,255,255,0.7)] text-[#000000ff] rounded-full shadow-md" : "hover:bg-[rgba(255,255,255,0.2)] hover:rounded-full"
                    }`}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden lg:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link: NavLink) => (
              <Link
                key={link.title}
                href={link.link}
                className="block px-4 py-2 cursor-pointer hover:bg-[rgba(255,255,255,0.2)] hover:rounded-full transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
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
      )}
    </div>
  );
};