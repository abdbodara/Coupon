import React, { useState } from "react";
import Image from "next/image";
import mail from "../../public/Assets/Images/mail.png";
import { useRouter } from "next/router";
import { useCreateSubscribeMutation } from "../../app/api";

const Subscribe = () => {
  const router = useRouter();

  const [inputValue, setInputValue] = useState({
    email: "",
  });
  const [createSubscribe, { response }] = useCreateSubscribeMutation();

  const clickHandler = async (e) => {
    try {
      e.preventDefault();
      await createSubscribe(inputValue);
      setInputValue({
        email: "",
      });
    } catch (error) {
      return error;
    }
  };

  return (
    <div
      className={`py-[24px] ${
        router.pathname === "/contact" || router.pathname === "/redeem/[id]"
          ? "bg-[linear-gradient(to_bottom,#fdfeff,#dfe8ef)]"
          : "bg-[#e6edf2]"
      } `}
    >
      <div className="lg:max-w-[1140px] md:max-w-[720px] max-w-[540px] mx-auto lg:px-[14px] px-[30px] lg:flex justify-between items-center">
        <div className="flex lg:justify-start justify-center gap-[12px]">
          <div className="bg-[#60a600] rounded-full lg:w-[68px] w-[50px] lg:h-[68px] h-[50px] flex justify-center items-center">
            <Image src={mail} alt="mail" className="lg:w-auto w-[25px]" />
          </div>
          <div>
            <p className="italic text-[14px] lg:text-left">For More Savings</p>
            <h1 className="text-[22px] font-bold italic">Subscribe Now</h1>
            <p className="text-[12px] mt-[6px] max-w-[338px] lg:block hidden">
              We Value Your Savings As Much As You Do. Subscribe now And Keep
              Saving On Everything With The Latest Coupons and Offers!
            </p>
          </div>
        </div>
        <p className="text-[14px] my-[14px] text-center block lg:hidden">
          We Value Your Savings As Much As You Do. Subscribe now And Keep Saving
          On Everything With The Latest Coupons and Offers!
        </p>
        <div className="lg:w-[calc(100%-520px)]">
          <div className="lg:flex gap-[6px]">
            <input
              type="email"
              name="email"
              value={inputValue.email}
              onChange={(e) =>
                setInputValue((...preValue) => ({
                  ...preValue,
                  [e.target.name]: e.target.value,
                }))
              }
              placeholder="Enter your email address"
              className="text-[#828c99] border-[1px] border-[#979797] bg-white p-[12px] h-[40px] text-[12px] rounded-[3px] lg:w-[65%] w-full lg:placeholder:text-left placeholder:text-center"
            />
            <button
              className="bg-[#60a600] shadow-[0_0_6px_0_rgba(0,0,0,.23)] rounded-[3px] text-[14px] lg:w-[35%] w-full text-white p-[12px] h-[40px] flex justify-center items-center italic lg:mt-0 mt-[12px]"
              onClick={clickHandler}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
