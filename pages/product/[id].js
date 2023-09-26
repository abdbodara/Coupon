import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import { useSelectedCardContext } from "@/context/createContext";
import DealsPopup from "../deals/[id]";
import Subscribe from "../deals/Subscribe";
import { useJoinDealsMutation } from "../../app/api";
import { useRouter } from "next/router";

const Id = ({ data, getBrand }) => {
  const brandId = data.brand._id;
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [emailData, setEmailData] = useState({
    email: "",
  });
  const [hide, setHide] = useState(false);
  const [joinDeals, response] = useJoinDealsMutation();
  const filteredBrand = getBrand.filter((item) => brandId !== item._id);
  const getRemainingTime = () => {
    const currentTime = new Date().getTime();
    const nextResetTime =
      Math.ceil(currentTime / (8 * 60 * 60 * 1000)) * (8 * 60 * 60 * 1000);
    const timeDifference = nextResetTime - currentTime;

    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      hours,
      minutes,
      seconds,
    };
  };
  const [timeDisplay, setTimeDisplay] = useState("");
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRemainingTime = getRemainingTime();
      setRemainingTime(newRemainingTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const { hours, minutes, seconds } = remainingTime;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    setTimeDisplay(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
  }, [remainingTime]);

  const { setIsOpen, setSelectedCardData } = useSelectedCardContext();

  const filterData = data.products.filter(
    (item) => item.productCategories === "more deals"
  );

  const filterData2 = data.products.filter(
    (item) => item.productCategories === "best deals"
  );

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      await joinDeals(emailData);
      setEmailData({
        email: "",
      });
      setHide(true);
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <div className="bg-[linear-gradient(178deg,#1c4a81_-8%,#0c244a_93%)] lg:h-[190px] lg:py-0 py-[12px]">
        <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[12px]">
          <div className="text-white  items-center text-[14px] pt-[24px] mb-2 lg:flex hidden">
            <Link href="/deals" className="opacity-70 hover:opacity-100">
              Deals
            </Link>
            <span className="px-[4px]">/</span>
            <Link href="/deals" className="opacity-70 hover:opacity-100">
              All Store Deals
            </Link>
            <span className="px-[4px]">/</span>
            <p>{data.brand.brandTitle} Deals</p>
          </div>
          <div className="flex lg:gap-[24px] gap-[12px]">
            <div className="w-[240px] h-[190px] leading-[190px] relative lg:top-[12px] inline-block rounded border border-[#d6d8da] bg-[#fff] max-lg:w-[115px] max-lg:h-[95px] top-0">
              <Image
                src={`/uploads/${data.brand.brandLogo}`}
                alt="submit"
                width={240}
                height={190}
                className="lg:w-[240px] w-[102px] max-sm:w-[130px] h-auto align-middle top-[50%] absolute left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
              />
            </div>
            <div className="text-white flex-1">
              <div className="relative items-center lg:flex justify-between flex-wrap">
                <h1 className="lg:text-[28px] flex items-center gap-3 text-[18px] font-bold max-sm:text-[15px]">
                  {data.brand.brandTitle} Deals of the Day
                </h1>
              </div>
              <div className="lg:text-[14px] min-h-[38px] flex  gap-2 text-[10px] text-[#bac1c2]">
                <p>Deals </p>
                <span className="px-[4px]">|</span>
                <p>30 Users Viewed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-[12px_0] bg-[#eaeaea]">
        <div className="xl:max-w-[1140px] m-auto p-[0_12px] lg:p-0 lg:max-w-[960px]">
          <div className="lg:ml-[270px] relative leading-[21px] ml-0">
            <p className="min-h-[42px] overflow-hidden mt-0">
              Flipkart being one of the most sought after online store offers
              some of the best deals in the market. And we have worked with them
              to bring all of these in for you. You can use these deals while
              shopping on Flipkart. And these deals are
              {show ? (
                <p>
                  applicable on all categories and almost all products, be it
                  electronics, apparel, accessories, wearables, toys, home and
                  kitchen appliances, kid
                  {"'"}s fashion or anything else. They have this deal of the
                  day section, where you can get check all kinds of deals for
                  the day. These exclusive deals help you save more than you
                  usually do on these products. We have listed together with all
                  these deals for your perusal. Check these to make the most of
                  your online shopping. Why pay more if you can save hundreds of
                  bills on what you need? Grab the deals before they are gone,
                  because these change from time to time. Get yours from the
                  daily deals, the weekly or the monthly ones.
                </p>
              ) : (
                ""
              )}
              <button
                onClick={() => setShow(!show)}
                className="text-[#2491ef] absolute block right-0 pt-[2px]"
              >
                {show ? "Show Less" : "Show More"}
              </button>
            </p>
          </div>
          <h2 className="text-[22px] border-t border-t-[#d6d8da] font-[600] pt-4 mt-[54px] relative after:content-[''] after:bg-[#8db654] after:w-[80px] after:block after:h-[4px] after:mt-[10px] mb-[18.25px]">
            Today{"'"}s {data.brand.brandTitle} Best Deals
          </h2>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-[8px] gap-y-[12px] lg:gap-[18px] mb-[12px] lg:gap-y-[28px]">
            {filterData.map((item, key) => (
              <div
                key={key}
                className="group shadow-[0_1px_4px_0_rgba(17,19,35,.08)] cursor-pointer hover:shadow-[0_1px_4px_0_rgba(112,168,34,.78)] border-[1px] border-[#e7e7e7] p-[12px] rounded-md hover:border-[#70a822] transition-all relative bg-white"
              >
                <div className="bg-[#8db654] absolute top-[14px] left-0 text-white text-[12px] p-[4px_8px]">
                  {item.offer}
                </div>
                <div className="w-full h-[100px]">
                  <Image
                    src={`/uploads/${item.image}`}
                    alt="eardopes"
                    width={100}
                    height={100}
                    className="max-h-[80%] max-w-[80%] my-[20px] w-auto mx-auto"
                  />
                </div>
                <h1 className="text-[#a8b9c2] mb-[6px] text-[14px]">
                  {data?.brand?.brandTitle}
                </h1>
                <p className="text-[#16171a] text-[12px] sm:text-[14px] h-[52px] overflow-hidden font-[300]">
                  {item.description}
                </p>
                <div className="flex justify-between items-end mb-[6px]">
                  <div>
                    <p className="text-black font-bold mt-[12px] text-[22px] mb-1">
                      Rs. {item.oldPrice}
                    </p>
                    <span className="line-through text-[#7b7b7b] text-[14px] font-[400]">
                      Rs. {item.oldPrice}
                    </span>
                  </div>
                  <button
                    className="text-[#2491ef] font-bold text-[14px] mr-[14pxs] hidden group-hover:block transition-all"
                    onClick={() => {
                      setIsOpen(true), setSelectedCardData(item);
                    }}
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            ))}
            <div className="text-[14px] inline-block align-top">
              <div className="pt-[36px] pb-[28px] relative p-[16px] h-[303px] bg-[#fafff4] rounded-md shadow-[0_1px_4px_0_#11132314] border border-[#e7e7e7] hover:border-[#70a822] hover:shadow-[0_1px_4px_0_#70a822c7] transition-all">
                <Link
                  href="/deals"
                  className="opacity-[1] relative right-auto min-h-[228px] left-0 text-[14px] block text-center font-[500] "
                >
                  <p className="lg:text-[22px] font-[700] text-[#212121] mt-0 mb-[6px] text-left text-[19px] leading-5 lg:leading-none">
                    GRAB NEW DEALS
                  </p>
                  <p className="lg:text-[22px] font-[700] text-[#212121] mt-0 mb-[6px] text-left text-[19px]">
                    Every 8 Hours
                  </p>
                  <div className="absolute bottom-0 w-full">
                    <small className="text-[14px] text-left text-[#212121] block mb-3 font-[600]">
                      Deals Renew In
                    </small>
                    <p className="text-[22px] p-[16px_18px] rounded-[4px] bg-[#005198] text-[#fff] font-[400] mt-0 mb-[6px] text-left">
                      {timeDisplay}
                      <span className="float-right">
                        <FiChevronRight
                          size="13"
                          className="w-[25px] h-[30px]"
                        />
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <h2 className="text-[22px] border-t border-t-[#d6d8da] font-[600] pt-4 mt-[54px] relative after:content-[''] after:bg-[#8db654] after:w-[80px] after:block after:h-[4px] after:mt-[10px] mb-[18.25px]">
            More Deals From {data.brand.brandTitle}
          </h2>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-[8px] gap-y-[12px] lg:gap-[18px] mb-[12px] lg:gap-y-[28px]">
            {filterData2?.map((item, key) => (
              <div
                key={key}
                className="group shadow-[0_1px_4px_0_rgba(17,19,35,.08)] cursor-pointer hover:shadow-[0_1px_4px_0_rgba(112,168,34,.78)] border-[1px] border-[#e7e7e7] p-[12px] rounded-md hover:border-[#70a822] transition-all relative bg-white"
              >
                <div className="bg-[#8db654] absolute top-[14px] left-0 text-white text-[12px] p-[4px_8px]">
                  {item.offer}
                </div>
                <div className="w-full h-[100px]">
                  <Image
                    src={`/uploads/${item.image}`}
                    alt="eardopes"
                    width={100}
                    height={100}
                    className="max-h-[80%] max-w-[80%] my-[20px] w-auto mx-auto"
                  />
                </div>
                <h1 className="text-[#a8b9c2] mb-[6px] text-[14px]">
                  {data?.brand?.brandTitle}
                </h1>
                <p className="text-[#16171a] text-[12px] sm:text-[14px] h-[52px] overflow-hidden font-[300]">
                  {item.description}
                </p>
                <div className="flex justify-between items-end mb-[6px]">
                  <div>
                    <p className="text-black font-bold mt-[12px] text-[22px] mb-1">
                      Rs. {item.oldPrice}
                    </p>
                    <span className="line-through text-[#7b7b7b] text-[14px] font-[400]">
                      Rs. {item.oldPrice}
                    </span>
                  </div>
                  <button
                    className="text-[#2491ef] font-bold text-[14px] mr-[14pxs] hidden group-hover:block transition-all"
                    onClick={() => {
                      setIsOpen(true), setSelectedCardData(item);
                    }}
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            ))}

            <div className="text-[14px] inline-block align-top">
              <div className="pt-[36px] pb-[28px] relative p-[16px] h-[303px] bg-[#fafff4] rounded-md shadow-[0_1px_4px_0_#11132314] border border-[#e7e7e7] hover:border-[#70a822] hover:shadow-[0_1px_4px_0_#70a822c7] transition-all">
                <div className="opacity-[1] relative right-auto min-h-[228px] left-0 text-[14px] block text-center font-[500] ">
                  <p className="lg:text-[22px] font-[700] text-[#212121] mt-[20px] mb-[6px] text-left text-[19px] leading-5 lg:leading-none">
                    {hide ? `That's not all.` : "Shhh! Grab secret"}
                  </p>
                  <p className="lg:text-[22px] font-[700] text-[#212121] mt-0 mb-[6px] text-left text-[19px]">
                    {hide ? "We have got lots more!" : "deals to your inbox…"}
                  </p>
                  <div className="absolute bottom-0 w-full">
                    <form onSubmit={submitHandler}>
                      {hide ? (
                        <>
                          <p className="text-start mb-[10px] sm:text-[12px]">
                            GrabOn Deals of the day. Fresh <br /> Handipicked.
                            Curated.
                          </p>
                        </>
                      ) : (
                        <input
                          type="email"
                          name="email"
                          value={emailData.email}
                          onChange={(e) =>
                            setEmailData((...preValue) => ({
                              ...preValue,
                              [e.target.name]: e.target.value,
                            }))
                          }
                          placeholder="Enter Your Email Address"
                          className="h-[44px] p-3 block w-full rounded border border-[#707070] mb-3 leading-[normal]"
                        />
                      )}
                      {hide ? (
                        <button
                          onClick={() => router.push(`/deals`)}
                          className="lg:text-[20px] sm:text-[14px] items-center flex justify-between jus w-full p-[16px_18px] rounded-[4px] bg-[#005198] text-[#fff] font-[400] mt-0 mb-[6px] text-center"
                        >
                          View all Deals
                          <FiChevronRight
                            size="13"
                            className="w-[25px] h-[30px]"
                          />
                        </button>
                      ) : (
                        <button className="text-[20px] w-full p-[16px_18px] rounded-[4px] bg-[#005198] text-[#fff] font-[400] mt-0 mb-[6px] text-center">
                          Join in
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-[24px_0] bg-[#eaeaea]">
        <div className="container max-w-[1140px] m-auto">
          <h3 className="text-[22px] text-[#000] font-[700] relative m-[22px_0] after:content-[''] after:bg-[#8db654] after:w-[80px] after:block after:h-[4px] after:mt-[10px]">
            Related Stores
          </h3>
          <a
            href=""
            className="absolute right-[17px] top-[-5px] rounded-[3px] border border-[#000] text-[#000] p-[7px_12px] font-[300]"
          >
            Show All
            <span className="w-[20px] h-[20px] shadow-[0_1px_3px_0_#0000005e] bg-[#42a1f4] inline-block rounded-[50%] align-middle ml-[6px] text-center">
              <FiChevronRight
                size="13"
                className="h-[15px] relative top-[2px] text-[#fff] w-[22px]"
              />
            </span>
          </a>
          <div className="gap-2 flex">
            {filteredBrand?.map((item, key) => (
              <div
                className="lg:w-[calc(20%_-_12px)] w-[calc(50%_-_8px)] text-[14px] border border-[#dadada] bg-[#fff] mb-3 rounded-[6px] inline-block hover:border-[#70a822] hover:shadow-[0_1px_4px_0_#11132314] transition-all"
                key={key}
              >
                <Link
                  href={`/product/${item._id}`}
                  className="h-[75px] leading-[75px] static block text-center"
                >
                  <Image
                    src={`/uploads/${item.brandLogo}`}
                    alt="submit"
                    width={800}
                    height={160}
                    className="align-middle lg:max-w-[60%] max-w-[25%] max-h-[60%] m-auto inline-flex"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="p-[24px_0] bg-[#eaeaea]">
        <div className="container max-w-[1140px] m-auto">
          <h3 className="text-[22px] text-[#000] font-[700] relative m-[22px_0] after:content-[''] after:bg-[#8db654] after:w-[80px] after:block after:h-[4px] after:mt-[10px]">
            More From {data.brand.brandTitle}
          </h3>
          <div>
            <div className="ml-0 lg:w-[calc(16.6666666667%_-_12px)] w-[calc(50%_-_8px)] h-[56px] align-top border border-[#dadada] rounded-[6px] mb-3 text-center hover:border-[#70a822] hover:shadow-[0_1px_4px_0_#11132314] transition-all">
              <a
                href=""
                className="flex float-none text-[#000] w-[80%] text-[14px] m-[0_auto] h-full justify-center items-center relative top-0 right-0"
              >
                {data.brand.brandTitle} Coupons
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="p-[24px_0] bg-[#eaeaea]">
        <div className="container max-w-[1140px] m-auto xl:p-0 !pl-3 p-[0_12px]">
          <div className="lg:p-6 p-3 text-[#373737] rounded-[6px] border border-[dadada] bg-[#fff]">
            <h3 className="text-[18px] m-[0_auto_16px] tracking-[.2px]">
              About {data.brand.brandTitle}
            </h3>
            <p className="text-[14px] leading-[20px] m-[0_auto_16px] tracking-[.2px]">
              {data.brand.about}
            </p>
          </div>
        </div>
      </div>
      <Subscribe />
      <DealsPopup />
    </div>
  );
};

export default Id;

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;
    if (!id) {
      throw new Error("ID not provided.");
    }
    const response = await axios.get(
      `http://localhost:3000/api/getbrand?_id=${id}`
    );
    const responseData = await axios.get("http://localhost:3000/api/getbrands");

    const data = response.data;
    const getBrand = responseData.data.data;
    return {
      props: {
        data,
        getBrand,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return {
    props: {
      data: [],
      getBrand: [],
    },
  };
}
