import React from "react";
import { CommonBannerData } from "./CommonBanner.mock";

const CommonBanner = () => {
  return (
    <div>
      <div className="relative">
        <img src={CommonBannerData?.img} alt="" className="" />
        <div className="absolute inset-0 flex justify-center items-center">
          <h3 className="text-3xl font-bold">{CommonBannerData?.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
