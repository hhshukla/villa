import React from "react";
import { VideoComponentData } from "./VideoComponent.mock";
import Image from "next/image";

const VideoComponent = () => {
  return (
    <div className="bg-white">
      <div className="relative">
        <img
          src={VideoComponentData?.image}
          alt=""
          className="h-screen lg:h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center ">
          <h4 className="text-orange-400 mb-5 font-bold">
            {VideoComponentData?.title}
          </h4>
          <h5 className="text-[40px] font-bold leading-[56px] text-center">
            {VideoComponentData?.subTitle}
          </h5>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex relative bottom-[100px]  justify-center">
          <img
            src={VideoComponentData?.videoImage}
            alt=""
            className="h-screen lg:h-full"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <a href="https://www.youtube.com/" target="_blank">
              <Image
                src={VideoComponentData?.playButton}
                alt=""
                className=""
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
