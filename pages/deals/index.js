import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import TrendingDeals from "./TrandinDeals";
import ShopStore from "./ShopStore";
import DealsDay from "./DealsDay";
import Platform from "./Platform";
import TrendDeals from "./TrendDeals";
import AboutDeals from "./AboutDeals";
import Subscribe from "./Subscribe";
import Link from "next/link";
import axios from "axios";
import DealsPopup from "./[id]";

const Deals = ({ data, categories, storeData }) => {
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

  const scrollToTop = () => {
    const dealsDayElement = document.getElementById("dealsDay");
    if (dealsDayElement) {
      dealsDayElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="bg-[linear-gradient(178deg,#1c4a81_-8%,#0c244a_93%)] py-[10px]">
        <div className="lg:max-w-[1140px] md:max-w-[720px] max-w-[540px] mx-auto px-[12px]">
          <div className="text-white flex items-center text-[12px] mb-[12px]">
            <Link href="/" className="opacity-70 hover:opacity-100">
              Home
            </Link>
            <span className="px-[4px]">/</span>
            <p>Deals of the Day</p>
          </div>
          <div className="flex justify-between items-start gap-2 flex-wrap">
            <div className="bg-[#8db654] lg:p-[12px_18px] p-[8px_12px] text-white uppercase rounded-sm">
              <h1 className="lg:text-[24px] text-[16px] font-bold leading-[26px]">
                Deals of the Day
              </h1>
              <p className="lg:text-[12px] text-[8px]">
                Fresh. Handpicked. Curated.
              </p>
            </div>
            <div className="bg-[#ffffff47] text-white lg:flex hidden items-end p-[14px_16px]">
              <p className="text-[12px]">New Deals in</p>
              <h1 className="text-[24px] mx-[14px] font-bold leading-[22px]">
                {timeDisplay}
              </h1>
              <button className="w-[20px] h-[20px] bg-white rounded-full flex justify-center items-center">
                <BiChevronDown
                  className="text-black text-[20px]"
                  onClick={scrollToTop}
                />
              </button>
            </div>
            <div className="bg-[#ffffff47] text-white lg:hidden flex items-center justify-between p-[10px_12px] w-[150px]">
              <div>
                <p className="text-[8px]">New Deals in</p>
                <h1 className="text-[16px] font-bold leading-[20px]">
                  {timeDisplay}
                </h1>
              </div>
              <button className="w-[20px] h-[20px] bg-white rounded-full flex justify-center items-center">
                <BiChevronDown className="text-black text-[20px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <TrendingDeals data={data} />
      <ShopStore
        data={storeData}
      />
      <DealsDay categories={categories} />
      <Platform />
      <TrendDeals data={data} />
      <AboutDeals />
      <Subscribe />
      <DealsPopup />
    </div>
  );
};

export default Deals;

export async function getServerSideProps(context) {
  if (context.req) {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/getdeals?categories=trending deals"
      );
      const data = response.data.data;
      const value = await axios.get(
        "http://localhost:3000/api/getdeals?categories=deals of the day"
      );
      const categories = value.data.data;
      const store = await axios.get("http://localhost:3000/api/getbrands");
      const storeData = store.data.data;
      return {
        props: {
          data,
          categories,
          storeData,
        },
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: {
          data: [],
          categories: [],
          storeData: [],
        },
      };
    }
  }
}
