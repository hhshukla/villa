import React, { useEffect, useState } from "react";
import { ContentBlockData } from "./ContentBlock.mock";

const ContentBlock = () => {
  const [isopen, isSetOpen] = useState(false);
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    isSetOpen(true);
  }, []);
  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 py-12 px-6">
          <div className="">
            <img
              src={ContentBlockData?.image}
              alt="contentblock-img"
              className="w-full"
            />
          </div>
          <div className="p-6">
            <h2 className="text-[#ee626b] font-bold text-base mb-4">
              {ContentBlockData?.title}
            </h2>
            <h2 className="text-black text-4xl font-bold w-[70%] leading-[56px]">
              {ContentBlockData?.description}
            </h2>
            {ContentBlockData?.accordionData?.map((data, index) => (
              <div className="bg-gray-50 w-full" key={index}>
                <button
                  className=" border-[1px] border-gray-300 border-x-0 border-t-0 px-4 w-full text-left py-4"
                  onClick={() => isSetOpen(!isopen)}
                >
                  <h4 className="text-black font-bold mb-1 px-2 ">
                    {data?.subTitle}
                  </h4>
                </button>

                {isopen ? (
                  <h4 className="text-orange-400 font-medium mb-5 p-2 m-4">
                    {data?.subDescription}
                  </h4>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
          <div className="p-5">
            <div className="bg-white shadow-boxShadow rounded-lg  p-5">
              {ContentBlockData?.list?.map((listData, index) => (
                <div
                  className="px-5 pb-4 flex my-5 item-center border-[1px] border-gray-200 border-x-0 border-t-0"
                  key={index}
                >
                  <img src={listData?.icon} alt="" className="" />
                  <div className="flex flex-col mx-4 ">
                    <h5 className="text-black text-[22px] font-bold">
                      {listData?.title}
                    </h5>
                    <h5 className="text-gray-400">{listData?.subTitle}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
function usestate(): [any, any] {
  throw new Error("Function not implemented.");
}
