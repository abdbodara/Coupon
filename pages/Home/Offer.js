import React, { useState } from "react";
import Image from "next/image";
import subscribe from "../../public/Assets/Images/subscribe-img.png";
import { useCreateSubscribeMutation } from "../../app/api";
const Offer = () => {
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
    <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[14px] mt-[24px]">
      <div className="bg-[#e5f6ff] rounded-[22px] p-[24px_36px] flex lg:justify-between justify-center">
        <div>
          <h1 className="lg:text-[24px] text-[18px] font-bold lg:my-[24px] my-[18px] lg:text-left text-center">
            Get The Latest & Best Coupon/Offer Alerts
          </h1>
          <p className="text-[#030306] my-[14px] text-[14px] lg:max-w-[480px] lg:text-left text-center">
            35,00,000+ Subscriptions Across India! & Counting! Subscribe to have
            new coupon lists delivered directly to your inbox
          </p>
          <div className="lg:flex gap-2 mt-[32px]">
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
              placeholder="Enter Email Address"
              className="custom-input border-[#ccc] border-[1px] p-[.5em_.6em] rounded text-[14px] placeholder:opacity-100 h-[44px] lg:max-w-[290px] w-full"
            />
            <button
              className="bg-[#60a600] shadow-[0_0_6px_0_rgba(0,0,0,.23)] rounded-[3px] lg:w-[200px] w-full h-[44px] text-white text-[14px] lg:mt-0 mt-[7px]"
              onClick={clickHandler}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
        <Image src={subscribe} alt="subscribe" className="lg:block hidden" />
      </div>
    </div>
  );
};

export default Offer;
