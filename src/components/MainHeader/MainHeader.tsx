import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MainHeaderData } from "./MainHeader.mock";
import { FaCalendarAlt } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white py-3 px-2 sticky top-0 z-10 ">
      <div className="container mx-auto">
        <div className="flex justify-around items-center">
          <div className="">
            <Image
              src={MainHeaderData?.logoImage}
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
              <div className="text-4xl font-bold">
                <HiBars3 />
              </div>
            </button>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">
              {MainHeaderData?.menuItems?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="text-black font-medium font-sans hover:text-orange-500 mr-14"
                  >
                    {item?.label}
                  </Link>
                </li>
              ))}
              <div className=" text-white bg-black rounded-full text-center m-5 cursor-pointer flex justify-center items-center">
                <div className="p-4 bg-orange-500 rounded-full text-center">
                  <FaCalendarAlt />
                </div>
                <h6 className="mx-2">{MainHeaderData?.link}</h6>
              </div>
            </ul>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden">
            <ul className="mt-2 text-center">
              {MainHeaderData?.menuItems?.map((item, index) => (
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
