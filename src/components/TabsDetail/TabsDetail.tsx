import React from "react";
import { tabsDetailData } from "./TabsDetail.mock";

const TabsDetail = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="lg:flex justify-center py-12">
          {tabsDetailData?.map((tab, index) => (
            <div
              className="m-8 flex bg-orange-400 bg-opacity-10 p-5 rounded-lg relative"
              key={index}
            >
              <div className="absolute rounded-full bg-orange-500 w-[50px] h-[50px] -right-[25px] -top-[25px]"></div>
              <h4 className="text-orange-500 font-bold text-[40px]">
                {tab?.number}
              </h4>
              <div className="mx-5 flex flex-col justify-center">
                <h5 className="text-black font-bold text-base">{tab?.title}</h5>
                <h6 className="text-black font-bold text-base">
                  {tab?.subTitle}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsDetail;
