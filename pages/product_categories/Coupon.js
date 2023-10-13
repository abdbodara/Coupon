import { useAddCommentMutation, useFavoriteCouponMutation } from "@/app/api";
import IconMessage from "@/components/Icons/IconMessage";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  AiFillCheckCircle,
  AiFillRightCircle,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { HiOutlineThumbUp } from "react-icons/hi";
import { LuShare2 } from "react-icons/lu";

const Coupon = ({ selectedItems, data, showMore, setShowMore }) => {
  const [favoriteCoupon] = useFavoriteCouponMutation();
  const [addComment] = useAddCommentMutation();
  const openInNewTab = (url) => {
    window.open(url);
  };
  const router = useRouter();
  const [filteredCoupons, setFilteredCoupons] = useState([]);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState({
    comment: "",
    couponId: "",
  });

  useEffect(() => {
    const filtered = data?.coupon?.filter((couponItem) => {
      const retailerName = couponItem.MerchantId.RetailerName;
      const category = couponItem.Category;
      const isRetailerSelected = selectedItems.includes(retailerName);
      const isCategorySelected = selectedItems.includes(category);
      return (
        selectedItems.length === 0 || isRetailerSelected || isCategorySelected
      );
    });

    setFilteredCoupons(filtered || []);
  }, [selectedItems, data]);

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

  const commentHandler = async (couponItem) => {
    const couponid = couponItem._id;
    const data = { comment: inputValue.comment, couponId: couponid };
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
      {filteredCoupons.map((couponItem, couponIndex) => {
        return (
          <div key={couponIndex}>
            <div key={couponIndex}>
              <div className="border mb-[12px] border-[#dadada] bg-[#fff]">
                <div className="min-h-[90px] lg:min-h-[200px] lg:pt-[12px] pl-[8px] lg:px-[18px]">
                  <div className="flex items-center">
                    <Image
                      src={`/uploads/${couponItem.MerchantId.RetailerLogo}`}
                      width={100}
                      height={100}
                      alt=""
                      className="h-[38px] w-[90px] object-cover mr-5"
                    />
                    <div className="lg:mt-2 mb-1.5">
                      <span className="text-[8px] lg:text-[24px] mt-[6px] font-bold text-[#515151]">
                        {couponItem.Title}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between w-[calc(100%_-_110px)] lg:w-full">
                    <div>
                      <div className="flex-1 mb-2">
                        <p className="text-[16px] text-[#373737]">
                          {couponItem.Description}
                        </p>
                      </div>
                      <Link
                        href={couponItem.MerchantId.RetailerUrl}
                        className="text-[#368cce] underline text-[12px]"
                      >
                        View All {couponItem.MerchantId.RetailerName} Offers
                      </Link>
                    </div>
                    <div className="gcbr-r">
                      <button className="w-[25px] text-[25px] h-[25px] block lg:hidden">
                        <AiFillRightCircle className="text-[#2491ef]" />
                      </button>
                      <p className="hidden items-center justify-center gap-2 mb-[14px] lg:flex">
                        <span className="text-[#8eb55a] gap-[3px] flex items-center text-[13px] font-medium">
                          <AiFillCheckCircle /> Verified
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
                        {showMore?.status && showMore?.id === couponItem?._id
                          ? "Hide Details"
                          : "Show Details"}
                      </button>
                    </li>
                    <li>
                      <BsDot className="text-[#787878] " />
                    </li>
                    <li className="c-show-det">
                      <button onClick={() => setOpen(!open)}>
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
                    className="absolute top-[5px] text-[#d6d8da] right-[10px]"
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
                  <ul className="list-inside">{couponItem.Conditions}</ul>
                  <input
                    type="text"
                    name="comment"
                    value={inputValue.comment}
                    onChange={inputHandler}
                    required
                    placeholder="Enter your email address"
                    className="text-[#828c99] border-[1px] border-black p-[12px] h-[40px] text-[12px] rounded-[3px] lg:w-[65%] w-full"
                  />
                  <button onClick={() => commentHandler(couponItem)}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Coupon;
