import React, { useState } from "react";
import Image from "next/image";
import discount from "../../public/Assets/Images/tag-discount.svg";
import time from "../../public/Assets/Images/time-saver.png";
import money from "../../public/Assets/Images/money-saver.png";
import { useJoinPlatformsMutation } from "../../app/api";

const Platform = () => {
  const [joinPlatforms] = useJoinPlatformsMutation();
  const [inputValue, setInputValue] = useState({
    email: "",
  });
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      await joinPlatforms(inputValue);
      setInputValue({
        email: "",
      });
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="lg:bg-transparent bg-[#f3f6f8]">
      <div className="lg:max-w-[1140px] md:max-w-[720px] max-w-[540px] mx-auto px-[14px] lg:my-[36px] my-[12px]">
        <div className="lg:border-[#c0cdd7] lg:border-[1px] lg:bg-[#f3f6f8] lg:p-[30px] p-[20px_10px] rounded-sm lg:flex gap-[48px]">
          <div className="flex lg:w-[50%] justify-between">
            <div className="w-[33.33%] px-[14px]">
              <Image
                src={discount}
                alt="discovery"
                className="w-[30px] opacity-50 mx-auto"
              />
              <p className="text-center text-[#575757] mt-[12px] lg:text-[14px] text-[12px]">
                Effortless Discovery
              </p>
            </div>
            <div className="border-x-[#c0cdd7] border-x-[1px] w-[33.33%] px-[14px]">
              <Image
                src={time}
                alt="discovery"
                className="w-[30px] opacity-50 mx-auto"
              />
              <p className="text-center text-[#575757] mt-[12px] lg:text-[14px] text-[12px]">
                Time Saver
              </p>
            </div>
            <div className="w-[33.33%] px-[14px]">
              <Image
                src={money}
                alt="discovery"
                className="w-[30px] opacity-50 mx-auto"
              />
              <p className="text-center text-[#575757] mt-[12px] lg:text-[14px] text-[12px]">
                Money Saver
              </p>
            </div>
          </div>
          <div className="lg:w-[50%]" id="trendingdeal">
            <p className="font-bold text-[16px] lg:mb-[16px] mb-[24px] lg:mt-0 mt-[30px] lg:text-left text-center">
              Top Curated Deals. One Platform.
            </p>
            <div className="lg:flex gap-[6px]">
              <input
                type="text"
                name="email"
                value={inputValue.email}
                onChange={(e) =>
                  setInputValue((...preValue) => {
                    return {
                      ...preValue,
                      [e.target.name]: e.target.value,
                    };
                  })
                }
                placeholder="Enter your email address"
                className="text-[#828c99] border-[1px] border-black p-[12px] h-[40px] text-[12px] rounded-[3px] lg:w-[65%] w-full"
              />
              <button
                onClick={submitHandler}
                className="bg-[#8db654] shadow-[0_0_3px_0_rgba(0,0,0,.23)] rounded-[3px] text-[14px] lg:w-[35%] w-full text-white p-[12px] h-[40px] flex justify-center items-center lg:mt-0 mt-[12px]"
              >
                Start Saving!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
