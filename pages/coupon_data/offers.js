import IconMessage from "@/components/Icons/IconMessage";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillCheckCircle, AiFillRightCircle } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { HiOutlineThumbUp } from "react-icons/hi";
import { LuShare2 } from "react-icons/lu";
import { useAddCommentMutation, useFavoriteOfferMutation } from "@/app/api";

const Offers = ({ data, setShowMore, showMore }) => {
  const [favoriteOffer] = useFavoriteOfferMutation();
  const [addComment] = useAddCommentMutation();
  const openInNewTab = (url) => {
    window.open(url);
  };

  const router = useRouter();
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState({
    comment: "",
    offerId: "",
  });

  const clickHandler = async (offerItem) => {
    setClick(true);
    favoriteOffer(offerItem._id)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const commentHandler = async (offerItem) => {
    const offerid = offerItem._id;
    const data = { comment: inputValue.comment, offerId: offerid };
    await addComment(data)
      .then((res) => {
        setInputValue({
          comment: "",
        });
        return res;
      })
      .catch((error) => {
        return error;
      });
  };

  return (
    <div>
      {data?.map((item, index) => {
        return (
          <div key={index}>
            {item.offer &&
              item.offer.map((offerItem, offerIndex) => (
                <div key={offerIndex}>
                  <div className="border mb-[12px] border-[#dadada] bg-[#fff]">
                    <div className="min-h-[90px] lg:min-h-[200px] lg:pt-[12px] pl-[8px] lg:px-[18px]">
                      <div className="lg:mt-[8px] mb-[6px]">
                        <span className="text-[8px] lg:text-[24px] mt-[6px] font-bold text-[#515151]">
                          {offerItem.title}
                        </span>
                      </div>
                      <div className="flex w-[calc(100%_-_110px)] lg:w-full">
                        <div className="flex-1">
                          <p className="text-[16px] text-[#373737]">
                            {offerItem.desc}
                          </p>
                        </div>
                        <div className="gcbr-r">
                          <button className="w-[25px] text-[25px] h-[25px] block lg:hidden">
                            <AiFillRightCircle className="text-[#2491ef]" />
                          </button>
                          <p className="hidden items-center gap-2 mb-[14px] lg:flex">
                            <span className="text-[#8eb55a] gap-[3px] flex items-center text-[13px] font-medium">
                              <AiFillCheckCircle /> Verified
                            </span>
                            <BsDot className="text-[#787878] " />
                            <span className="text-[#787878] gap-[3px] flex items-center text-[12px]">
                              <FaUsers />
                              <span className="bold-me">4</span>
                              uses today
                            </span>
                          </p>
                          <span className="w-[245px] hidden bg-[#e5e5e5] lg:block h-[40px] relative z-[1] border-[1.5px] border-dashed border-[#979797]">
                            <span className="hidden-lg"></span>
                            <span className="text-[14px] font-bold block pr-[18px] leading-[40px] text-right">
                              {offerItem.offer}
                            </span>
                            <div
                              className="bg-[#2491ef] cursor-pointer text-white absolute text-[13px] font-bold leading-[43px] pl-[24px] top-[-2px] left-[-2px] w-[211px] rounded-[4px_2px_2px_4px] shadow-[0_2px_4px_0_rgba(157,157,157,.5)]"
                              onClick={() => {
                                openInNewTab(`/coupon_code/${offerItem._id}`);
                                router.push(`/redeem/${offerItem._id}`);
                              }}
                            >
                              GET DEAL
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul className="border-t border-[#d6d8da] flex items-center bg-white text-[13px] min-h-[28px] py-[7px] pl-[16px] pr-[8px]">
                      <div className="flex-1 block lg:hidden ">
                        <li className="ml-[30px] text-[14px] text-[#797979]">
                          <span className="font-[600]">5</span>
                          uses today
                        </li>
                      </div>
                      <div className="hidden lg:flex items-center flex-1 gap-[10px]">
                        <li className="lg:hidden verified-m">
                          <span>Verified</span>
                        </li>
                        <li className="lg:block hidden verified-m">
                          <button
                            onClick={() =>
                              setShowMore({
                                id: offerItem?._id,
                                status: !showMore?.status,
                              })
                            }
                            className="text-[#509cde] font-bold text-[14px]"
                          >
                            {showMore?.status && showMore?.id === offerItem?._id
                              ? "Hide Details"
                              : "Show Details"}
                          </button>
                        </li>
                        <li>
                          <BsDot className="text-[#787878] " />
                        </li>
                        <li className="lg:hidden usr">
                          <span>
                            <span className="bold-me">5</span>
                            uses today
                          </span>
                        </li>
                        <li className="c-show-det">
                          <button onClick={() => setOpen(!open)}>
                            <span className="text-[#797979] flex gap-[4px] items-center text-[14px]">
                              <IconMessage /> Comments
                            </span>
                          </button>
                        </li>
                      </div>
                      <div className="block lg:hidden">
                        <span>Verified</span>
                      </div>
                      <div className="hidden  items-center lg:flex">
                        <li
                          className={`text-[14px] ${
                            click ? "text-blue-500 animation-jump" : ""
                          } cursor-pointer p-[2px_5px] text-[#797979]`}
                        >
                          <HiOutlineThumbUp
                            onClick={() => clickHandler(offerItem)}
                          />
                        </li>
                        <li className="text-[14px] p-[2px_5px] text-[#797979]">
                          <LuShare2 />
                        </li>
                      </div>
                    </ul>
                    <div
                      className={`${
                        showMore?.status && showMore?.id === offerItem?._id
                          ? "block"
                          : "hidden"
                      } bg-[#f4f4f4] relative p-[12px_24px_24px]`}
                    >
                      <button
                        onClick={() => setShowMore(false)}
                        className="absolute top-[5px] text-[#d6d8da] right-[10px]"
                      >
                        <GrClose className="text-[#d6d8da]" />
                      </button>
                      <ul className="list-inside">{offerItem.conditions}</ul>
                    </div>
                    <div
                      className={`${
                        open === true ? "block" : "hidden"
                      } bg-[#f4f4f4] relative p-[12px_24px_24px]`}
                    >
                      <button
                        onClick={() => setOpen(false)}
                        className="absolute top-[5px] text-[#d6d8da] right-[10px]"
                      >
                        <GrClose className="text-[#d6d8da]" />
                      </button>
                      <ul className="list-inside">{offerItem.conditions}</ul>
                      <input
                        type="text"
                        name="comment"
                        value={inputValue.comment}
                        onChange={inputHandler}
                        placeholder="Enter your email address"
                        className="text-[#828c99] border-[1px] border-black p-[12px] h-[40px] text-[12px] rounded-[3px] lg:w-[65%] w-full"
                        required
                      />
                      <button onClick={() => commentHandler(offerItem)}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
};

export default Offers;
