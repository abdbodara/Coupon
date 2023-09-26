import React, { useState } from "react";
import Image from "next/image";
import submit from "../public/Assets/Images/submit_logo.jpg";
import { BiSolidCheckCircle } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import gold from "../public/Assets/Images/gold.png";
import silver from "../public/Assets/Images/silver.png";
import Link from "next/link";

const Submitcoupon = () => {
  const [tab, setTab] = useState("coupon");

  return (
    <div>
      <div>
        <div className="bg-[linear-gradient(178deg,#1c4a81_-8%,#0c244a_93%)] lg:h-[216px] lg:py-0 py-[12px]">
          <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[12px]">
            <div className="text-white  items-center text-[14px] pt-[24px] mb-2 lg:flex hidden">
              <Link href="/" className="opacity-70 hover:opacity-100">
                Home
              </Link>
              <span className="px-[4px]">/</span>
              <p>Submit a coupon</p>
            </div>
            <div className="flex lg:gap-[24px] gap-[12px]">
              <Image
                src={submit}
                alt="submit"
                className="lg:w-[244px] w-[102px]"
              />
              <div className="text-white">
                <h1 className="lg:text-[28px] text-[18px] font-bold">
                  Submit A Coupon & Help Millions Save!
                </h1>
                <p className="lg:text-[12px] text-[10px] lg:h-auto h-[37px] overflow-hidden lg:leading-normal leading-3">
                  To submit a coupon, simply fill out our form below. We will
                  then send it on to our team who will review and approve it
                  before sending it out to the public. Thanks again for your
                  interest in helping the world save money!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#e7edf1]">
          <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[12px] lg:pt-[26px]">
            <div className="lg:flex gap-[22px] items-start">
              <div className="lg:border-[#d6d8da] lg:bg-white lg:border-[1px] lg:pt-[20px] text-[#16171a] lg:w-[240px]">
                <div className="lg:px-[16px] lg:block flex justify-between lg:py-0 py-[16px] gap-2">
                  <div className="lg:w-auto w-[50%]">
                    <p className="lg:text-[14px] text-[12px]">
                      Total Coupon Submissions:
                    </p>
                    <h1 className="lg:text-[18px] text-[16px] font-semibold lg:mb-[14px]">
                      1315
                    </h1>
                  </div>
                  <div className="lg:w-auto w-[50%]">
                    <p className="lg:text-[14px] text-[12px]">
                      Total Merchant Submissions:
                    </p>
                    <h1 className="lg:text-[18px] text-[16px] font-semibold lg:mb-[14px]">
                      1315
                    </h1>
                  </div>
                </div>
                <div className="bg-[#f5f5f5] p-[6px_18px] lg:flex hidden items-center justify-center gap-[6px]">
                  <BiSolidCheckCircle className="text-[#8db654] text-[14px]" />
                  <p className="text-[14px]">Verified On: 11/08/2023, (Fri)</p>
                </div>
              </div>
              <div className="text-[#16171a] lg:w-[calc(100%-260px)] lg:flex gap-[20px] lg:mt-0 mt-[20px]">
                <div className="lg:w-[65%]">
                  <p className="text-[18px] font-bold mb-[10px]">
                    Submission Form
                  </p>
                  <div>
                    <button
                      className={`${
                        tab === "coupon"
                          ? "shadow-[0_0_5px_#1c1c1c33] text-[#fff] bg-[#3e65a9] p-[20px_5px] w-[50%] rounded-[10px_0_0_0] font-bold xl:coupne-main relative overflow-hidden lg:text-[16px] text-[13px]"
                          : "shadow-[0_0_5px_#1c1c1c33] text-[#696969] bg-[#eaeaea] p-[20px_5px] w-[50%] rounded-[10px_0_0_0] font-bold xl:coupne-main relative overflow-hidden lg:text-[16px] text-[13px]"
                      }`}
                      onClick={() => setTab("coupon")}
                    >
                      Coupon Submission
                    </button>
                    <button
                      className={`${
                        tab === "merchant"
                          ? "shadow-[0_0_5px_#1c1c1c33] text-[#fff] bg-[#3e65a9] p-[20px_5px] w-[50%] rounded-[0_10px_0_0] font-bold xl:coupne-main relative overflow-hidden lg:text-[16px] text-[13px]"
                          : "shadow-[0_0_5px_#1c1c1c33] text-[#696969] bg-[#eaeaea] p-[20px_5px] w-[50%] rounded-[0_10px_0_0] font-bold xl:coupne-main relative overflow-hidden lg:text-[16px] text-[13px]"
                      }`}
                      onClick={() => setTab("merchant")}
                    >
                      Merchant Submission
                    </button>
                    {tab === "coupon" && (
                      <>
                        <div className="md:p-[40px_25px] p-[25px_15px] bg-white rounded-[0_0_10px_10px]">
                          <div>
                            <label className="text-[14px] font-semibold mb-[7px] block">
                              Merchant Name:
                              <span className="text-[red]"> *</span>
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                className="bg-[#f6f6f6] border-[1px] border-[#e2e2e2] p-[5px_10px] pl-[35px] rounded-[5px] outline-none w-full"
                              />
                              <GoSearch className="absolute top-[50%] translate-y-[-50%] text-[#888] text-[20px] left-[8px]" />
                            </div>
                          </div>
                          <div className="mt-[20px] sm:flex items-center gap-[14px]">
                            <div className="w-full">
                              <label className="text-[14px] font-semibold mb-[7px] block">
                                Coupon Code:
                                <span className="text-[red]"> *</span>
                              </label>
                              <input
                                type="text"
                                className="bg-[#f6f6f6] border-[1px] border-[#e2e2e2] p-[5px_10px] rounded-[5px] outline-none w-full"
                              />
                            </div>
                            <div className="w-full sm:mt-0 mt-[20px]">
                              <label className="text-[14px] font-semibold mb-[7px] block">
                                Expiry Date:
                                <span className="text-[red]"> *</span>
                              </label>
                              <input
                                type="date"
                                className="bg-[#f6f6f6] border-[1px] border-[#e2e2e2] p-[5px_10px] rounded-[5px] outline-none w-full"
                              />
                            </div>
                          </div>
                          <div className="mt-[20px]">
                            <label className="text-[14px] font-semibold mb-[7px] block">
                              Terms & Conditions:
                            </label>
                            <textarea
                              cols="30"
                              className="bg-[#f6f6f6] border-[1px] border-[#e2e2e2] p-[5px_10px] rounded-[5px] outline-none w-full h-[75px] resize-none"
                            ></textarea>
                          </div>
                          <div className="mt-[20px]">
                            <label className="text-[14px] font-semibold mb-[7px] block">
                              Title:
                            </label>
                            <input
                              type="text"
                              className="bg-[#f6f6f6] border-[1px] border-[#e2e2e2] p-[5px_10px] rounded-[5px] outline-none w-full"
                            />
                          </div>
                          <div className="mt-[20px]">
                            <label className="text-[14px] font-semibold mb-[7px] block">
                              Description:
                            </label>
                            <textarea
                              cols="30"
                              className="bg-[#f6f6f6] border-[1px] border-[#e2e2e2] p-[5px_10px] rounded-[5px] outline-none w-full h-[75px] resize-none"
                            ></textarea>
                          </div>
                          <div className="text-center">
                            <button className="bg-[#3e65a9] w-[120px] h-[36px] rounded-[5px] text-white mt-[20px]">
                              Submit
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                    {tab === "merchant" && (
                      <>
                        <div className="md:p-[40px_25px] p-[25px_15px] bg-white rounded-[0_0_10px_10px]">
                          <div>
                            <label className="text-[14px] font-semibold mb-[7px] block">
                              Merchant Name:
                              <span className="text-[red]"> *</span>
                            </label>
                            <input
                              type="text"
                              className="bg-[#f6f6f6] border-[1px] border-[#e2e2e2] p-[5px_10px] pl-[35px] rounded-[5px] outline-none w-full"
                            />
                          </div>
                          <div className="mt-[20px]">
                            <label className="text-[14px] font-semibold mb-[7px] block">
                              Merchant URL:
                              <span className="text-[red]"> *</span>
                            </label>
                            <input
                              type="text"
                              className="bg-[#f6f6f6] border-[1px] border-[#e2e2e2] p-[5px_10px] pl-[35px] rounded-[5px] outline-none w-full"
                            />
                          </div>
                          <div className="mt-[20px] flex items-center gap-[14px]">
                            <div className="w-full">
                              <label className="text-[14px] font-semibold mb-[7px] block">
                                Email:
                              </label>
                              <input
                                type="text"
                                className="bg-[#f6f6f6] border-[1px] border-[#e2e2e2] p-[5px_10px] rounded-[5px] outline-none w-full"
                              />
                            </div>
                            <div className="w-full">
                              <label className="text-[14px] font-semibold mb-[7px] block">
                                Mobile:
                              </label>
                              <input
                                type="text"
                                className="bg-[#f6f6f6] border-[1px] border-[#e2e2e2] p-[5px_10px] rounded-[5px] outline-none w-full"
                              />
                            </div>
                          </div>
                          <div className="text-center">
                            <button className="bg-[#3e65a9] w-[120px] h-[36px] rounded-[5px] text-white mt-[20px]">
                              Submit
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                    <div className="lg:mb-[68px] mb-[28px]">
                      <h1 className="my-[16px] text-[16px] font-bold">
                        Submit a coupon code and help the whole community save
                        more!
                      </h1>
                      <h2 className="text-[14px] font-bold">
                        Coupon Submission Guidelines
                      </h2>
                      <ul className="pb-[28px] pt-2 text-[14px] list-disc">
                        <li className="ml-[18px] leading-[15px]">
                          Submit only publicly available coupon codes (avoid
                          private or internal company codes).
                        </li>
                        <li className="ml-[18px] leading-[15px]">
                          Take permission from the merchant first when in doubt.
                        </li>
                        <li className="ml-[18px] leading-[15px]">
                          Wait for a few days to know about your coupon
                          acceptance status.
                        </li>
                      </ul>
                      <h2 className="text-[14px] font-bold">
                        Benefits of coupons submission:
                      </h2>
                      <h2 className="text-[14px] font-bold mt-2">
                        Get Recognized
                      </h2>
                      <p className="text-[14px]">
                        Earn points, badges and climb the leaderboard for every
                        accepted coupon submission.
                      </p>
                      <h2 className="text-[14px] font-bold mt-2">
                        Be a Part Of Something Big
                      </h2>
                      <p className="text-[14px]">
                        Help millions of shoppers save more through your
                        exclusive promo codes.
                      </p>
                      <h2 className="text-[14px] font-bold mt-2">
                        Win Cool Stuff
                      </h2>
                      <p className="text-[14px]">
                        Be amongst the first one to receive community-exclusive
                        prizes!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[35%] lg:pb-0 pb-[40px]">
                  <p className="text-[18px] font-bold mb-[10px]">
                    Leader Board
                  </p>
                  <div className="text-[14px] bg-white rounded-[10px] font-bold">
                    <div className="bg-[#3e65a9] text-white flex items-center justify-between rounded-[10px_10px_0_0] px-[10px]">
                      <p className="p-[20px_10px]">Rank</p>
                      <p className="p-[20px_10px]">Name</p>
                      <p className="p-[20px_10px]">Points</p>
                    </div>
                    <div className="m-[10px] pb-[10px]">
                      <div className="shadow-[0_4px_8px_rgba(0,0,0,.1)] border-[#dbdbdb] border-[1px] rounded-[5px] flex justify-between items-center h-[39px] mb-[10px]">
                        <p className="px-[10px] w-[50px] text-center">1</p>
                        <p className="px-[10px]">armory texas</p>
                        <div className="flex items-center">
                          <p>100</p>
                          <Image src={gold} alt="gold" className="w-[30px]" />
                        </div>
                      </div>
                      <div className="shadow-[0_4px_8px_rgba(0,0,0,.1)] border-[#dbdbdb] border-[1px] rounded-[5px] flex justify-between items-center h-[39px] mb-[10px]">
                        <p className="px-[10px] w-[50px] text-center">2</p>
                        <p className="px-[10px]">Bhuvan S raj</p>
                        <div className="flex items-center">
                          <p>10</p>
                          <Image
                            src={silver}
                            alt="silver"
                            className="w-[30px]"
                          />
                        </div>
                      </div>
                      <div className="shadow-[0_4px_8px_rgba(0,0,0,.1)] border-[#dbdbdb] border-[1px] rounded-[5px] flex justify-between items-center h-[39px] mb-[10px]">
                        <p className="px-[10px] w-[50px] text-center">2</p>
                        <p className="px-[10px]">govinda AF</p>
                        <div className="flex items-center">
                          <p>100</p>
                          <Image
                            src={silver}
                            alt="silver"
                            className="w-[30px]"
                          />
                        </div>
                      </div>
                      <div className="shadow-[0_4px_8px_rgba(0,0,0,.1)] border-[#dbdbdb] border-[1px] rounded-[5px] flex justify-between items-center h-[39px]">
                        <p className="px-[10px] w-[50px] text-center">2</p>
                        <p className="px-[10px]">Rohit Singh</p>
                        <div className="flex items-center">
                          <p>100</p>
                          <Image
                            src={silver}
                            alt="silver"
                            className="w-[30px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submitcoupon;
