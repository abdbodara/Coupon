import React, { Fragment, useEffect, useState } from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GrClose, GrPowerShutdown } from "react-icons/gr";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import img1 from "../../public/Assets/Images/img1.jpg";
import card1 from "../../public/Assets/Images/card-logo1.jpg";
import img2 from "../../public/Assets/Images/img2.jpg";
import card2 from "../../public/Assets/Images/card-logo2.webp";
import img3 from "../../public/Assets/Images/img3.jpg";
import card3 from "../../public/Assets/Images/card-logo3.jpg";
import banner1 from "../../public/Assets/Images/banner1.jpg";
import banner2 from "../../public/Assets/Images/banner2.jpg";
import banner3 from "../../public/Assets/Images/banner3.jpg";
import showLogo from "../../public/Assets/Images/bookmyshow-logo.jpg";
import firstLogo from "../../public/Assets/Images/firstcry-logo.jpg";
import makeMyTrip from "../../public/Assets/Images/makemytrip-logo.jpg";
import Login from "@/pages/login";
import { IoMenuSharp } from "react-icons/io5";
import banner from "../../public/Assets/Images/login-banner.png";
import { BiChevronRight } from "react-icons/bi";

const trend = [
  { btn: "Amazon - Todays Sale" },
  { btn: "Myntra - Crazy Deals Sale" },
  { btn: "OVH Cloud - Flat 44% Off" },
  { btn: "Hostinger - Extra 10% OFF" },
  { btn: "Udemy - FREE Courses" },
  { btn: "Dell - Up To Rs 18000 OFF + Extra Rs 5000 OFF" },
  { btn: "MMT - Up to Rs 2500 Off" },
  { btn: "Croma - 10% Sale" },
  { btn: "Bigrock - Hosting Sale" },
  { btn: "Tata CLiQ - Bank Offers" },
  { btn: "Man Matters - Flat 15% Off" },
  { btn: "Oven Story - Flat Rs 150 Off" },
  { btn: "McDonalds - Free Offer" },
  { btn: "Kapiva - Flat 15% Off" },
  { btn: "GNC - BAU Sale" },
  { btn: "Flipkart - Crazy Deals" },
];

const cardData = [
  {
    cardimg: img1,
    cardlogo: card1,
    offer: (
      <>
        <p className="text-[#515151] text-[12px] font-semibold my-[16px] group-hover:underline">
          FLAT <span className="text-[16px]"> 55% </span> OFF
        </p>
      </>
    ),
    purchase:
      "Mattress Sale - Flat 45% OFF + Additional 10% OFF On Your Purchases",
    ema: "See All Emma Mattress Offers",
  },
  {
    cardimg: img2,
    cardlogo: card2,
    offer: (
      <>
        <p className="text-[#515151] text-[12px] font-semibold my-[16px] group-hover:underline">
          <span className="text-[16px]"> GRABON EXCLUSIVE </span>
        </p>
      </>
    ),
    purchase: "Get Up To 60% OFF + Extra 5% OFF On All Orders",
    ema: "See All MuscleTech Offers",
  },
  {
    cardimg: img3,
    cardlogo: card3,
    offer: (
      <>
        <p className="text-[#515151] text-[12px] font-semibold my-[16px] group-hover:underline">
          FLAT <span className="text-[16px]"> 25% </span> OFF
        </p>
      </>
    ),
    purchase:
      "Freedom And Beauty Unite  - Flat 25% OFF +  Extra 10% OFF On Your Orders",
    ema: "See All Kaya Clinic Offers",
  },
];

