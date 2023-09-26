import React, { useState } from "react";
import Link from "next/link";
import { BiSolidCheckCircle } from "react-icons/bi";
import Image from "next/image";
import flight from "../../public/Assets/Images/flight-logo.jpg";
import Subscribe from "../../pages/deals/Subscribe";
import { useRouter } from "next/router";
import fashion from "../../public/Assets/Images/fashion-logo.jpg";
import electronics from "../../public/Assets/Images/electronics-logo.jpg";
import beauty from "../../public/Assets/Images/beauty-logo.jpg";

const Categories = [
  {
    img: flight,
    coupone: "494 Coupons",
    offer: "629 Offers",
    text: "Flight",
  },
  {
    img: fashion,
    coupone: "877 Coupons",
    offer: "3,718 Offers",
    text: "Fashion",
  },
  {
    img: electronics,
    coupone: "206 Coupons",
    offer: "1,199 Offers",
    text: "Electronics",
  },
  {
    img: beauty,
    coupone: "1,060 Coupons",
    offer: "3173 Offers",
    text: "Beauty",
  },
];
const Offer = [
  { text: "MakeMyTrip", coupon: " 54 Coupons", offer: "8 Offers" },
  { text: "Amazon", coupon: " 3 Coupons", offer: "73 Offers" },
  { text: "MuscleBlaze", coupon: " 27 Coupons", offer: "61 Offers" },
  { text: "Rapido", coupon: " 23 Coupons", offer: "10 Offers" },
  { text: "Dell", coupon: " 37 Coupons", offer: "16 Offers" },
  { text: "Paytm", coupon: " 74 Coupons", offer: "1 Offers" },
  { text: "Bookmyshow", coupon: " 7 Coupons", offer: "47 Offers" },
  { text: "Croma", coupon: " 38 Coupons", offer: "37 Offers" },
  { text: "Swiggy", coupon: " 47 Coupons", offer: "18 Offers" },
  { text: "Dominos", coupon: " 10 Coupons", offer: "12 Offers" },
  { text: "Adidas", coupon: " 0 Coupons", offer: "15 Offers" },
  { text: "UBER", coupon: " 26 Coupons", offer: "15 Offers" },
  { text: "HappyEasyGo", coupon: " 18 Coupons", offer: "1 Offers" },
  { text: "Pepperfry", coupon: " 10 Coupons", offer: "31 Offers" },
  { text: "GoDaddy", coupon: " 47 Coupons", offer: "19 Offers" },
  { text: "Myntra", coupon: " 45 Coupons", offer: "42 Offers" },
  { text: "Tata CLiQ", coupon: " 20 Coupons", offer: "22 Offers" },
  { text: "AJIO", coupon: " 35 Coupons", offer: "33 Offers" },
  { text: "ZoomCar", coupon: " 24 Coupons", offer: "6 Offers" },
  { text: "OYO Rooms", coupon: " 33 Coupons", offer: "6 Offers" },
  { text: "Nykaa", coupon: " 5 Coupons", offer: "82 Offers" },
  { text: "Zomato", coupon: " 67 Coupons", offer: "6 Offers" },
  { text: "McDonalds", coupon: " 10 Coupons", offer: "18 Offers" },
  { text: "Decathlon", coupon: " 3 Coupons", offer: "35 Offers" },
  { text: "Goibibo", coupon: " 51 Coupons", offer: "7 Offers" },
  { text: "Udemy", coupon: " 6 Coupons", offer: "45 Offers" },
  { text: "Zivame", coupon: " 17 Coupons", offer: "30 Offers" },
  { text: "1mg", coupon: " 51 Coupons", offer: "7 Offers" },
  { text: "Beardo", coupon: " 6 Coupons", offer: "45 Offers" },
  { text: "Cleartrip", coupon: " 17 Coupons", offer: "30 Offers" },
  { text: "Booking", coupon: " 0 Coupons", offer: "49 Offers" },
  { text: "BigBasket", coupon: " 16 Coupons", offer: "41 Offers" },
  { text: "PharmEasy", coupon: " 23 Coupons", offer: "18 Offers" },
  { text: "Ola Cabs", coupon: " 26 Coupons", offer: "21 Offers" },
  { text: "FirstCry", coupon: " 76 Coupons", offer: "12 Offers" },
  { text: "Klook", coupon: " 9 Coupons", offer: "36 Offers" },
  { text: "Behrouz Biryani", coupon: " 15 Coupons", offer: "23 Offers" },
  { text: "Faasos", coupon: " 7 Coupons", offer: "11 Offers" },
  { text: "Abhibus", coupon: " 28 Coupons", offer: "10 Offers" },
  { text: "Etihad Airways", coupon: " 8 Coupons", offer: "31 Offers" },
  { text: "Malaysia Airlines", coupon: " 1 Coupons", offer: "6 Offers" },
  { text: "Revv", coupon: " 5 Coupons", offer: "5 Offers" },
];

