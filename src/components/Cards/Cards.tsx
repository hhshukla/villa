import React from "react";
import { CardData } from "./Cards.mock";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center ">
          <div className="lg:w-1/2 text-center px-4">
            <h4 className="text-orange-400 font-medium mb-5 p-2 m-4">
              {CardData?.title}
            </h4>
            <h5 className="text-black text-[40px] font-bold">
              {CardData?.subTitle}
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 py-12">
          {CardData?.cardDetailsData?.map((card, index) => (
            <div className="m-4 pb-5 bg-[#fafafa] rounded-2xl" key={index}>
              <div className="flex justify-center py-8">
                <Image
                  src={card?.img}
                  alt=""
                  width={296}
                  height={296}
                  className="mb-5 rounded-lg "
                />
              </div>

              <div className="px-4">
                <div className="flex justify-between my-5">
                  <h4 className="text-black font-normal text-basep-3 bg-orange-400 bg-opacity-50 p-2 rounded-lg">
                    {card?.title}
                  </h4>
                  <h5 className="text-orange-500 font-bold text-lg">
                    {card?.price}
                  </h5>
                </div>
                <div className="">
                  <h4 className="text-black font-semibold text-lg m-3">
                    {card?.address}
                  </h4>
                  {card?.detailList?.map((detail, index) => (
                    <div className="" key={index}>
                      <ul className="flex flex-wrap pb-5">
                        <li className="text-black font-normal text-lg mx-3">
                          area:{detail?.area}
                        </li>
                        <li className="text-black font-normal text-lg mx-3">
                          bathroom:{detail?.bathroom}
                        </li>
                        <li className="text-black font-normal text-lg mx-3">
                          bedroom:{detail?.bedroom}
                        </li>
                        <li className="text-black font-normal text-lg mx-3">
                          floor:{detail?.floor}
                        </li>
                        <li className="text-black font-normal text-lg mx-3">
                          parking:{detail?.parking}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="border-t-[1px] border-gray-200 border-x-0 ">
                  <div className="p-4 text-white bg-black rounded-full text-center m-5 cursor-pointer flex justify-center items-center">
                    <FaCalendarAlt />
                    <h6 className="mx-2">Schedule visit</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
