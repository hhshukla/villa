import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface MainHeaderProps {
  logoImage: string;
  toggleIcon: string;
  menuItems: { label: string; path: string }[];
}

const MainHeader: React.FC<MainHeaderProps> = ({
  menuItems,
  logoImage,
  toggleIcon,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white py-4 px-2">
      <div className="container mx-auto">
        <div className="flex justify-around items-center">
          <div className="">
            <Image
              src={logoImage}
              alt="logo"
              className=""
              width={50}
              height={50}
            />
          </div>
          <div className="lg:hidden">
            <button
              className="block text-orange-600 text-xl px-3 py-1 focus:outline-none bg-white rounded-[3px] "
              onClick={toggleMenu}
            >
              <Image
                src={toggleIcon}
                alt="toggle navbar"
                className="w-10"
                width={10}
                height={10}
              />
            </button>
          </div>
          <div className="hidden lg:block">
            <ul className="flex">
              {menuItems?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="text-black font-medium font-sans hover:text-orange-500 mr-14"
                  >
                    {item?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden">
            <ul className="mt-2 text-center">
              {menuItems?.map((item, index) => (
                <li
                  className="text-black py-2 px-4 transition duration-1000 hover:text-primary1 cursor-pointer"
                  key={index}
                >
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainHeader;
