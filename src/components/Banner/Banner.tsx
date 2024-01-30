import Slider from "react-slick";
import { BannerData } from "./Banner.mock";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="bg-white">
      <div>
        <div className="pb-8">
          <Slider {...settings}>
            {BannerData?.map((data, index) => (
              <div className="" key={index}>
                <div className="relative">
                  <img
                    src={data?.image}
                    alt=""
                    className="w-full h-screen lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-start lg:mx-32 p-5">
                    <div className="w-3/6 lg:w-1/2">
                      <h2 className="text-base px-[6px] py-[15px] bg-white text-orange-600 rounded-[3px] mb-8 w-40 text-center cursor-pointer">
                        {data?.title}
                      </h2>
                      <h3 className="text-[27px] lg:text-[62px] font-bold font-sans text-white">
                        {data?.subTitle}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
