import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillCheckCircle,
  AiFillHeart,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { PiStarThin } from "react-icons/pi";
import { Switch } from "@headlessui/react";
import { GoSearch } from "react-icons/go";
import { BsCheck2, BsChevronRight } from "react-icons/bs";
import { RatingModal } from "@/components/Common/RatingModal";
import ExpiredCoupons from "@/components/Coupon/ExpiredCoupons";
import ProductDetail from "@/components/ProductDetail";
import Subscribe from "./deals/Subscribe";
import Offers from "./coupon_data/offers";
import Coupons from "./coupon_data/coupon";
import { useSelectedCardContext } from "@/context/createContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const tabs = [
  { name: "All", href: "#", current: true },
  { name: "Coupons", href: "#", current: false },
  { name: "Offers", href: "#", current: false },
];
const filterTabs = [
  { name: "All", href: "#", current: true },
  { name: "Electronics", href: "#", current: false },
  { name: "Laptops", href: "#", current: false },
  { name: "Monitors", href: "#", current: false },
];
const Test = ({ data, rating }) => {
  const { profile, Rating, state } = useSelectedCardContext();
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [Open, setIOpen] = useState(false);
  const [openText, setOpenText] = useState(false);
  const [showMore, setShowMore] = useState({ id: "", status: false });
  const [filterTab, setFilterTab] = useState("All");
  const [tab, setTab] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const openInNewTab = (url) => {
    window.open(url);
  };

  const firstImage = data[0] && data[0].coupon && data[0].coupon[0];
  const matchRating = firstImage?.MerchantId?._id;
  const matchingRatings =
    state === true
      ? Rating.filter(
          (item) => item.userId === profile?._id && item.itemId === matchRating
        )
      : rating.filter(
          (item) => item.userId === profile?._id && item.itemId === matchRating
        );
  const matchingRating2 =
    state === true
      ? Rating.filter((item) => item.itemId === matchRating)
      : rating.filter((item) => item.itemId === matchRating);

  const matchRating2 = matchingRatings.map((item, key) => {
    return item.itemId;
  });
  const test = matchRating2?.toString();
  const couponCount = data.reduce((count, item) => {
    if (item.coupon) {
      return count + item.coupon.length;
    }
    return count;
  }, 0);

  const offerCount = data.reduce((count, item) => {
    if (item.offer) {
      return count + item.offer.length;
    }
    return count;
  }, 0);

  const totalLength = couponCount + offerCount;

  return (
    <div>
      <div className="bg-[linear-gradient(178deg,#1c4a81_-8%,#0c244a_93%)] lg:h-[190px] lg:py-0 py-[12px]">
        <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[12px]">
          <div className="text-white  items-center text-[14px] pt-[24px] mb-2 lg:flex hidden">
            <Link href="/" className="opacity-70 hover:opacity-100">
              Home
            </Link>
            <span className="px-[4px]">/</span>
            <Link href="/" className="opacity-70 hover:opacity-100">
              {firstImage?.MerchantId?.RetailerName}
            </Link>
            <span className="px-[4px]">/</span>
            <p>{firstImage?.MerchantId?.RetailerName} Coupons</p>
          </div>
          <div className="flex lg:gap-[24px] gap-[12px]">
            <div className="relative w-[240px] group h-[190px] flex-none max-lg:w-[115px] max-lg:h-[95px]">
              <button
                onClick={() =>
                  openInNewTab(firstImage?.MerchantId?.RetailerUrl)
                }
                className="absolute group-hover:opacity-100 opacity-0 transition duration-100 text-[16px] text-[#373737] flex items-center justify-center font-[700] inset-0 bg-white/[0.9]"
              >
                Visit Store
              </button>
              <Image
                src={`/uploads/${firstImage?.MerchantId?.RetailerLogo}`}
                alt="submit"
                width={240}
                height={190}
                className="lg:w-[240px] w-[102px] max-sm:w-[130px]"
              />
            </div>
            <div className="text-white flex-1">
              <div className="relative items-center lg:flex justify-between flex-wrap">
                <h1 className="lg:text-[28px] flex items-center gap-3 text-[18px] font-bold max-sm:text-[15px]">
                  {firstImage?.MerchantId?.RetailerName}
                  <AiFillHeart
                    className={`${
                      click ? "text-red-500 animation-jump" : "text-gray-500"
                    } cursor-pointer max-lg:hidden `}
                    onClick={() => setClick(true)}
                  />
                </h1>
                <div className="relative hidden max-lg:block mb-[6px] min-h-[38px] max-lg:leading-4 max-lg:mt-[14px]">
                  <p className="block text-[13px] text-[#bac1c2] my-0 mx-0 mb-1">
                    {totalLength} Coupons & Offers
                  </p>
                  <p className="border-l-0 ml-0 pl-0 text-[##bac1c2] my-0 mx-0 mb-1 inline-block text-[10px]">
                    <BsCheck2 className="mr-1 text-[6px] w-[12px] h-[12px] text-[#fff] bg-[#8db654] rounded-[50%] inline-block align-middle text-center leading-3" />
                    {totalLength} Verified
                  </p>
                  <p className="border-l border-l-[#d6d8da] pl-[6px] ml-[6px] text-[#bac1c2] my-0 mx-0 mb-1 inline-block text-[10px]">
                    38 Uses Today
                  </p>
                  <div
                    onClick={() => setIsOpen(true)}
                    className="absolute hidden max-lg:block right-[-79px] top-[-5px] bg-[#294c7d] p-1 rounded text-center max-xl:right-0"
                  >
                    <div className="!inline-block">
                      <AiOutlineStar className="h-[20px] w-[36px] text-[#bac1c2] overflow-hidden text-center" />
                      <small className="block text-[8px] mt-1 text-[#bac1c2]">
                        Rate This
                      </small>
                    </div>
                  </div>
                </div>
                <div className="divide-x gap-[12px]  flex items-center max-lg:hidden">
                  <div className="flex items-center ">
                    <AiFillStar className="text-[36px] fill-[#ffb125] stroke-[#ffb125]" />
                    <p className="text-white leading-4 text-[16px]">
                      4<small className="text-[#bebebe] text-[10px]">/ 5</small>
                      <span className="text-[#bebebe] leading-4 block text-[10px]">
                        <span className="go-r-count">
                          {matchingRating2.length}{" "}
                        </span>
                        Votes
                      </span>
                    </p>
                  </div>
                  {test === matchRating ? (
                    <>
                      <button className="flex items-center pl-[12px]">
                        <AiFillStar className="text-[36px] fill-[#8db654] stroke-[#8db654]" />
                        {matchingRatings.map((item, key) => (
                          <p
                            key={key}
                            className="text-[#bebebe] leading-4 text-[16px]"
                          >
                            Rated <br />
                            {item.value}/5
                          </p>
                        ))}
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="flex items-center pl-[12px]">
                        <PiStarThin
                          onClick={() => setIsOpen(true)}
                          className="text-[36px] fill-[#979797] stroke-[#ffb125]"
                        />
                        <p className="text-[#bebebe] leading-4 text-[16px]">
                          Rate <br />
                          This
                        </p>
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="lg:text-[14px] min-h-[38px] flex  gap-2 text-[10px] text-[#bac1c2]  max-lg:hidden">
                <p>{totalLength} Coupons &amp; Offers</p>
                <span className="px-[4px]">|</span>

                <p className="flex">
                  <AiFillCheckCircle className="text-[#8db654] mt-[3px] mr-2 w-[12px] bg-white rounded-full h-[12px]" />
                  {totalLength} Verified
                </p>
                <span className="px-[4px]">|</span>
                <p>30 Uses Today</p>
              </div>
              <div className="flex items-center justify-between max-sm:ml-[-126px] max-lg:ml-[-128px] max-sm:mt-[10px]">
                <ul
                  className="isolate flex divide-x w-full max-w-[420px] max-lg:max-w-[700px]  border border-[#3e65a9] divide-[#3e65a9] "
                  aria-label="Tabs"
                >
                  {tabs.map((item, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => setTab(item.name)}
                        className={`${
                          tab === item.name ? "bg-[#3e65a9]" : "text-[#272c3f]"
                        } group relative min-w-0 flex-1 text-white cursor-pointer leading-[18px] overflow-hidden p-[8px_12px] text-center text-sm font-medium  focus:z-10`}
                      >
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
                <div className="flex items-center gap-2 max-lg:hidden">
                  <span className="text-[12px]  text-white">EXISTING USER</span>
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={classNames(
                      enabled ? "bg-[#8db654]" : "bg-[#808080]",
                      "relative inline-flex h-[24px] w-[50px] flex-shrink-0 cursor-pointer rounded-full border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 focus:ring-indigo-600 focus:ring-offset-0"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        enabled ? "translate-x-[30px]" : "translate-x-[5px]",
                        "pointer-events-none translate-y-[4px] inline-block h-[15px] w-[15px] transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                      )}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e7edf1]">
        <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[12px] lg:pt-[26px]">
          <div className="flex flex-col-reverse lg:flex-row  gap-[22px] items-start">
            <div className="mt-[60px]  lg:w-[240px]">
              <div className="lg:border-[#d6d8da]  lg:bg-white lg:border-[1px] lg:pt-[20px] text-[#16171a]">
                <div className="lg:px-[16px] lg:block flex justify-between lg:py-0 py-[16px] gap-2">
                  <div className="flex items-center mb-[10px] justify-between">
                    <p className="text-[#515151] text-[14px] font-medium">
                      Filter
                    </p>
                    <button className="text-[#509cde] text-[14px]">
                      Clear All
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="mSearch"
                      className="bg-[#f5f5f6] w-full pl-3 pr-[28px] rounded-[2px] h-[36px]"
                      placeholder="Search in Filters"
                    />
                    <span className="absolute right-[18px] top-[9px]">
                      <GoSearch />
                    </span>
                  </div>
                </div>
                <div className="mt-[24px] border-t border-[#e9e9e9] p-[8px_12px_0]">
                  <div
                    onClick={() => setOpen(!open)}
                    className="p-[14px_0]  cursor-pointer flex items-center justify-between"
                  >
                    <p>Categories</p>
                    <span
                      id="catFilter"
                      className={`${
                        open ? "rotate-[90deg]" : "rotate-[0deg]"
                      } transition-all duration-[0.3s]  cursor-pointer`}
                    >
                      <BsChevronRight className="text-[12px]" />
                    </span>
                  </div>
                  <ul
                    className={`${
                      open ? "max-h-[118px]" : "max-h-[0px]"
                    }  transition-all duration-[0.3s] overflow-auto`}
                    id="catFilters"
                  >
                    <li className="flex py-[3px] mb-[8px] items-center">
                      <input
                        type="checkbox"
                        className="checkbox"
                        data-type="cat"
                        value="Computer Accessories"
                      />
                      <label className="text-[14px] leading-[14px] ml-[6px]">
                        Computer Accessories
                      </label>
                    </li>
                    <li className="flex py-[3px] mb-[8px] items-center">
                      <input
                        type="checkbox"
                        className="checkbox"
                        data-type="cat"
                        value="Computers"
                      />
                      <label className="text-[14px] leading-[14px] ml-[6px]">
                        Computers
                      </label>
                    </li>
                    <li className="flex py-[3px] mb-[8px] items-center">
                      <input
                        type="checkbox"
                        className="checkbox"
                        data-type="cat"
                        value="Electronices"
                      />
                      <label className="text-[14px] leading-[14px] ml-[6px]">
                        Electronices
                      </label>
                    </li>
                    <li className="flex py-[3px] mb-[8px] items-center">
                      <input
                        type="checkbox"
                        className="checkbox"
                        data-type="cat"
                        value="Headphones"
                      />
                      <label className="text-[14px] leading-[14px] ml-[6px]">
                        Headphones
                      </label>
                    </li>
                    <li className="flex py-[3px] mb-[8px] items-center">
                      <input
                        type="checkbox"
                        className="checkbox"
                        data-type="cat"
                        value="Computer Accessories"
                      />
                      <label className="text-[14px] leading-[14px] ml-[6px]">
                        Computer Accessories
                      </label>
                    </li>
                  </ul>
                </div>
                <div className=" border-t border-[#e9e9e9] p-[8px_12px_0]">
                  <div
                    onClick={() => setIOpen(!Open)}
                    className="p-[14px_0]  cursor-pointer flex items-center justify-between"
                  >
                    <p>Banks/Wallets</p>
                    <span
                      id="catFilter"
                      className={`${
                        Open ? "rotate-[90deg]" : "rotate-[0deg]"
                      } transition-all duration-[0.3s]  cursor-pointer`}
                    >
                      <BsChevronRight className="text-[12px]" />
                    </span>
                  </div>
                  <ul
                    className={`${
                      Open ? "max-h-[118px]" : "max-h-[0px]"
                    }  transition-all duration-[0.3s] overflow-auto`}
                    id="catFilters"
                  >
                    <li className="flex py-[3px] mb-[8px] items-center">
                      <input
                        type="checkbox"
                        className="checkbox"
                        data-type="cat"
                        value="Computer Accessories"
                      />
                      <label className="text-[14px] leading-[14px] ml-[6px]">
                        BHIM UPI
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <article className="mt-[10px] pb-[8px] pt-[14px] ">
                <h2 className="text-[#515151] mb-2 font-medium text-[18px]">
                  More About Dell
                </h2>
                <div
                  id="gmfDesp"
                  className={`${
                    openText ? " max-h-[1000px] h-auto" : "max-h-[204px]"
                  } pb-[36px]  text-[#515151] relative text-[14px]  mb-[12px] overflow-hidden leading-[18px]`}
                >
                  <p>
                    Dell is the world{"'"}s leading provider of reliable and
                    affordable IT products and services. You can buy a Dell
                    laptop, desktop, or monitor with confidence that they are
                    built to last and packed with innovation. With a vast
                    assortment of products available in markets, you have access
                    to all the latest technologies with smart features that work
                    round-the-clock. To make your life more exciting, Dell is
                    offering special discounts, coupons and offers at reasonable
                    prices. Why not end the long wait? Get all the latest and
                    trending offers on Dell products here on GrabOn today. Time
                    to Save BIG!
                  </p>
                  <button
                    onClick={() => setOpenText(!openText)}
                    className={`${
                      openText
                        ? "shadow-none"
                        : "shadow-[-1px_-8px_9px_2px_rgba(245,246,248,.81)]"
                    } text-[#2491ef] absolute bottom-0 w-full p-[4px] text-left bg-[#ecf1f6] `}
                  >
                    {!openText ? "Show More" : "Show Less"}
                  </button>
                </div>
              </article>
              <div>
                <div className="bg-white rounded-[5px] mt-[24px]">
                  <p className="text-[#16171a] p-[12px] block leading-[24px] border-b border-[#d6d8da]">
                    Coupons You May Like
                  </p>
                  <div className="p-[12px] group">
                    <span>
                      <Image
                        className="w-[100px] h-[40px] object-cover"
                        src="/Assets/Images/hp-shopping-logo.jpg"
                        alt="HP Shopping Offers"
                        width={100}
                        height={40}
                      />
                    </span>
                    <Link
                      href="#"
                      className="text-[#16171a] group-hover:underline block m-[6px_auto_12px] text-[14px] leading-[20px]"
                    >
                      Computer &amp; Laptop Accessories - Up To 70% OFF + Extra
                      3% OFF
                    </Link>
                    <Link
                      href="https://www.grabon.in/hpshopping-coupons/"
                      title="See All HP Shopping Offers"
                      className="text-[#509cde] text-[14px] leading-[20px]"
                    >
                      See All HP Shopping Offers
                    </Link>
                  </div>
                  <div className="border-t border-[#d6d8da] p-[12px] group">
                    <span>
                      <Image
                        width={100}
                        height={40}
                        className="lazy entered loaded"
                        src="/Assets/Images/laptop-store-india-logo.jpg"
                        alt="Laptop Store India Offers"
                      />
                    </span>
                    <Link
                      href={"#"}
                      className="text-[#16171a] group-hover:underline block m-[6px_auto_12px] text-[14px] leading-[20px]"
                    >
                      Avail Up To 45% OFF On Laptop Accessories
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-[22px] border-t border-[#d6d8da]  mb-[18px]">
                <h3 className="text-[#515151] text-[18px] font-[500] mt-[18px] mb-[12px]">
                  Coupons from Similar Stores
                </h3>
                <Link
                  className="text-[#2491ef] text-[14px] p-[6px_0] block"
                  href="#"
                  title="Laptop Store India"
                >
                  Laptop Store India Coupons
                </Link>
                <Link
                  className="text-[#2491ef] text-[14px] p-[6px_0] block"
                  href="#"
                  title="Razer"
                >
                  Razer Coupons
                </Link>
                <Link
                  className="text-[#2491ef] text-[14px] p-[6px_0] block"
                  href="#"
                  title="OnlySSD"
                >
                  OnlySSD Coupons
                </Link>
                <Link
                  className="text-[#2491ef] text-[14px] p-[6px_0] block"
                  href="#"
                  title="Acer"
                >
                  Acer Coupons
                </Link>
              </div>
              <div className="mt-[22px] border-t border-[#d6d8da]  mb-[18px]">
                <h3 className="text-[#515151] text-[18px] font-[500] mt-[18px] mb-[12px]">
                  Popular Stores
                </h3>
                <Link
                  className="text-[#2491ef] text-[14px] p-[6px_0] block"
                  href="#"
                  title="Laptop Store India"
                >
                  Laptop Store India Coupons
                </Link>
                <Link
                  className="text-[#2491ef] text-[14px] p-[6px_0] block"
                  href="#"
                  title="Razer"
                >
                  Razer Coupons
                </Link>
                <Link
                  className="text-[#2491ef] text-[14px] p-[6px_0] block"
                  href="#"
                  title="OnlySSD"
                >
                  OnlySSD Coupons
                </Link>
                <Link
                  className="text-[#2491ef] text-[14px] p-[6px_0] block"
                  href="#"
                  title="Acer"
                >
                  Acer Coupons
                </Link>
              </div>
            </div>
            <div className="text-[#16171a] lg:w-[calc(100%-260px)] lg:mt-0 mt-[20px]">
              <div className="flex items-center mb-[12px]">
                <strong className="font-bold">Sort By Tags</strong>
                <ul
                  className="overflow-x-auto gap-[8px] flex items-center whitespace-nowrap ml-[8px]"
                  id="tagFilter"
                >
                  {filterTabs.map((item, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => setFilterTab(item.name)}
                        className={`${
                          filterTab === item.name
                            ? "bg-[#3e65a9] p-[9px_16px] border-[#3e65a9] text-white "
                            : "text-[#272c3f] cursor-pointer border-[#a0a0a0] p-[6px_8px] pr-[14px]"
                        } transition  duration-[0.3s]  text-[12px]  border rounded-full`}
                      >
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                {tab === "All" ? (
                  <>
                    <Coupons
                      data={data}
                      setShowMore={setShowMore}
                      showMore={showMore}
                    />
                    <>
                      <Offers
                        data={data}
                        setShowMore={setShowMore}
                        showMore={showMore}
                      />
                    </>
                  </>
                ) : tab === "Coupons" ? (
                  <>
                    <Coupons
                      data={data}
                      setShowMore={setShowMore}
                      showMore={showMore}
                    />
                  </>
                ) : tab === "Offers" ? (
                  <>
                    <Offers
                      data={data}
                      setShowMore={setShowMore}
                      showMore={showMore}
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
              <div>
                <ExpiredCoupons />
                <ProductDetail />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RatingModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        data={firstImage}
        rating={matchingRating2}
      />
      <Subscribe />
    </div>
  );
};

export default Test;

export async function getServerSideProps(context) {
  try {
    const { merchantId } = context.query;
    if (!merchantId) {
      throw new Error("Merchant ID not provided in the query.");
    }
    const response = await axios.get(
      `http://localhost:3000/api/getPublicCoupon/${merchantId}`
    );
    const responseData = await axios.get("http://localhost:3000/api/getRating");
    const rating = responseData.data.data;
    const data = response.data.data;
    return {
      props: {
        data,
        rating,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: [],
        rating: [],
      },
    };
  }
}
