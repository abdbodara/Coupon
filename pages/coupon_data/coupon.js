import IconMessage from "@/components/Icons/IconMessage";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  AiFillCheckCircle,
  AiFillRightCircle,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { HiOutlineThumbUp } from "react-icons/hi";
import { LuShare2 } from "react-icons/lu";
import {
  useAddCommentMutation,
  useAddReplyMutation,
  useFavoriteCouponMutation,
} from "@/app/api";
import { ArrowUturnRightIcon } from "@heroicons/react/24/outline";

const Coupons = ({ data, setShowMore, showMore }) => {
  const [addComment] = useAddCommentMutation();
  const [favoriteCoupon] = useFavoriteCouponMutation();
  const [addReply] = useAddReplyMutation();
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState({
    comment: "",
    couponId: "",
  });
  const [replyValue, setReplyValue] = useState({
    reply: "",
    msgId: "",
  });
  const [commentValue, setCommentValue] = useState([]);
  const [reply, setReply] = useState("");
  const [replyData, setReplyData] = useState("");
  const openInNewTab = (url) => {
    window.open(url);
  };

  const router = useRouter();

  const set = commentValue.forEach((item) => {
    console.log("tiem--->", item._id);
    return item._id;
  });
  console.log("🚀 ~ file: coupon.js:48 ~ set ~ set:", set);

  const clickHandler = async (couponItem) => {
    setClick(true);
    favoriteCoupon(couponItem._id)
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

  const inputHandler2 = (e) => {
    const { name, value } = e.target;
    setReplyValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const commentHandler = async (couponItem) => {
    const couponid = couponItem._id;
    const data = { comment: inputValue.comment, couponId: couponid };
    await addComment(data)
      .then((res) => {
        setReplyValue({
          reply: "",
        });
      })
      .catch((error) => {
        return error;
      });
  };

  const replyHandler = async (item) => {
    const msgid = item._id;
    const data = { reply: replyValue.reply, msgId: msgid };

    await addReply(data)
      .then((res) => {
        setReplyValue({
          reply: "",
        });
        return res;
      })
      .catch((error) => {
        return error;
      });
  };

  const clickCouponHandler = async (couponItem) => {
    const couponData = couponItem._id;
    setOpen(!open);
    await axios
      .get(`http://localhost:3000/api/getComment/${couponData}`)
      .then((res) => {
        axios
          .get(`http://localhost:3000/api/getReply/6528c2ff34e40ec855f248f9`)
          .then((res) => {
            setReplyData(res.data.data);
          });
        setCommentValue(res.data.data);
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
            {item.coupon &&
              item.coupon.map((couponItem, couponIndex) => (
                <div key={couponIndex}>
                  <div className="border mb-[12px] border-[#dadada] bg-[#fff]">
                    <div className="min-h-[90px] lg:min-h-[200px] lg:pt-[12px] pl-[8px] lg:px-[18px]">
                      <div className="lg:mt-[8px] mb-[6px]">
                        <span className="text-[8px] lg:text-[24px] mt-[6px] font-bold text-[#515151]">
                          {couponItem.Title}
                        </span>
                      </div>
                      <div className="flex w-[calc(100%_-_110px)] lg:w-full">
                        <div className="flex-1">
                          <p className="text-[16px] text-[#373737]">
                            {couponItem.Description}
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
                              {couponItem.CouponCode}
                            </span>
                            <div
                              className="bg-[#80b942] cursor-pointer text-white absolute text-[13px] font-bold leading-[43px] pl-[24px] top-[-2px] left-[-2px] w-[211px] rounded-[4px_2px_2px_4px] shadow-[0_2px_4px_0_rgba(157,157,157,.5)]"
                              onClick={() => {
                                openInNewTab(`/coupon_codes/${couponItem._id}`);
                                router.push(`/redeems/${couponItem._id}`);
                              }}
                            >
                              SHOW COUPON CODE
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
                                id: couponItem?._id,
                                status: !showMore?.status,
                              })
                            }
                            className="text-[#509cde] font-bold text-[14px]"
                          >
                            {showMore?.status &&
                            showMore?.id === couponItem?._id
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
                          <button
                            onClick={() => clickCouponHandler(couponItem)}
                          >
                            <span className="text-[#797979] flex gap-[4px] items-center text-[14px]">
                              <IconMessage /> Comments
                            </span>
                          </button>
                        </li>

                        <li>
                          <BsDot className="text-[#787878] " />
                        </li>
                        <li className="hidden lg:flex gap-[4px] items-center text-[#797979]  text-[14px]">
                          <AiOutlineClockCircle className="text-[16px]" />
                          Valid till {couponItem.ExpiryDate}
                        </li>
                      </div>
                      <div className="block lg:hidden">
                        <span>Verified</span>
                      </div>
                      <div className="hidden  items-center  lg:flex">
                        <li
                          className={`text-[14px] ${
                            click ? "text-blue-500 animation-jump" : ""
                          } cursor-pointer p-[2px_5px] text-[#797979]`}
                        >
                          <HiOutlineThumbUp
                            onClick={() => clickHandler(couponItem)}
                          />
                        </li>
                        <li className="text-[14px] p-[2px_5px] text-[#797979]">
                          <LuShare2 />
                        </li>
                      </div>
                    </ul>
                    <div
                      className={`${
                        showMore?.status && showMore?.id === couponItem?._id
                          ? "block"
                          : "hidden"
                      } bg-[#f4f4f4] relative p-[12px_24px_24px]`}
                    >
                      <button
                        onClick={() => setShowMore(false)}
                        className="absolute top-1.5 text-[#d6d8da] right-[10px]"
                      >
                        <GrClose className="text-[#d6d8da]" />
                      </button>
                      <ul className="list-inside">{couponItem.Conditions}</ul>
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
                      <ul>
                        {commentValue?.map((item, value) => {
                          return (
                            <li
                              key={value}
                              className={`${
                                value !== 0 && "mt-3 pt-3 border-t-2"
                              } border-[#d6d8da]`}
                            >
                              <p className="list-inside text-sm text-[#373737]">
                                {item.comment}
                              </p>
                              <div>
                                <div className="font-bold inline-block align-middle text-[#7b8b8e] text-[12px] capitalize">
                                  {item.userId.fullName},
                                </div>
                                <div className="ml-1.5 inline-block align-middle text-[#7b8b8e] text-[12px] capitalize">
                                  {item.date} years ago
                                </div>
                                <button
                                  className="capitalize ml-6 text-[12px] text-[#7b8b8e]"
                                  onClick={() => setReply(value)}
                                >
                                  Reply
                                </button>
                              </div>

                              {reply === value ? (
                                <>
                                  <div className="mt-3 pt-3 border-t-2 border-t-[#d6d8da] border-solid">
                                    <textarea
                                      name="reply"
                                      value={replyValue.reply}
                                      placeholder="Comment here..."
                                      onChange={inputHandler2}
                                      required
                                      className="w-[calc(100%_-_220px)] h-[38px] text-sm inline-block max-sm:block max-sm:w-full border shadow-none rounded align-middle box-border px-[8.4px] py-[6px]
                         border-solid border-[#ccc] placeholder:text-sm !outline-none"
                                      id=""
                                    ></textarea>
                                    <div className="max-sm:text-right inline-block max-sm:block max-sm:mt-2">
                                      <button
                                        onClick={() => replyHandler(item)}
                                        className="h-[38px] text-white w-[200px] rounded ml-3 bg-[#7b8b8e] text-[100%] no-underline px-[1em] py-[0.5em] border-[none]"
                                      >
                                        Submit1
                                      </button>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                ""
                              )}

                              {replyData &&
                                replyData?.map((item, key) => {
                                  return (
                                    <div
                                      className="relative mt-3 mb-0 mx-auto pl-6"
                                      key={key}
                                    >
                                      <ArrowUturnRightIcon className="w-3 h-3 absolute left-1 top-1" />
                                      <p className="text-[12px]">
                                        {item.reply}
                                      </p>
                                      <p className="text-[12px]">
                                        <span className="font-bold text-[#8db654]">
                                          GrabOn
                                        </span>
                                        ,
                                        <span className="ml-1.5">
                                          {item.date} years ago
                                        </span>
                                      </p>
                                    </div>
                                  );
                                })}
                            </li>
                          );
                        })}
                      </ul>
                      <div className="mt-3 pt-3 border-t-2 border-t-[#d6d8da] border-solid">
                        <textarea
                          name="comment"
                          value={inputValue.comment}
                          placeholder="Comment here..."
                          onChange={inputHandler}
                          required
                          className="w-[calc(100%_-_220px)] h-[38px] text-sm inline-block max-sm:block max-sm:w-full border shadow-none rounded align-middle box-border px-[8.4px] py-[6px]
                         border-solid border-[#ccc] placeholder:text-sm !outline-none"
                          id=""
                        ></textarea>
                        <div className="max-sm:text-right inline-block max-sm:block max-sm:mt-2">
                          <button
                            onClick={() => commentHandler(couponItem)}
                            className="h-[38px] text-white w-[200px] rounded ml-3 bg-[#7b8b8e] text-[100%] no-underline px-[1em] py-[0.5em] border-[none]"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
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

export default Coupons;
