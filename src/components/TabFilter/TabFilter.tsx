import React, { useState } from "react";
import { TabFilterData } from "./TabFilter.mock";
import clsx from "clsx";
import Image from "next/image";

const TabFilter = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between">
          <div className="px-6 lg:w-1/2">
            <h3 className="text-orange-400 font-bold text-base mb-5">
              {TabFilterData?.title}
            </h3>
            <h4 className="text-black font-bold text-[40px]">
              {TabFilterData?.subTitle}
            </h4>
          </div>
          <div className="lg:flex justify-center items-center">
            {TabFilterData?.TabsData?.map((tabData, tabIndex) => (
              <div key={tabIndex} onClick={() => handleTabClick(tabIndex)}>
                <ul
                  className={clsx(
                    "p-4 m-4 cursor-pointer text-white rounded-lg",
                    {
                      "bg-orange-500": activeTab === tabIndex,
                      "bg-gray-800 ": activeTab !== tabIndex,
                    }
                  )}
                >
                  <li className="text-lg font-medium">{tabData?.tabTitle}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          {TabFilterData?.TabsData?.map((tabData, tabIndex) => (
            <div
              key={tabIndex}
              className={clsx(
                "p-5 grid grid-cols-1 lg:grid-cols-3 lg:gap-6",
                activeTab === tabIndex ? "" : "hidden"
              )}
            >
              <div className="bg-white shadow-boxShadow rounded-lg p-5 mb-5">
                {tabData?.list?.map((listData, listIndex) => (
                  <div
                    className="px-5 pb-4 flex my-5 item-center border-[1px] border-gray-200 border-x-0 border-t-0"
                    key={listIndex}
                  >
                    <div className="flex flex-col mx-4 ">
                      <h5 className="text-black text-[22px] font-bold">
                        {listData?.title}
                      </h5>
                      <h5 className="text-gray-400">{listData?.subTitle}</h5>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mb-5">
                <Image
                  src={tabData?.img}
                  alt=""
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mb-5">
                <h4 className="text-black text-lg font-semibold mb-5">
                  {tabData?.title}
                </h4>
                <p className="text-gray-500 font-light text-base">
                  {tabData?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabFilter;
