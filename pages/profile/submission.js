import React, { useState } from "react";
import {
  BiChevronDown,
  BiChevronRight,
  BiSolidCoupon,
  BiSolidTag,
} from "react-icons/bi";
import {
  BsFillPhoneLandscapeFill,
  BsFillTicketPerforatedFill,
} from "react-icons/bs";
import { HiTicket } from "react-icons/hi";
import { FiGrid } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineRight } from "react-icons/ai";
import { RiQuestionFill } from "react-icons/ri";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdCardGiftcard } from "react-icons/md";
import Image from "next/image";
import gif from "../../public/Assets/Images/noResutsFound.gif";
import Store from "./store";
import Categories from "./categories";
import Link from "next/link";

const Submission = ({ recomandedstore, data }) => {
  const cardData = [
    {
      icon: (
        <SiHomeassistantcommunitystore className="text-[#60a600] text-[18px]" />
      ),
      text: "Stores Followed",
      num: "7",
    },
    {
      icon: <BiSolidTag className="text-[#60a600] text-[24px]" />,
      text: "Categories Followed",
      num: "5",
    },
    {
      icon: <BiSolidCoupon className="text-[#60a600] text-[22px]" />,
      text: "Coupons/Offers Saved",
      num: data?.favoriteCoupon?.length + data?.favoriteOffer?.length,
    },
    {
      icon: <MdCardGiftcard className="text-[#60a600] text-[24px]" />,
      text: "Gift Card Orders",
      num: "0",
    },
  ];

  const [click, setClick] = useState("overview");
  const [tab, setTab] = useState("reject");
  const [testtab, setTesttab] = useState(false);
  const [testtab1, setTesttab1] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <div className="lg:py-[12px]">
      <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[12px]">
        <div className="lg:flex gap-[24px] items-start lg:mb-0 mb-[60px]">
          <div className="lg:min-w-[232px] min-w-full lg:my-[46px] rounded border-[1px] border-[#e7e7e7]">
            <div
              onClick={() => {
                setClick("overview"),
                  setTesttab(false),
                  setTesttab1(false),
                  setContact(false);
              }}
              className="flex justify-between cursor-pointer items-center p-[12px] border-b-[1px] border-b-[#e7e7e7] bg-white"
            >
              <div className="flex items-center gap-2">
                <div
                  className={` ${
                    click === "overview" ? "bg-[#e4f8cf]" : "bg-[#efefef]"
                  } w-[30px] h-[30px] rounded-full flex justify-center items-center`}
                >
                  <FiGrid className="text-[#a0a0a0]" />
                </div>
                <p className="text-[#383d4e] text-[14px]">Overview</p>
              </div>
              <button>
                {click === "overview" ? (
                  <BiChevronDown className="text-[#787878] text-[22px]" />
                ) : (
                  <BiChevronRight className="text-[#787878] text-[22px]" />
                )}
              </button>
            </div>
            <div
              onClick={() => {
                setClick("Number"),
                  setTesttab(false),
                  setTesttab1(false),
                  setContact(false);
              }}
              className="flex cursor-pointer justify-between items-center p-[12px] border-b-[1px] border-b-[#e7e7e7] bg-white"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`${
                    click === "Number" ? "bg-[#e4f8cf]" : "bg-[#efefef]"
                  } w-[30px] h-[30px] rounded-full flex justify-center items-center`}
                >
                  <BsFillPhoneLandscapeFill className="text-[#a0a0a0]" />
                </div>
                <p className="text-[#383d4e] text-[14px]">Mobile Number</p>
              </div>
              <button>
                {click === "Number" ? (
                  <BiChevronDown className="text-[#787878] text-[22px]" />
                ) : (
                  <BiChevronRight className="text-[#787878] text-[22px]" />
                )}
              </button>
            </div>
            <div
              onClick={() => {
                setClick("Submission"),
                  setTesttab(false),
                  setTesttab1(false),
                  setContact(false);
              }}
              className="flex cursor-pointer justify-between items-center p-[12px] border-b-[1px] border-b-[#e7e7e7] bg-white"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`${
                    click === "Submission" ? "bg-[#e4f8cf]" : "bg-[#efefef]"
                  } w-[30px] h-[30px] rounded-full flex justify-center items-center`}
                >
                  <HiTicket className="text-[#a0a0a0]" />
                </div>
                <p className="text-[#383d4e] text-[14px]">My Submissions</p>
              </div>
              <button>
                {click === "Submission" ? (
                  <BiChevronDown className="text-[#787878] text-[22px]" />
                ) : (
                  <BiChevronRight className="text-[#787878] text-[22px]" />
                )}
              </button>
            </div>
            <div className="flex cursor-pointer justify-between items-center p-[12px] border-b-[1px] border-b-[#e7e7e7] bg-white">
              <div className="flex items-center gap-2">
                <div
                  className={`${
                    testtab ? "bg-[#e4f8cf]" : "bg-[#efefef]"
                  } w-[30px] h-[30px] rounded-full flex justify-center items-center`}
                >
                  <BsFillTicketPerforatedFill className="text-[#a0a0a0]" />
                </div>
                <p
                  className="text-[#383d4e] text-[14px]"
                  onClick={() => {
                    setClick(null),
                      setTesttab(true),
                      setTesttab1(false),
                      setContact(false);
                  }}
                >
                  Coupons/offers saved
                </p>
              </div>
              <button>
                {testtab ? (
                  <BiChevronDown className="text-[#787878] text-[22px]" />
                ) : (
                  <BiChevronRight className="text-[#787878] text-[22px]" />
                )}
              </button>
            </div>
            {testtab && (
              <div className="bg-[#f5f5f5] p-[6px_12px]">
                <button
                  className={`${
                    click === "Saved"
                      ? "text-[#60a600] font-bold"
                      : "text-[#383d4e]"
                  } text-[14px] py-2`}
                  onClick={() => setClick("Saved")}
                >
                  Coupons saved
                </button>
              </div>
            )}
            <div
              onClick={() => {
                setClick(null),
                  setTesttab1(true),
                  setTesttab(false),
                  setContact(false);
              }}
              className="flex cursor-pointer justify-between items-center p-[12px] border-b-[1px] border-b-[#e7e7e7] bg-white"
            >
              <div className="flex items-center gap-2">
                <div
                  className={` ${
                    testtab1 === true ? "bg-[#e4f8cf]" : "bg-[#efefef]"
                  } w-[30px] h-[30px] rounded-full flex justify-center items-center`}
                >
                  <AiOutlineHeart className="text-[#a0a0a0]" />
                </div>
                <p className="text-[#383d4e] text-[14px]">Following</p>
              </div>
              <button>
                {testtab1 === true ? (
                  <BiChevronDown className="text-[#787878] text-[22px]" />
                ) : (
                  <BiChevronRight className="text-[#787878] text-[22px]" />
                )}
              </button>
            </div>
            {testtab1 && (
              <div className="bg-[#f5f5f5] p-[6px_12px]">
                <button
                  className={`text-[14px] py-2 leading-[14px] ${
                    click === "Store"
                      ? "text-[#60a600] font-bold"
                      : "text-[#383d4e]"
                  }`}
                  onClick={() => setClick("Store")}
                >
                  Store followed
                </button>
                <br />
                <button
                  className={`text-[14px] py-2 leading-[14px] ${
                    click === "Categories"
                      ? "text-[#60a600] font-bold"
                      : "text-[#383d4e]"
                  }`}
                  onClick={() => setClick("Categories")}
                >
                  Category followed
                </button>
              </div>
            )}
            <div
              onClick={() => {
                setContact(true),
                  setTesttab1(false),
                  setTesttab(false),
                  setClick(null);
              }}
              className="flex cursor-pointer justify-between items-center p-[12px] border-b-[1px] border-b-[#e7e7e7] bg-white"
            >
              <div className="flex items-center gap-2">
                <div
                  className={` ${
                    contact === true ? "bg-[#e4f8cf]" : "bg-[#efefef]"
                  } w-[30px] h-[30px] rounded-full flex justify-center items-center`}
                >
                  <RiQuestionFill className="text-[#a0a0a0]" />
                </div>
                <p className="text-[#383d4e] text-[14px]">
                  Help, Support & FAQ’s
                </p>
              </div>
              <button>
                {contact === true ? (
                  <BiChevronDown className="text-[#787878] text-[22px]" />
                ) : (
                  <BiChevronRight className="text-[#787878] text-[22px]" />
                )}
              </button>
            </div>
            {contact && true && (
              <div className="bg-[#f5f5f5] p-[6px_12px]">
                <Link
                  href={"/contact"}
                  className="text-[#0b0c0f] text-[14px] py-2"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
          {click === "overview" ? (
            <>
              <div className="lg:w-[calc(100%-232px)] w-full">
                <p className="text-[#383d4e] text-[14px] mb-[14px] lg:mt-0 mt-[14px] font-bold">
                  Over View
                </p>
                <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-[10px] lg:gap-y-[14px] gap-[14px]">
                  {cardData.map((data, key) => (
                    <div
                      key={key}
                      className="border-[#e7e7e7] border-[1px] bg-white rounded transition-main lg:p-[16px] p-[12px] show-data relative hover:shadow-[0_4px_10px_2px_rgba(63,63,63,.08)] overflow-hidden"
                    >
                      <div className="border-[#e7e7e7] rounded-full border-[1px] lg:w-[69px] lg:h-[69px] w-[59px] h-[59px] lg:mb-[18px] mb-[10px] flex justify-center items-center">
                        {data.icon}
                      </div>
                      <p className="text-[13px] text-[#16171a] font-bold">
                        {data.text}
                      </p>
                      <p className="text-[#60a600] mt-[10px] font-bold">
                        {data.num}
                      </p>
                      <a
                        href="#"
                        className="text-[#60a600] absolute bottom-[12px] right-[12px] transition-main invisible translate-y-[50px] underline opacity-0 text-[14px]"
                      >
                        Show All
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : click === "Number" ? (
            <>
              <div className="lg:w-[calc(100%-232px)] w-full">
                <p className="text-[#383d4e] text-[14px] font-bold lg:mb-[28px] mb-[20px] lg:mt-0 mt-[14px]">
                  Mobile Number
                </p>
                <p className="text-[#bababa] text-[14px] mb-[14px]">
                  Incase you still verify your mobile number, enter your
                  10-digit number below and we will fetch it for you.
                </p>
                <div className="w-full flex items-center">
                  <input
                    type="text"
                    placeholder="Enter your 10-digit Number"
                    className="border-[1px] border-[#ccc] p-[7px_8px] rounded text-[14px] w-[50%] h-[46px]"
                  />
                  <button className="bg-[#8db654] hover:bg-[linear-gradient(transparent,rgba(0,0,0,.05)_40%,rgba(0,0,0,.1))] transition-data text-white text-[14px] rounded min-w-[120px] h-[44px] ml-1">
                    Sent OTP
                  </button>
                </div>
              </div>
            </>
          ) : click === "Submission" ? (
            <>
              <div className="lg:w-[calc(100%-232px)] w-full">
                <p className="text-[#383d4e] text-[14px] font-bold lg:mb-[14px] my-[14px]">
                  Your Coupon/Merchant Submissions
                </p>
                <p className="text-[14px] mb-[14px]">
                  Your mobile Number is not updated, Please click{" "}
                  <a href="#" className="text-[#0000EE]">
                    here{" "}
                  </a>
                  to update.
                </p>
                <div>
                  <div className="flex">
                    <button
                      className={
                        tab === "reject"
                          ? "shadow-[0_0_5px_#1c1c1c33] text-[#fff] bg-[#3e65a9] p-[12px_5px] font-bold xl:coupne-main relative overflow-hidden lg:text-[18px] text-[13px] w-full"
                          : "shadow-[0_0_5px_#1c1c1c33] text-[#696969] bg-[#eaeaea] w-full p-[12px_5px] font-bold xl:coupne-main relative overflow-hidden lg:text-[18px] text-[13px]"
                      }
                      onClick={() => setTab("reject")}
                    >
                      Rejected
                    </button>
                    <button
                      className={
                        tab === "accept"
                          ? "shadow-[0_0_5px_#1c1c1c33] text-[#fff] bg-[#3e65a9] p-[12px_5px] font-bold xl:coupne-main relative overflow-hidden lg:text-[18px] text-[13px] w-full"
                          : "shadow-[0_0_5px_#1c1c1c33] text-[#696969] bg-[#eaeaea] w-full p-[12px_5px] font-bold xl:coupne-main relative overflow-hidden lg:text-[18px] text-[13px]"
                      }
                      onClick={() => setTab("accept")}
                    >
                      Accepted
                    </button>
                    <button
                      className={
                        tab === "pending"
                          ? "shadow-[0_0_5px_#1c1c1c33] text-[#fff] bg-[#3e65a9] p-[12px_5px] font-bold xl:coupne-main relative overflow-hidden lg:text-[18px] text-[13px] w-full"
                          : "shadow-[0_0_5px_#1c1c1c33] text-[#696969] bg-[#eaeaea] w-full p-[12px_5px] font-bold xl:coupne-main relative overflow-hidden lg:text-[18px] text-[13px]"
                      }
                      onClick={() => setTab("pending")}
                    >
                      Pending
                    </button>
                  </div>
                  <div className="border-[#eaeaea] border-[1px] shadow-[0_0_3px_#eaeaea] p-[30px_20px]">
                    <div className="lg:p-[20px] overflow-x-auto">
                      <table className="w-full text-[14px]">
                        <thead className="bg-[#3e65a9] text-white">
                          <tr>
                            <th className="p-[10px_5px]">Type</th>
                            <th className="p-[10px_5px]">Coupon code</th>
                            <th className="p-[10px_5px]">Merchant Name</th>
                            <th className="p-[10px_5px]">URL</th>
                            <th className="p-[10px_5px]">Submitted Date</th>
                            <th className="p-[10px_5px]">Points</th>
                            <th className="p-[10px_5px]">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="shadow-[0_4px_8px_0_rgba(0,0,0,.1)]">
                            <td colspan="7">
                              <Image
                                src={gif}
                                alt="gif"
                                className="mx-auto pt-[20px]"
                              />
                              <p className="text-[#16171a] text-center pb-[10px]">
                                No Results Found
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : click === "Saved" ? (
            <div className="grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-3">
              {data.favoriteCoupon.length || data.favoriteOffer.length !== 0 ? (
                <>
                  {data?.favoriteCoupon.map((item, key) => (
                    <div
                      key={key}
                      className="border-[#e7e7e7] border-[1px] cursor-pointer bg-white rounded-[16px] hover:bg-[#f4ffe6] hover:shadow-[0_5px_15px_rgba(0,0,0,.3)] p-[12px]  transition-main overflow-hidden"
                    >
                      <Image
                        className="max-h-[40px]"
                        width={40}
                        height={40}
                        src="/Assets/Images/rapido-logo.jpg"
                        alt="Rapido"
                      />
                      <p className="block text-[24px] my-[6px] font-medium text-[#515151]">
                        {item.Title}
                      </p>
                      <p className="text-[14px] hover:underline min-h-[55px] text-[#515151] leading-[24px] block my-3">
                        {item.Description}
                      </p>
                      <button className="text-[#2491ef] flex items-center gap-[5px]">
                        See All {item.RetailerName} offers
                        <span className="w-[20px] h-[20px] flex items-center justify-center bg-[#2491ef]  text-white rounded-full">
                          <AiOutlineRight className="" />
                        </span>
                      </button>
                    </div>
                  ))}
                  {data?.favoriteOffer.map((item, key) => (
                    <div
                      key={key}
                      className="border-[#e7e7e7] border-[1px] cursor-pointer bg-white rounded-[16px] hover:bg-[#f4ffe6] hover:shadow-[0_5px_15px_rgba(0,0,0,.3)] p-[12px]  transition-main overflow-hidden"
                    >
                      <Image
                        className="max-h-[40px]"
                        width={40}
                        height={40}
                        src="/Assets/Images/rapido-logo.jpg"
                        alt="Rapido"
                      />
                      <p className="block text-[24px] my-[6px] font-medium text-[#515151]">
                        {item.title}
                      </p>
                      <p className="text-[14px] hover:underline min-h-[55px] text-[#515151] leading-[24px] block my-3">
                        {item.desc}
                      </p>
                      <button className="text-[#2491ef] flex items-center gap-[5px]">
                        See All {item.RetailerName} offers
                        <span className="w-[20px] h-[20px] flex items-center justify-center bg-[#2491ef]  text-white rounded-full">
                          <AiOutlineRight className="" />
                        </span>
                      </button>
                    </div>
                  ))}
                </>
              ) : (
                <p className="text-[#383d4e] text-[14px] font-bold mb-[14px] lg:mt-0 mt-[14px] lg:py-0 py-[12px]">
                  Here Are The Coupons/Offers Saved
                </p>
              )}
            </div>
          ) : click === "Store" ? (
            <>
              <Store recomandedstore={recomandedstore} />
            </>
          ) : click === "Categories" ? (
            <>
              <Categories />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Submission;
