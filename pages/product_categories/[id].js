import { Switch } from "@headlessui/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  AiFillCheckCircle,
  AiFillHeart,
  AiFillStar,
  AiOutlineClose,
  AiOutlineStar,
} from "react-icons/ai";
import { BsCheck2, BsChevronRight } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { PiStarThin } from "react-icons/pi";
import Coupon from "./Coupon";
import Subscribe from "../deals/Subscribe";
import Offer from "./Offer";
import { RatingModal } from "@/components/Common/RatingModal";
import { useSelectedCardContext } from "@/context/createContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { name: `All`, current: true },
  { name: `Coupons`, current: false },
  { name: `Offers`, current: false },
];

const Id = ({ categoriesValue, rating }) => {
  const router = useRouter();
  const { profile, Rating, state } = useSelectedCardContext();
  const [data, setData] = useState([]);
  console.log("===========>data:", data);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(true);
  const [Open, setIOpen] = useState(true);
  const [showMore, setShowMore] = useState({ id: "", status: false });
  const [filterTab, setFilterTab] = useState("All");
  const [tab, setTab] = useState("All");
  let [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await axios
          .get(
            `http://localhost:3000/api/categoriesWiseData/${router.query.id}`
          )
          .then((res) => {
            setData(res.data.data);
          });
      } catch (err) {
        console.error("error-------->", err);
      }
    };
    fetchData();
  }, [router.query.id]);

  const handleCheckboxChange = (retailerName) => {
    if (selectedItems.includes(retailerName)) {
      setSelectedItems((prevItems) =>
        prevItems.filter((item) => item !== retailerName)
      );
    } else {
      setSelectedItems((prevItems) => [...prevItems, retailerName]);
    }
  };
  const tests = data?.categories?.map((item) => item);
  const val = tests && tests[0];
  const matchId = val?._id;
  const matchingRatings =
    state === true
      ? Rating.filter(
          (item) => item.itemId === matchId && item.userId === profile._id
        )
      : rating.filter(
          (item) => item.itemId === matchId && item.userId === profile._id
        );
  const matchRating2 = matchingRatings.map((item, key) => {
    return item.itemId;
  });
  const test = matchRating2?.toString();

  const matchingRating2 =
    state === true
      ? Rating.filter((item) => item.itemId === matchId)
      : rating.filter((item) => item.itemId === matchId);

  return (
    <div>
      <div className="bg-[linear-gradient(178deg,#1c4a81_-8%,#0c244a_93%)] lg:h-[190px] lg:py-0 py-[12px]">
        <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[12px]">
          {data?.categories?.map((item, key) => {
            return (
              <div key={key}>
                <div className="text-white  items-center text-[14px] pt-[24px] mb-2 lg:flex hidden">
                  <Link href={"/"} className="opacity-70 hover:opacity-100">
                    Home
                  </Link>
                  <span className="px-[4px]">/</span>
                  <p>{item.categoriesName}</p>
                </div>
                <div className="flex lg:gap-[24px] gap-[12px]">
                  <div className="relative w-[240px] group h-[190px] flex-none max-lg:w-[115px] max-lg:h-[95px]">
                    <Image
                      src={`/uploads/${item.categoriesImage}`}
                      alt="submit"
                      width={240}
                      height={190}
                      className="lg:w-[240px] w-[102px] max-sm:w-[130px]"
                    />
                  </div>
                  <div className="text-white flex-1">
                    <div className="relative items-center lg:flex justify-between flex-wrap">
                      <h1 className="lg:text-[28px] flex items-center gap-3 text-[18px] font-bold max-sm:text-[15px]">
                        {item.categoriesName} Coupons
                        <AiFillHeart
                          className={`${
                            click
                              ? "text-red-500 animation-jump"
                              : "text-gray-500"
                          } cursor-pointer max-lg:hidden `}
                          onClick={() => setClick(true)}
                        />
                      </h1>
                      <div className="relative hidden max-lg:block mb-[6px] min-h-[38px] max-lg:leading-4 max-lg:mt-[14px]">
                        <p className="block text-[13px] text-[#bac1c2] my-0 mx-0 mb-1">
                          Coupons & Offers
                        </p>
                        <p className="border-l-0 ml-0 pl-0 text-[##bac1c2] my-0 mx-0 mb-1 inline-block text-[10px]">
                          <BsCheck2 className="mr-1 text-[6px] w-[12px] h-[12px] text-[#fff] bg-[#8db654] rounded-[50%] inline-block align-middle text-center leading-3" />
                          Verified
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
                          <AiFillStar className="text-[36px] fill-[#ffb125] stroke-[#ffb125]  " />
                          <p className="text-white leading-4 text-[16px]">
                            4
                            <small className="text-[#bebebe] text-[10px]">
                              / 5
                            </small>
                            <span className="text-[#bebebe] leading-4 block text-[10px]">
                              <span className="go-r-count">
                                {matchingRating2.length}
                              </span>{" "}
                              Votes
                            </span>
                          </p>
                        </div>
                        {matchId === test ? (
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
                      <p>
                        {data.coupon.length + data.offer.length} Coupons &amp;
                        Offers
                      </p>
                      <span className="px-[4px]">|</span>

                      <p className="flex">
                        <AiFillCheckCircle className="text-[#8db654] mt-[3px] mr-2 w-[12px] bg-white rounded-full h-[12px]" />
                        {data.coupon.length + data.offer.length} Verified
                      </p>
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
                                tab === item.name
                                  ? "bg-[#3e65a9]"
                                  : "text-[#272c3f]"
                              } group relative min-w-0 flex-1 text-white cursor-pointer leading-[18px] overflow-hidden p-[8px_12px] text-center text-sm font-medium  focus:z-10`}
                            >
                              {item.name}
                            </li>
                          );
                        })}
                      </ul>
                      <div className="flex items-center gap-2 max-lg:hidden">
                        <span className="text-[12px]  text-white">
                          EXISTING USER
                        </span>
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
                              enabled
                                ? "translate-x-[30px]"
                                : "translate-x-[5px]",
                              "pointer-events-none translate-y-[4px] inline-block h-[15px] w-[15px] transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                            )}
                          />
                        </Switch>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[#e7edf1]">
        <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[12px] lg:pt-[26px]">
          <div className="flex flex-col-reverse lg:flex-row  gap-[22px] items-start">
            <div className="mt-[60px]  lg:w-[240px]">
              <div className="lg:border-[#d6d8da] lg:bg-white lg:border-[1px] lg:pt-[20px] text-[#16171a]">
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
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <span className="absolute right-[18px] top-[9px]">
                      <GoSearch />
                    </span>
                  </div>
                </div>
                <div className=" border-t border-[#e9e9e9] p-[8px_12px_0]">
                  <div
                    onClick={() => setIOpen(!Open)}
                    className="p-[14px_0]  cursor-pointer flex items-center justify-between"
                  >
                    <p>Stores</p>
                    <span
                      id="catFilter"
                      className={`${
                        Open ? "rotate-[90deg]" : "rotate-[0deg]"
                      } transition-all duration-[0.3s]  cursor-pointer`}
                    >
                      <BsChevronRight className="text-[12px]" />
                    </span>
                  </div>
                  {data?.coupon
                    ?.filter((item) =>
                      item.MerchantId.RetailerName.toLowerCase().includes(
                        searchInput.toLowerCase()
                      )
                    )
                    .map((item, key) => {
                      const retailerName = item.MerchantId.RetailerName;
                      const isChecked = selectedItems.includes(retailerName);
                      return (
                        <ul
                          key={key}
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
                              onChange={() =>
                                handleCheckboxChange(retailerName)
                              }
                              checked={isChecked}
                            />
                            <label className="text-[14px] leading-[14px] ml-[6px]">
                              {retailerName}
                            </label>
                          </li>
                        </ul>
                      );
                    })}
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
                  {categoriesValue
                    ?.filter((item) =>
                      item.categoriesName
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                    )
                    ?.map((item, key) => {
                      const retailerName = item.categoriesName;
                      const isChekced = selectedItems.includes(retailerName);
                      return (
                        <ul
                          key={key}
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
                              onChange={() =>
                                handleCheckboxChange(retailerName)
                              }
                              checked={isChekced}
                            />
                            <label className="text-[14px] leading-[14px] ml-[6px]">
                              {retailerName}
                            </label>
                          </li>
                        </ul>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="text-[#16171a] lg:w-[calc(100%-260px)] lg:mt-0 mt-[20px]">
              <div className="flex items-center mb-[12px]">
                <strong className="font-bold">Recommeded Stores:</strong>
                <ul
                  className="overflow-x-auto items-center whitespace-nowrap ml-2 inline-block align-middle"
                  id="tagFilter"
                >
                  {data?.coupon?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => setFilterTab(item.RetailerName)}
                        className={`${
                          filterTab === item.RetailerName
                            ? "bg-[#3e65a9] p-[9px_16px] border-[#3e65a9] text-white "
                            : "text-[#272c3f] cursor-pointer border-[#a0a0a0] p-[6px_8px] pr-[14px]"
                        } transition duration-[0.3s] text-[12px] border rounded-full`}
                      >
                        <a href="" className="block text-[#272c3f]">
                          <Image
                            src={`/uploads/${item.MerchantId.RetailerLogo}`}
                            width={30}
                            height={30}
                            alt=""
                            className="inline-block max-h-[18px] mr-1 align-middle border-none"
                          />
                          {item.MerchantId.RetailerName}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {selectedItems.length > 0 && (
                <div className="mt-3">
                  <ul className="list-none p-0 m-0">
                    {selectedItems.map((selectedItem, index) => (
                      <li
                        key={index}
                        className="cursor-pointer text-[#424657] items-center text-[12px] p-[6px_12px] capitalize rounded-[12px] bg-[#e9e9e9] m-[0px_4px_12px] inline-block"
                      >
                        {selectedItem}
                        <span
                          onClick={() => {
                            const updatedItems = selectedItems.filter(
                              (item) => item !== selectedItem
                            );
                            setSelectedItems(updatedItems);
                          }}
                          className="inline-block cursor-pointer text-[#424657] text-[12px] capitalize"
                        >
                          <AiOutlineClose className="h-[9px] overflow-hidden " />
                        </span>
                      </li>
                    ))}
                    <li
                      onClick={() => {
                        setSelectedItems([]);
                      }}
                      className="cursor-pointer text-[#424657] items-center text-[12px] p-[6px_12px] capitalize rounded-[12px] bg-[#e9e9e9] m-[0px_4px_12px] inline-block"
                    >
                      Clear All
                      <span className="inline-block cursor-pointer text-[#424657] text-[12px] capitalize">
                        <AiOutlineClose className="h-[9px] overflow-hidden " />
                      </span>
                    </li>
                  </ul>
                </div>
              )}
              <div>
                {tab === "All" ? (
                  <>
                    <Coupon
                      data={data}
                      selectedItems={selectedItems}
                      showMore={showMore}
                      setShowMore={setShowMore}
                    />
                    <Offer
                      data={data}
                      selectedItems={selectedItems}
                      setShowMore={setShowMore}
                      showMore={showMore}
                    />
                  </>
                ) : tab === "Coupons" ? (
                  <Coupon
                    data={data}
                    selectedItems={selectedItems}
                    showMore={showMore}
                    setShowMore={setShowMore}
                  />
                ) : tab === "Offers" ? (
                  <Offer
                    data={data}
                    selectedItems={selectedItems}
                    setShowMore={setShowMore}
                    showMore={showMore}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RatingModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        data={val}
        rating={matchingRating2}
      />
      <Subscribe />
    </div>
  );
};

export default Id;

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/getCategoriesData`
    );
    const responseData = await axios.get("http://localhost:3000/api/getRating");
    const rating = responseData.data.data;
    const categoriesValue = response.data.data;
    return {
      props: {
        categoriesValue,
        rating,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        categoriesValue: [],
        rating: [],
      },
    };
  }
}
