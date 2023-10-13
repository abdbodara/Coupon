import React, { useEffect } from "react";
import Image from "next/image";
import img from "../public/Assets/Images/login-image.png";
import { IoClose } from "react-icons/io5";
import Google from "../pages/api/auth/google";
import { AiFillFacebook } from "react-icons/ai";

const Login = ({ setIsOpen }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div
        className={`lg:bg-[linear-gradient(to_bottom,#28538f_0,#6289c1_100%)] bg-white lg:h-[calc(100vh-115px)] h-screen flex justify-center lg:items-center lg:relative absolute lg:top-auto top-0 w-full`}
      >
        <div className="lg:max-w-[750px] lg:w-[70%] w-full lg:m-auto lg:block flex flex-col justify-between">
          <div className="lg:flex lg:h-[407px]">
            <div className="bg-[#071938] p-[24px_24px_0] lg:w-1/2 lg:rounded-[4px_0_0_0]">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-[6px] top-[6px] text-[#ccc] block lg:hidden"
              >
                <IoClose className="text-[30px]" />
              </button>
              <h1 className="lg:text-[25px] text-[18px] text-white font-bold lg:max-w-[200px] max-w-[150px] leading-[28px] mb-[12px] lg:mt-[66px] mt-[16px] lg:text-left text-center lg:mx-0 mx-auto">
                Start Saving While You Shop.
              </h1>
              <p className="text-white text-[14px] lg:text-left text-center">
                Explore tons of Coupons, Deals.
              </p>
              <div className="lg:max-w-[300px] max-w-[240px] lg:mx-0 mx-auto mt-[24px]">
                <Image src={img} alt="img" className="w-full" />
              </div>
            </div>
            <div className="bg-white lg:w-1/2 p-[24px] flex flex-col items-center justify-center relative rounded-[0_4px_0_0] lg:mt-0 mt-[22px]">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-[2px] top-[2px] text-[#ccc] lg:block hidden"
              >
                <IoClose className="text-[30px]" />
              </button>
              <h1 className="text-[#2f3843] lg:text-[25px] text-[22px] font-bold text-center">
                Log In
              </h1>
              <Google />
            </div>
          </div>
          <div className="bg-[#8db654] text-white text-center p-[12px] rounded-[0_0_4px_4px] lg:text-[16px] text-[14px]">
            <p className="block lg:hidden">
              © 2023. All Rights Reserved. <br /> Proudly Designed By GrabOn
              Design Team.
            </p>
            <p className="lg:block hidden">
              © 2023. All Rights Reserved. Proudly Designed By GrabOn Design
              Team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
