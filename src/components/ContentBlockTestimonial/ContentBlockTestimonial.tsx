import React, { useEffect, useState } from "react";
import { ContentBlockTestimonialData } from "./ContentBlockTestimonial.mock";
import Image from "next/image";

const ContentBlockTestimonial = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleClick = (index: any) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 py-12 px-6 ">
          <div>
            <Image
              src={ContentBlockTestimonialData?.image}
              alt="contentblock-img"
              className="w-full h-full"
              width={1000}
              height={1000}
            />
          </div>

          <div className="bg-white shadow-boxShadow rounded-lg  p-5 w-1/2">
            {ContentBlockTestimonialData?.list?.map((listData, index) => (
              <div
                className="px-5 pb-4 flex my-5 justify-center item-center border-[1px] border-gray-200 border-x-0 border-t-0"
                key={index}
              >
                <Image
                  src={listData?.icon}
                  alt=""
                  className=""
                  width={50}
                  height={50}
                />
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
        <div className="py-12 w-1/2">
          {ContentBlockTestimonialData?.accordionData?.map((data, index) => (
            <div className="bg-gray-50 w-full" key={index}>
              <button
                className=" border-[1px] border-gray-300 border-x-0 border-t-0 px-4 w-full text-left py-4"
                onClick={() => handleClick(index)}
              >
                <h4 className="text-black font-bold mb-1 px-2 ">
                  {data?.subTitle}
                </h4>
              </button>

              {openAccordion === index && (
                <h4 className="text-orange-400 font-medium mb-5 p-2 m-4">
                  {data?.subDescription}
                </h4>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentBlockTestimonial;