const SeeOffers = (props) => {
  const router = useRouter();
  const [click, setClick] = useState("store");
  const [open, setOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("");
  const filteredOffers = props?.value?.filter((data) =>
    selectedLetter ? data?.text?.startsWith(selectedLetter) : true
  );

  return (
    <div>
      <div className="bg-[linear-gradient(178deg,#1c4a81_-8%,#0c244a_93%)] lg:h-[216px] h-[118px] lg:py-0 py-[12px]">
        <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[12px]">
          <div className="text-white  items-center text-[14px] pt-[24px] mb-2 lg:flex hidden">
            <Link href="/" className="opacity-70 hover:opacity-100">
              Home
            </Link>
            <span className="px-[4px]">/</span>
            <p>Categories</p>
          </div>
          <div className="flex lg:gap-[24px] gap-[12px]">
            <div className="lg:min-w-[240px] min-w-[100px] lg:h-[180px] h-[80px] bg-[#8db654] rounded flex justify-center items-center text-white lg:text-[28px] text-[14px] z-[1]">
              <h1 className="text-center lg:leading-[34px] leading-[14px]">
                ALL <br /> {props.title}
              </h1>
            </div>
            <div className="text-white">
              <h1 className="lg:text-[28px] text-[18px] font-bold">
                {props.header}
              </h1>
              <div className="lg:text-[12px] text-[10px] lg:h-auto h-[37px] overflow-hidden lg:leading-normal leading-3">
                {props.text}
                <br /> {open === true && props.texthide}
                {open === false && (
                  <div className="text-end">
                    <button
                      className="bg-[linear-gradient(90deg,rgba(12,36,74,.5)_0,#0d264c_25%,#0d264c_100%)] p-[2px] pl-[12px]"
                      onClick={() => {
                        setOpen(!open);
                      }}
                    >
                      {props.Showmore}
                    </button>
                  </div>
                )}
                {open === true && (
                  <div className="text-end">
                    <button
                      className="bg-[linear-gradient(90deg,rgba(12,36,74,.5)_0,#0d264c_25%,#0d264c_100%)] p-[2px] pl-[12px]"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      {props.ShowLess}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fff]">
        <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[12px] lg:pt-[18px]">
          <div className="lg:flex gap-[22px] items-start">
            <div>
              <div className="lg:border-[#d6d8da] mt-[-14px] rounded-md lg:bg-white lg:border-[1px] lg:pt-[20px] text-[#16171a] lg:min-w-[240px] w-[240px]">
                <div className="lg:px-[16px] lg:block flex justify-between lg:py-0 py-[16px] gap-2">
                  <div className="lg:w-auto w-[50%]">
                    <p className="lg:text-[14px] text-[12px]">{props.total}:</p>
                    <h1 className="lg:text-[18px] text-[16px] font-semibold lg:mb-[14px]">
                      {props.merchantsdigits}
                    </h1>
                  </div>
                  <div className="lg:w-auto w-[50%]">
                    <p className="lg:text-[14px] text-[12px]">
                      {props.totalOffers}:
                    </p>
                    <h1 className="lg:text-[18px] text-[16px] font-semibold lg:mb-[14px]">
                      {props.length}
                    </h1>
                  </div>
                </div>
                <div className="bg-[#f5f5f5] p-[6px_18px] lg:flex hidden items-center justify-center gap-[6px]">
                  <BiSolidCheckCircle className="text-[#8db654] text-[14px]" />
                  <p className="text-[14px]">Verified On: 11/08/2023, (Fri)</p>
                </div>
              </div>
              <div className="border-[#e7e7e7] p-[18px] rounded-md bg-white lg:border-[1px] lg:pt-[20px] mt-[18px] text-[#16171a] lg:min-w-[240px] w-[240px] lg:block hidden">
                <Link href="/categories">
                  <button
                    onClick={() => setClick("categories")}
                    className={
                      click === "categories"
                        ? "py-[12px] text-[#8db654] text-[14px] leading-4 w-full text-start"
                        : "py-[12px] text-[#515151] hover:text-[#8db654] text-[14px] leading-4 w-full text-start"
                    }
                  >
                    See All Categories
                  </button>
                </Link>
                <Link href="/stores">
                  <button
                    onClick={() => setClick("store")}
                    className={
                      click === "store"
                        ? "py-[12px] text-[#8db654] text-[14px] leading-4 w-full text-start"
                        : "py-[12px] text-[#515151] hover:text-[#8db654] text-[14px] leading-4 w-full text-start"
                    }
                  >
                    See All Stores
                  </button>
                </Link>
                <button
                  onClick={() => setClick("brand")}
                  className={
                    click === "brand"
                      ? "py-[12px] text-[#8db654] text-[14px] leading-4 w-full text-start"
                      : "py-[12px] text-[#515151] hover:text-[#8db654] text-[14px] leading-4 w-full text-start"
                  }
                >
                  See All Brands
                </button>
                <button
                  onClick={() => setClick("bank")}
                  className={
                    click === "bank"
                      ? "py-[12px] text-[#8db654] text-[14px] leading-4 w-full text-start"
                      : "py-[12px] text-[#515151] hover:text-[#8db654] text-[14px] leading-4 w-full text-start"
                  }
                >
                  See All Banks
                </button>
                <button
                  onClick={() => setClick("festival")}
                  className={
                    click === "festival"
                      ? "py-[12px] text-[#8db654] text-[14px] leading-4 w-full text-start"
                      : "py-[12px] text-[#515151] hover:text-[rgb(141,182,84)] text-[14px] leading-4 w-full text-start"
                  }
                >
                  See All Festivals
                </button>
                <button
                  onClick={() => setClick("deals")}
                  className={
                    click === "deals"
                      ? "py-[12px] text-[#8db654] text-[14px] leading-4 w-full text-start"
                      : "py-[12px] text-[#515151] hover:text-[#8db654] text-[14px] leading-4 w-full text-start"
                  }
                >
                  See All Product Deals
                </button>
                <button
                  onClick={() => setClick("cities")}
                  className={
                    click === "cities"
                      ? "py-[12px] text-[#8db654] text-[14px] leading-4 w-full text-start"
                      : "py-[12px] text-[#515151] hover:text-[#8db654] text-[14px] leading-4 w-full text-start"
                  }
                >
                  See All Cities Deals
                </button>
              </div>
            </div>
            <div className="lg:w-[calc(100%-240px)] w-full">
              <div>
                <p className="text-black text-[16px] font-bold my-[13px]">
                  {props.trending}
                </p>
                <div className="flex gap-[12px] gap-y-[18px] mt-[12px] pb-[28px] overflow-x-auto">
                  {router.pathname === "/stores" && (
                    <>
                      {props.value.map((data, key) => {
                        return (
                          <div
                            key={key}
                            onClick={() =>
                              router.push(
                                `/${data.RetailerName}?merchantId=${data._id}`
                              )
                            }
                            className="border-[#e7e7e7] border-[1px] cursor-pointer bg-white rounded-md hover:shadow-[0_5px_15px_rgba(0,0,0,.3)] lg:w-[22.5%] min-w-[150px] w-[44%] transition-main overflow-hidden"
                          >
                            <div className="h-[68px] w-full flex items-center">
                              <Image
                                src={`/uploads/${data.RetailerLogo}`}
                                alt="myntra-logo"
                                className="max-w-[80%] max-h-[150%] mx-auto object-cover"
                                width={80}
                                height={150}
                              />
                            </div>
                            <button className="border-t-[#e7e7e7] border-t-[1px] w-full py-[12px] text-[12px] text-black">
                              Coupons 1
                              <span className="text-[#e7e7e7] px-[6px]">|</span>
                              Offers 2
                            </button>
                          </div>
                        );
                      })}
                    </>
                  )}
                  {router.pathname === "/categories" && (
                    <>
                      {Categories.map((data, key) => {
                        return (
                          <div
                            key={key}
                            className="border-[#e7e7e7] border-[1px] bg-white rounded-md hover:shadow-[0_5px_15px_rgba(0,0,0,.3)] lg:w-[22.5%] min-w-[150px] w-[44%] transition-main overflow-hidden"
                          >
                            <div className="flex gap-[10px] items-center">
                              <div className="h-[52px] w-[52px] inline-block ml-[12px] mt-[12px] rounded-full overflow-hidden">
                                <Image
                                  src={data.img}
                                  alt="myntra-logo"
                                  className="max-w-[110%] max-h-[100%] mx-auto object-cover"
                                />
                              </div>
                              <p className="text-[#212121] font-bold text-[14px] mt-[6px]">
                                {data.text}
                              </p>
                            </div>
                            <button className="border-t-[#e7e7e7] border-t-[1px] w-full py-[12px] text-[12px] text-black">
                              {data.coupone}
                              <span className="text-[#e7e7e7] px-[6px]">|</span>
                              {data.offer}
                            </button>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
              <div>
                <p className="text-black text-[16px] font-bold m-[24px_0_16px]">
                  {props.browse}
                </p>
                <div className="mb-[40px] mt-[20px] flex gap-[12px] flex-wrap">
                  {Array.from({ length: 26 }, (_, index) => {
                    const letter = String.fromCharCode(65 + index);
                    return (
                      <p
                        key={index}
                        className={`text-[14px] cursor-pointer ${
                          selectedLetter === letter
                            ? "text-[#8db654]"
                            : "hover:text-[#8db654]"
                        } cursor-pointer`}
                        onClick={() => setSelectedLetter(letter)}
                      >
                        {letter}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-[18px] mb-[40px]">
                {filteredOffers?.map((data, key) => (
                  <div key={key}>
                    <label className="text-[14px] font-bold">
                      {data.RetailerName}
                    </label>
                    <p className="text-[#515151] lg:text-[14px] text-[12px] flex mb-[14px]">
                      {data.coupon}
                      <span className="block lg:px-[8px] px-[4px]">|</span>
                      {data.offer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Subscribe />
      </div>
    </div>
  );
};

export default SeeOffers;