const Feature = [
  {
    banner: banner1,
    show: showLogo,
    buy: " BUY 1 GET 1 FREE",
    free: "Buy 1 Get 1 Free On All Movie Tickets | Bank Offers",
  },
  {
    banner: banner2,
    show: firstLogo,
    buy: " SITEWIDE OFF ",
    free: "Sitewide Offer - Up to 70% OFF + Extra 5% OFF | New Users",
  },
  {
    banner: banner3,
    show: makeMyTrip,
    buy: (
      <>
        <p className="text-[#07080b] text-[12px] my-[5px]">
          Up To <span className="text-[14px]">Rs.1200 </span> OFF
        </p>
      </>
    ),
    free: "Buy 1 Get 1 Free On All Movie Tickets | Bank Offers",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const openInNewTab = (url) => {
    window.open(url);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload("/");
  };

  return (
    <>
      <div className="sticky top-0 z-[9999999] shadow-[0_1px_4px_0_rgba(0,0,0,.12)]">
        <div className="bg-[#fff]">
          <div className="max-w-[1140px] py-3 w-full m-auto bg-[#fff] px-[12px]">
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="flex">
                  <button
                    className="lg:hidden block sm:mr-[60px] text-[26px] text-[#16171a]"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <IoMenuSharp />
                  </button>
                  <Link href="/" className="xl:mr-[50px]">
                    <Image
                      src={Logo}
                      alt=""
                      className="w-auto h-[40px] sm:ml-[-16px] object-cover"
                    />
                  </Link>
                </div>
                <div
                  className="items-center relative xl:w-[630px] md:w-[400px] w-[300px] lg:flex hidden"
                  onClick={() => setOpen(!open)}
                >
                  <GoSearch className="absolute text-[#888] text-[22px] left-[12px]" />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search for brands, categories"
                    className="border-0 bg-[#efefef] h-[38px] pl-[48px] p-1 rounded w-full text-[14px] outline-none"
                  />
                </div>
                <Transition.Root show={open} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-[999999999999999]"
                    onClose={setOpen}
                  >
                    <div className="fixed inset-0 z-[99999999] overflow-y-auto">
                      <div className="flex min-h-full text-center p-0">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          enterTo="opacity-100 translate-y-0 sm:scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                          <Dialog.Panel className="relative overflow-y-auto rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all w-full sm:p-6 lg:h-auto h-screen">
                            <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto">
                              <div className="text-end">
                                <button onClick={() => setOpen(false)}>
                                  <GrClose className="opacity-20 lg:text-[46px] text-[20px]" />
                                </button>
                              </div>
                              <div>
                                <input
                                  type="text"
                                  placeholder="Search for stores, coupons & offers..."
                                  className="border-b-[1px] border-b-[#a1a1a2] lg:text-[50px] outline-none w-full placeholder:text-black placeholder:opacity-40"
                                />
                                <span className="lg:opacity-50 mt-[6px] block lg:text-end lg:text-[16px] text-[14px] lg:my-0 my-[12px]">
                                  What do you want to search today?
                                </span>
                                <div className="lg:mt-[56px] mt-[20px] pb-[26px] border-b-[#dcdcdc] border-b-[1px]">
                                  <h1 className="font-medium relative after:absolute after:content-[''] after:bg-[#8db654] after:w-[70px] after:h-[3px] after:bottom-[-4px] after:left-0 mb-[24px]">
                                    Trending Now
                                  </h1>
                                  <div className="flex gap-1 items-center flex-wrap gap-x-[6px] gap-y-[10px]">
                                    {trend.map((data, key) => (
                                      <button
                                        key={key}
                                        className="bg-[#ebebeb] hover:bg-[#60a600] text-[#545454] hover:text-[#fff] lg:text-[14px] text-[12px] p-[8px_16px] rounded-[20px] transition-all"
                                      >
                                        {data.btn}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                                <div className="lg:mt-[56px] mt-[26px] flex gap-[30px]">
                                  <div className="block lg:hidden w-full">
                                    <div className="shadow-[0_1px_4px_0_rgba(0,0,0,.09)] border-[#d6d8da] border-[1px] p-[4px_14px] mb-[12px] rounded-md flex justify-between items-center w-full">
                                      <div className="flex items-center">
                                        <Image
                                          src={card1}
                                          alt="card1"
                                          className="w-[100px] h-[40px] object-cover"
                                        />
                                        <p className="text-[#515151] text-[12px] font-semibold m-[16px] group-hover:underline">
                                          FLAT
                                          <span className="text-[16px]">
                                            25%
                                          </span>
                                          OFF
                                        </p>
                                      </div>
                                      <button className="bg-[#2491ef] w-[18px] h-[18px] rounded-full text-white">
                                        <BiChevronRight />
                                      </button>
                                    </div>
                                    <div className="shadow-[0_1px_4px_0_rgba(0,0,0,.09)] border-[#d6d8da] border-[1px] p-[4px_14px] mb-[12px] rounded-md flex justify-between items-center w-full">
                                      <div className="flex items-center">
                                        <Image
                                          src={card2}
                                          alt="card1"
                                          className="w-[100px] h-[40px] object-cover"
                                        />
                                        <p className="text-[#515151] font-semibold m-[16px] group-hover:underline">
                                          <span className="text-[14px]">
                                            GRABON EXCLUSIVE
                                          </span>
                                        </p>
                                      </div>
                                      <button className="bg-[#2491ef] w-[18px] h-[18px] rounded-full text-white">
                                        <BiChevronRight />
                                      </button>
                                    </div>
                                    <div className="shadow-[0_1px_4px_0_rgba(0,0,0,.09)] border-[#d6d8da] border-[1px] p-[4px_14px] mb-[12px] rounded-md flex justify-between items-center w-full">
                                      <div className="flex items-center">
                                        <Image
                                          src={card3}
                                          alt="card1"
                                          className="w-[100px] h-[40px] object-cover"
                                        />
                                        <p className="text-[#515151] font-semibold m-[16px] group-hover:underline">
                                          <span className="text-[14px]">
                                            INDEPENDENCE DAY SALE
                                          </span>
                                        </p>
                                      </div>
                                      <button className="bg-[#2491ef] w-[18px] h-[18px] rounded-full text-white">
                                        <BiChevronRight />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="lg:block hidden">
                                    <h1 className="font-medium relative after:absolute after:content-[''] after:bg-[#8db654] after:w-[70px] after:h-[3px] after:bottom-[-4px] after:left-0 mb-[24px]">
                                      Hottest Now
                                    </h1>
                                    <div className="flex gap-[30px]">
                                      {cardData.map((data, key) => (
                                        <div className="group" key={key}>
                                          <Image
                                            src={data.cardimg}
                                            alt="img1"
                                            className="shadow-[0_2px_11px_0_rgba(0,0,0,.14)] rounded-md mb-2"
                                          />
                                          <Image
                                            src={data.cardlogo}
                                            alt="card1"
                                            className="w-[100px] h-[40px] object-cover"
                                          />
                                          {data.offer}
                                          <p className="text-[#515151] text-[14px] group-hover:underline mb-[12px] max-w-[190px]">
                                            {data.purchase}
                                          </p>
                                          <a
                                            href="#"
                                            className="text-[#2491ef] text-[12px]"
                                          >
                                            {data.ema}
                                          </a>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="lg:block hidden">
                                    <h1 className="font-medium relative after:absolute after:content-[''] after:bg-[#8db654] after:w-[70px] after:h-[3px] after:bottom-[-4px] after:left-0 mb-[24px]">
                                      Featured Deal
                                    </h1>
                                    <div className="flex flex-col gap-y-[16px]">
                                      {Feature.map((data, key) => (
                                        <div
                                          key={key}
                                          className="shadow-[0_2px_11px_0_rgba(0,0,0,.14)] p-[10px] flex group"
                                        >
                                          <Image
                                            src={data.banner}
                                            alt="banner"
                                            className="mr-[12px] w-[100px] h-[100px] rounded-[3px]"
                                          />
                                          <div>
                                            <Image
                                              src={data.show}
                                              alt="show"
                                              className="h-[30px] w-[75px] object-cover"
                                            />
                                            <p className="mt-[5px] text-[#07080b] text-[14px]">
                                              {data.buy}
                                            </p>
                                            <p className="mt-[5px] text-[#07080b] text-[14px] group-hover:underline max-w-[270px]">
                                              {data.free}
                                            </p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
              </div>
              <div className="flex items-center">
                <div className="relative mr-[24px]">
                  <span className="text-[10px] w-[16px] h-[16px] text-center bg-[#de2e2e] text-slate-100 absolute top-[-6px] right-[-6px] rounded-[50%] leading-4 flex justify-center items-center">
                    2
                  </span>
                  <IoIosNotificationsOutline className="text-[25px] text-[#000]" />
                </div>
                <button
                  onClick={() => setOpen(!open)}
                  className="lg:hidden block"
                >
                  <GoSearch className="text-[#888] text-[22px]" />
                </button>
                {isLoggedIn ? (
                  <>
                    <div className="lg:flex group  relative items-center  hidden">
                      <Image
                        src={user?.image}
                        alt="img"
                        width={40}
                        height={100}
                        className="rounded-full cursor-pointer"
                      />
                      <h2 className="w-[65px] ml-[8px] truncate">
                        Hi,{user?.fullName}
                      </h2>
                      <div className="absolute group-hover:opacity-100 top-[32px] group-hover:top-[46px]  opacity-0 invisible group-hover:visible rounded-lg bg-[#ecf1f7] min-w-[160px] w-full transition-all  right-0">
                        <Link
                          href={"/profile"}
                          className="pt-[10px] px-[20px] text-[#333] block"
                        >
                          View Profile
                        </Link>
                        <button
                          className="py-[10px] px-[20px] text-[#333] "
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setIsOpen(true);
                    }}
                    className="bg-[#60a600] text-[#fff] rounded-sm h-[38px] py-2 px-4 lg:block hidden"
                  >
                    Log In / Sign Up
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f8fa] mb-[2px] lg:block hidden">
          <div className="max-w-[1140px] mx-auto px-[12px] flex justify-between">
            <ul className="flex gap-6">
              <Link
                href="/stores"
                className="p-[15px_0] text-[#16171a] text-[14px] transition-all hover:text-[#60a600] cursor-pointer hover:shadow-[inset_0_-3px_#60a600]"
              >
                Stores
              </Link>
              <Link
                href="/categories"
                className="p-[15px_0] text-[#16171a] text-[14px] transition-all hover:text-[#60a600] cursor-pointer hover:shadow-[inset_0_-3px_#60a600]"
              >
                Categories
              </Link>
              <li
                className="p-[15px_0] text-[#16171a] text-[14px] transition-all hover:text-[#60a600] cursor-pointer hover:shadow-[inset_0_-3px_#60a600]"
                onClick={() => openInNewTab("/indulge")}
              >
                Indulge
              </li>
            </ul>
            <div className="flex gap-6">
              <Link
                href={"/submitcoupon"}
                className="p-[15px_0] text-[#16171a] text-[14px] transition-all hover:text-[#60a600] cursor-pointer hover:shadow-[inset_0_-3px_#60a600]"
              >
                Submit Coupon
              </Link>
              <Link
                href={"/deals"}
                className="p-[15px_0] text-[#16171a] text-[14px] transition-all hover:text-[#60a600] cursor-pointer hover:shadow-[inset_0_-3px_#60a600]"
              >
                Deals Of The Day
              </Link>
            </div>
          </div>
        </div>
        {isOpen === true ? <Login setIsOpen={setIsOpen} isOpen={isOpen} /> : ""}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative  z-[99999999] lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-[#0009]" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-[448px] ] flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div></div>
                  </Transition.Child>
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white pb-4">
                    {isLoggedIn ? (
                      <div className="bg-[linear-gradient(179deg,#417ad2_-16%,#284878_99%)] flex items-center flex-col pt-[18px] pb-2 px-[8px]">
                        <Image
                          src={user.image}
                          alt="img"
                          width={60}
                          height={60}
                          className="h-[60px] mb-[8px] w-[60px] rounded-full"
                        />
                        <h3 className="text-[15px] text-white  font-bold">
                          {user.fullName}
                        </h3>
                        <span className=" text-white block">Welcome</span>
                        <Link
                          href="/profile"
                          className="underline  text-white"
                          onClick={() => {
                            setSidebarOpen(false);
                          }}
                        >
                          View Profile
                        </Link>
                      </div>
                    ) : (
                      <div className="bg-[linear-gradient(179deg,#417ad2_-16%,#284878_99%)] p-[18px_8px] flex justify-between">
                        <div className="w-[48%]">
                          <Image src={banner} alt="banner" className="m-auto" />
                        </div>
                        <div className="w-[48%] m-auto">
                          <p className="text-white text-[12px] text-center my-[12px]">
                            Grab Best <br /> Coupons & Deals
                          </p>
                          <button
                            onClick={() => {
                              setIsOpen(true), setSidebarOpen(false);
                            }}
                            className="text-white underline text-[14px] block text-center mx-auto"
                          >
                            Login & SignUp
                          </button>
                        </div>
                      </div>
                    )}
                    <div
                      className="px-[12px] flex flex-col text-[14px]"
                      onClick={() => {
                        setSidebarOpen(false);
                      }}
                    >
                      <Link href="/stores" className="p-[16px_0] w-full">
                        Stores
                      </Link>
                      <Link href="/categories" className="p-[16px_0] w-full">
                        Categories
                      </Link>
                      <p
                        href={"/indulge"}
                        onClick={() => openInNewTab("/indulge")}
                        className="p-[16px_0] w-full"
                      >
                        Indulge
                      </p>
                    </div>
                    <div className="border-t-[#cfcfcf] flex flex-col border-t-[1px] px-[12px] text-[14px]">
                      <Link
                        href={"/submitcoupon"}
                        className="p-[16px_0]"
                        onClick={() => {
                          setSidebarOpen(false);
                        }}
                      >
                        Submit Coupon
                      </Link>
                      <Link
                        href={"/deals"}
                        className="p-[16px_0]"
                        onClick={() => {
                          setSidebarOpen(false);
                        }}
                      >
                        Deals Of The Day
                      </Link>
                      {user ? (
                        <>
                          <button
                            className="p-[16px_0] flex items-center gap-2"
                            onClick={handleLogout}
                          >
                            Logout
                            <GrPowerShutdown />
                          </button>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
};

export default Header;
