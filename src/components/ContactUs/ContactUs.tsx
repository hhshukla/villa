import React from "react";
import { ContactUsData } from "./ContactUs.mock";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const ContactUs = () => {
  return (
    <div className="bg-white py-12">
      <div className="relative">
        <Image
          src={ContactUsData?.image}
          alt=""
          className="h-screen lg:h-full w-full object-cover"
          width={1000}
          height={2000}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center ">
          <h4 className="text-orange-400 mb-5 font-bold">
            {ContactUsData?.title}
          </h4>
          <h5 className="text-[40px] font-bold leading-[56px] text-center">
            {ContactUsData?.subTitle}
          </h5>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="relative bottom-[100px]  grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
            className="w-full h-[500px] px-4 rounded-lg overflow-hidden"
            allowFullScreen
          />
          <div className="p-6 mx-6 bg-white rounded-lg shadow-boxShadow">
            <label className="text-black font-normal text-base ">
              Full Name
            </label>
            <input
              type="text"
              className="border-2 border-gray-200 rounded-full w-full py-2 px-4 my-4"
            />
            <label className="text-black font-normal text-base">
              Email Address
            </label>
            <input
              type="email"
              className="border-2 border-gray-200 rounded-full w-full py-2 px-4 my-4"
            />
            <label className="text-black font-normal text-base">Subject</label>
            <input
              type="text"
              className="border-2 border-gray-200 rounded-full w-full py-2 px-4 my-4"
            />
            <label className="text-black font-normal text-base">Message</label>
            <input
              type="textarea"
              className="border-2 border-gray-200 rounded-full w-full py-2 px-4 my-4"
            />
            <button
              type="submit"
              className="bg-black p-3 rounded-full text-white cursor-pointer my-4"
            >
              Send Message
            </button>
          </div>
        </div>
        <div className="lg:flex p-4">
          <div className="p-[35px] bg-white rounded-lg shadow-boxShadow m-4">
            <div className="text-black   text-center   flex justify-center items-center">
              <div className="p-2 text-5xl text-orange-500 flex flex-col justify-center items-center">
                <FaPhoneAlt />
              </div>
              <div className="">
                <h6 className="font-bold mx-4">{ContactUsData?.number}</h6>
                <h5 className="text-gray-400 font-normal text-base text-center mx-4">
                  {ContactUsData?.description}
                </h5>
              </div>
            </div>
          </div>
          <div className="p-[35px] bg-white rounded-lg shadow-boxShadow m-4">
            <div className=" text-black   text-center   flex justify-center items-center">
              <div className="p-2 text-5xl text-orange-500">
                <TfiEmail />
              </div>
              <div className="">
                <h6 className="font-bold mx-4">{ContactUsData?.email}</h6>
                <h5 className="text-gray-400  font-normal text-base text-center">
                  {ContactUsData?.emailTitle}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
