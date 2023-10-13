import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import { HiShare } from "react-icons/hi";
import { MdArrowBackIosNew, MdKeyboardArrowRight } from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
import Subscribe from "../deals/Subscribe";
import Link from "next/link";

const Reddem = ({ offer, offerData }) => {
  const openInNewTab = (url) => {
    window.open(url);
  };
  const displayedCardData = offerData ? offerData.slice(0, 3) : offerData;
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(offer.CouponCode);
    setCopy(true);
  };

  return (
    <div>
      <div className="pb-[18px] pt-[16px] bg_img ">
        <div className="container relative m-auto max-w-[1140px] max-lg:hidden ">
          <Link href="/" className="mb-2 text-[#fff] inline-block font-[400]">
            <span className="w-[30px] h-[30px] shadow-[0_2px_5px_0_#00000038] bg-[#fff] inline-block text-center rounded-[50%] leading-[36px] mr-2 align-middle">
              <MdArrowBackIosNew className="overflow-hidden w-[20px] h-[16px] mb-2 text-black inline-block" />
            </span>
            Go Back
          </Link>
          <a
            href=""
            className="mb-2 text-[#fff] inline-block float-right font-[400]"
          >
            Share
            <span className="ml-2 inline-block w-[30px] h-[30px] shadow-[0_2px_5px_0_#00000038] bg-[#2491ef] rounded-[50%] leading-[36px] align-middle text-center relative">
              <BsShare className="overflow-hidden w-[20px] h-[16px] mb-2  inline-block" />
            </span>
          </a>
        </div>
        <div className="container max-w-[1140px] m-auto relative max-lg:px-3">
          <div className="mt-3 rounded-lg shadow-[0_1px_4px_0_#11132312] border-[0.6px] border-[#f1f1f1] bg-[#fff] max-lg:w-full max-lg:border-0 max-lg:shadow-none">
            <a
              href=""
              className="mb-2 text-[#fff] max-lg:text-[#2491ef] hidden max-lg:flex items-center"
            >
              <span className="w-[28px] h-[28px] shadow-[0_2px_5px_0_#00000038] bg-[#fff] max-lg:bg-[#e5f3fc] inline-block text-center rounded-[50%] leading-[36px] mr-2 align-middle">
                <MdArrowBackIosNew className="overflow-hidden w-[20px] h-[16px] mb-2 text-black max-lg:text-[#2491ef] inline-block" />
              </span>
              Back to Emma Mattress coupons page
            </a>
            <div className="inline-block align-middle w-[60%] max-lg:w-full p-[24px] max-lg:py-[10px] max-lg:px-[5px] max-lg:pb-0">
              <div className="max-md:text-center max-md:mb-[12px] flex-row-reverse text-start mb-[10px] max-sm:items-center">
                <span className="float-right w-[125px] max-sm:w-[215px] h-[50px] leading-[50px] mt-0 rounded bg-[#fff] my-0 mx-auto inline-block max-sm:h-[50px] max-sm:leading-[50px] max-sm:border-[0.6px] max-sm:border-[#d6d8da] max-sm:rounded-md max-sm:mr-0">
                  <Image
                    src={`/uploads/${offer.MerchantId.RetailerLogo}`}
                    alt=""
                    width={100}
                    height={40}
                    className="align-middle max-h-[90%] w-[100px] h-[40px] object-cover max-sm:object-contain max-sm:rounded-md max-sm:h-[50px] max-sm:w-full"
                  />
                </span>
                <div className="text-left border-b border-b-[#d8d8d8] max-lg:border-b-0 max-sm:pr-[10px]">
                  <p className="text-[20px] font-[700] mt-2 mr-0 mb-2 ml-0">
                    <span className="text-[20px] font-[700]">
                      {offer.Title}
                    </span>
                  </p>
                  <p className="text-[16px] mt-0 mb-3 text-[#16171A] font-[300] leading-5 max-sm:text-[14px] max-lg:leading-4 max-lg:mb-0">
                    {offer.Description}
                  </p>
                </div>
              </div>
              <small className="text-[12px] text-[#000] block text-center font-[700] max-lg:hidden">
                Use this coupon code at checkout:
              </small>
              <div className="py-[5px] px-[5px] pl-[15px] bg-[#f5f5f5] rounded-none items-center border-dashed border-1 border-[#8db654] justify-between hidden max-lg:flex">
                <p className="border-0 w-auto h-auto leading-[1] text-start text-[16px] font-[700] flex-[0 0 calc(100% - 120px)] inline-block align-middle rounded-sm text-[#16171a]">
                  {offer.CouponCode}
                </p>
                <button
                  className="w-[100px] h-[35px] rounded inline-flex items-center justify-center text-[12px] font-[500] text-[#fff] align-middle bg-[#2491ef] uppercase border-0"
                  onClick={handleCopy}
                >
                  {copy ? "COPIED" : "COPY CODE"}
                </button>
              </div>
              <div className="justify-between relative mt-2 max-lg:flex hidden">
                <a
                  href=""
                  className="flex w-[calc(100%_-_100px)] h-[42px] bg-[#e9f4fd] rounded items-center justify-center font-[600] text-[14px] leading-[17px] text-[#2491ef]"
                >
                  Go To Emma Mattress Website
                  <RiShareBoxLine className="ml-2 font-[600]" />
                </a>
                <a href="">
                  <span className="ml-0 inline-flex w-auto h-auto shadow-none bg-[#f5f5f5] leading-[1] text-start relative rounded-[50%]">
                    <span className="leading-[1] text-start w-[45px] h-[43px] bg-[#EEEEEE] p-3 rounded-[50%]">
                      <BiSolidLike className="!mr-0 w-[20px] h-[16px]" />
                    </span>
                  </span>
                </a>
                <a href="">
                  <span className="ml-0 inline-flex w-auto h-auto shadow-none bg-[#f5f5f5] leading-[1] text-start relative rounded-[50%]">
                    <span className="leading-[1] text-start w-[45px] h-[43px] bg-[#EEEEEE] p-3 rounded-[50%]">
                      <HiShare className="!mr-0 w-[20px] h-[16px]" />
                    </span>
                  </span>
                </a>
              </div>
              <div className="max-lg:hidden flex">
                <p className="text-[#000] font-[700] h-[63px] leading-[63px] text-[26px] inline-block align-middle w-[100%] rounded-sm border-dashed border-2 border-[#000] bg-[#f0f0f0] text-center my-[26px]">
                  {offer.CouponCode}
                </p>
                <button
                  onClick={handleCopy}
                  className={`h-[63px] my-[26px] text-[23px] leading-[65px] w-[36%] inline-block rounded-sm text-[#fff] align-middle ${
                    copy ? "bg-[#8eb55a]" : "bg-[#2491ef]"
                  } uppercase border-0 ml-1 font-[400]`}
                >
                  {copy ? "COPIED" : "COPY CODE"}
                </button>
              </div>
              <button
                className="text-[14px] max-lg:hidden mt-[10px] text-[#2491ef] m-auto underline block text-center font-[400]"
                onClick={() => openInNewTab(offer.MerchantId.RetailerUrl)}
              >
                <RiShareBoxLine className="inline-block mr-2 align-middle overflow-hidden" />
                Go To {offer.RetailerName} Website
              </button>
              <div className="max-lg:hidden">
                <div className="block border-0 p-0 mt-[18px] text-center">
                  <span className="text-[#2491ef] border border-[#2491ef] bg-[#f0f8ff] inline-block py-2 px-3 rounded-[32px]">
                    Did the coupon work?
                    <span className="border border-[#8db654] hover:bg-[#8db654] hover:text-[#fff] rounded-sm text-[#595959] bg-[#fff] py-[4px] px-3 inline-block my-0 mx-[4px] text-[12px]">
                      Yes
                    </span>
                    <span className="border border-[#d56164] hover:bg-[#d56164] hover:text-[#fff] rounded-sm text-[#595959] bg-[#fff] py-[4px] px-3 inline-block my-0 mx-[4px] text-[12px]">
                      No
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[36%] max-lg:w-full border-t-0 border-l max-lg:border-l-0 border-l-[#d6d8da] max-lg:block inline-block align-middle px-[18px] py-[18px] pt-0 max-lg:px-[5px] max-lg:py-[0.55rem] max-lg:pb-[18px]">
              <div className="max-lg:block hidden">
                <p className="block font-[700] text-[#515151] text-[14px] mb-2">
                  Coupon/Offer Description
                </p>
                <div className="p-0 block mt-0 max-h-[34px] overflow-hidden relative text-[#515151]">
                  {offer.Conditions}
                </div>
              </div>
              <div className="max-h-[98px] overflow-y-auto px-1 py-3 text-[#515151] max-lg:hidden">
                <ul className="text-[#373737] leading-[22px] pl-[16px] mx-auto my-[24px] mt-0 list-decimal text-[14px]">
                  {offer.Conditions}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[12px] px-0 pb-6">
        <div className="container max-w-[1140px] m-auto max-lg:max-w-[720px] max-xl:max-w-[960px]">
          <h1 className="font-[700] text-[#515151] text-[16px] mt-3 mb-4 relative">
            <span className="after:content-[''] after:bg-[#8db654] after:w-[80px] after:block after:h-[4px] after:mt-[6px]">
              GrabOn Related Coupons
            </span>
          </h1>
          <ul className="whitespace-nowrap flex gap-3 w-full overflow-x-auto py-3 px-0">
            {displayedCardData.map((item, key) => (
              <li
                key={key}
                className="w-[32.2%] max-lg:w-[220px] rounded align-top bg-[#fff] text-[#515151] whitespace-normal border-[0.6px] border-[#d6d8da] p-3 mb-3 inline-block hover:bg-[#f4ffe6] hover:shadow-[0_5px_15px_#0000004d] transition duration-300 ease"
              >
                <Image
                  src={`/uploads/${item.MerchantId.RetailerLogo}`}
                  alt=""
                  width={100}
                  height={40}
                  className="object-cover w-[100px] h-[40px]"
                />
                <p className="text-[24px] max-lg:text-[15px] leading-[normal] font-[600] my-[6px] mx-0">
                  <span> {item.Title}</span>
                </p>
                <p className="text-[14px] max-lg:text-[12px] min-h-[55px] leading-[18px] font-[300] my-[14px]">
                  {item.Description}
                </p>
                <a
                  href=""
                  className="text-[14px] max-lg:text-[12px] text-[#2491ef] font-[400]"
                >
                  View All {item.RetailerName} Offers
                  <span className="w-[20px] max-lg:w-[17px] h-[20px] max-lg:h-[17px] bg-[#2491ef] inline-block rounded-[50%] relative top-[5px] ml-[5px] ">
                    <MdKeyboardArrowRight className="text-[#fff] w-[20px] h-[20px] max-lg:w-[18px] max-lg:h-[17px]" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default Reddem;

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;
    if (!id) {
      throw new Error("ID not provided in the query.");
    }
    const response = await axios.get(
      `http://localhost:3000/api/publiccoupon/${id}`
    );

    const getData = await axios.get("http://localhost:3000/api/getCoupons");
    const offer = response.data.data;
    const offerData = getData.data.data;
    return {
      props: {
        offer,
        offerData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return {
    props: {
      offer: [],
      offerData: [],
    },
  };
}
