import React from "react";
import { subHeaderData } from "./subHeader.mock";
import { TfiEmail } from "react-icons/tfi";
import { FaMap } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const SubHeader = () => {
  return (
    <div className="bg-white py-6">
      <div className="container mx-auto">
        <div className="lg:flex justify-between">
          <div className="lg:flex">
            <div className=" text-gray-500   text-center   flex justify-center items-center">
              <div className="p-2 text-2xl text-orange-500">
                <TfiEmail />
              </div>
              <div>
                <h6 className="font-normal mx-4 lg:border-r-2 px-5">
                  {subHeaderData?.email}
                </h6>
              </div>
            </div>
            <div className=" text-gray-500   text-center   flex justify-center items-center">
              <div className="p-2 text-2xl text-orange-500">
                <FaMap />
              </div>
              <div>
                <h6 className="font-normal mx-4">{subHeaderData?.address}</h6>
              </div>
            </div>
          </div>

          <div className="p-2 text-3xl text-orange-500 flex justify-center items-center">
            <div className="p-2 bg-gray-500 rounded-full mx-2 cursor-pointer">
              <CiFacebook />
            </div>
            <div className="p-2 bg-gray-500 rounded-full mx-2 cursor-pointer">
              <CiTwitter />
            </div>
            <div className="p-2 bg-gray-500 rounded-full mx-2 cursor-pointer">
              <CiInstagram />
            </div>
            <div className="p-2 bg-gray-500 rounded-full mx-2 cursor-pointer">
              <CiLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
