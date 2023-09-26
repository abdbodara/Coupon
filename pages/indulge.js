import React from "react";
import Indulge_header from "@/components/header/indulge_header";
import Image from "next/image";
import hostinger from "../public/Assets/Images/hostinger-banner.jpg";
import user from "../public/Assets/Images/user.png";
import { GoSearch } from "react-icons/go";
import ordermc from "../public/Assets/Images/ordermc.jpg";
import Indulge_footer from "@/components/footer/indulge_footer";

const Indulge = () => {
  return (
    <div>
      <Indulge_header />
      <div className="xl:max-w-[1140px] max-w-[980px] w-full m-auto bg-[#fff] px-[12px] mt-[20px]">
        <div className="lg:flex gap-[20px] w-full">
          <div className="lg:w-[75%]">
            <h1 className="text-[#111111] text-[21px] popins font-bold m-[10px_0_15px]">
              Search results for: node
            </h1>
            <div className="border-[#e3e3e3] border-[1px] md:p-[20px] p-[14px] rounded-[5px]">
              <div className="gap-[20px] flex items-start">
                <Image
                  src={hostinger}
                  alt="hostinger"
                  className="md:w-[160px] w-[100px]"
                />
                <div>
                  <h1 className="popins text-[19px] font-bold mb-[20px]">
                    Hostinger Hosting Plans, Benefits, & Offers
                  </h1>
                  <p className="text-[13px] mb-[15px] md:block hidden">
                    Hostinger is a web hosting company with the primary
                    objective of helping people succeed online. Hostinger
                    accomplishes this by continuously developing server ...
                  </p>
                  <div className="md:flex items-center gap-[8px] hidden">
                    <div className="flex items-center gap-[5px]">
                      <Image
                        src={user}
                        alt="user"
                        className="w-[22px] rounded-full"
                      />
                      <p className="text-[#111] text-[12px] italic">Ramya B</p>
                    </div>
                    <p className="text-[#999] text-[12px] italic flex items-center">
                      <span className="mr-[8px] w-[3px] h-[3px] block bg-[#999]"></span>
                      June 19, 2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="block md:hidden mt-[10px]">
                <p className="text-[13px] mb-[15px]">
                  Hostinger is a web hosting company with the primary objective
                  of helping people succeed online. Hostinger accomplishes this
                  by continuously developing server ...
                </p>
                <div className="items-center gap-[8px] flex">
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src={user}
                      alt="user"
                      className="w-[22px] rounded-full"
                    />
                    <p className="text-[#111] text-[12px] italic">Ramya B</p>
                  </div>
                  <p className="text-[#999] text-[12px] italic flex items-center">
                    <span className="mr-[8px] w-[3px] h-[3px] block bg-[#999]"></span>
                    June 19, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-[336px] lg:mt-0 mt-[50px]">
            <div className="w-full lg:block md:flex gap-[30px]">
              <div>
                <div>
                  <p className="pb-[15px] border-b-[#ddd] border-b-[1px] text-[#111] popins text-[17px] relative after:absolute after:content-[''] after:bg-[#60a600] after:w-[75px] after:h-[2px] after:bottom-[-2px] after:left-0 leading-[22px] mb-[22px]">
                    Search
                  </p>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search"
                      className="border-[#e1e1e1] border-[1px] bg-white p-[2px_45px_2px_12px] md:rounded-[4px_0_0_4px] text-[15px] h-[38px] rounded md:w-auto w-full"
                    />
                    <button className="bg-black h-[38px] p-[0_16px] text-white rounded-[0_4px_4px_0] md:block hidden">
                      <GoSearch />
                    </button>
                  </div>
                </div>
                <div>
                  <p className="pb-[15px] border-b-[#ddd] border-b-[1px] text-[#111] popins text-[17px] relative after:absolute after:content-[''] after:bg-[#60a600] after:w-[75px] after:h-[2px] after:bottom-[-2px] after:left-0 leading-[22px] mt-[35px] mb-[32px]">
                    Latest Posts
                  </p>
                  <div className="flex gap-[15px] items-start pb-[15px] mb-[15px] border-b-[#cecece4d] border-b-[1px]">
                    <Image src={ordermc} alt="ordermc" className="w-[100px]" />
                    <div className="text-[#111]">
                      <p className="popins text-[14px] mb-[15px]">
                        How To Save On Your McDonald’s Order Online?
                      </p>
                      <p className="text-[12px] italic">Food</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:mt-[35px] md:mt-0 mt-[30px]">
                <p className="pb-[15px] border-b-[#ddd] border-b-[1px] text-[#111] popins text-[17px] relative after:absolute after:content-[''] after:bg-[#60a600] after:w-[75px] after:h-[2px] after:bottom-[-2px] after:left-0 leading-[22px] lg:mt-[35px] mb-[32px]">
                  Top Merchants
                </p>
                <div>
                  <p className="text-[#60a600] hover:text-black font-bold cursor-pointer mb-1">
                    Rapido Coupons
                  </p>
                  <p className="text-[#60a600] hover:text-black font-bold cursor-pointer mb-1">
                    MakeMyTrip Coupons
                  </p>
                  <p className="text-[#60a600] hover:text-black font-bold cursor-pointer mb-1">
                    Croma Coupons
                  </p>
                  <p className="text-[#60a600] hover:text-black font-bold cursor-pointer mb-1">
                    Hostinger Coupons
                  </p>
                  <p className="text-[#60a600] hover:text-black font-bold cursor-pointer mb-1">
                    Amazon Coupons
                  </p>
                  <p className="text-[#60a600] hover:text-black font-bold cursor-pointer mb-1">
                    MuscleBlaze Coupons
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Indulge_footer />
    </div>
  );
};

export default Indulge;
