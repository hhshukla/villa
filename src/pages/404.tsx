import React from "react";
import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={"/Image/single-property.jpg"}
          alt={"404image"}
          width={1000}
          height={1000}
          className="w-full h-screen  object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center bg-white bg-opacity-30 p-5 rounded-lg mx-4">
            <h2 className="text-lg lg:text-7xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold mb-5">
              Lost your Way?
            </h2>
            <h3 className="text-base lg:text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Sorry , We cannot find the page, You will find loads to explore on
              the home page
            </h3>
            <Link
              href={"/"}
              className="font-bold text-base lg:text-lg hover:underline bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
            >
              Home
            </Link>
            <p className=" font-bold text-base lg:text-lg hover:underline bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Error code:404
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
