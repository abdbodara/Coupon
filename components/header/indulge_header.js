import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";
import { GoSearch } from "react-icons/go";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";

const Indulge_header = () => {
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <div className="bg-[#fff] shadow-[0_15px_30px_0_rgba(119,123,146,0.1)]">
        <div className="xl:max-w-[1140px] max-w-[980px] py-3 w-full m-auto bg-[#fff] px-[12px]">
          <div className="flex justify-between items-center">
            <button
              className="text-[32px] lg:hidden blocks"
              onClick={() => setSidebarOpen(true)}
            >
              <RiMenu2Fill />
            </button>
            <Link href="/" className="xl:mr-[50px]">
              <Image
                src={Logo}
                alt=""
                className="w-auto h-[40px] sm:ml-[-16px] object-cover"
              />
            </Link>
            <div className="flex items-center gap-[12px]">
              <div className="lg:block hidden">
                <a
                  href="#"
                  className="group p-[8px_13px_11px] popins font-bold relative width-trans"
                >
                  Coupons
                </a>
                <a
                  href="#"
                  className="group p-[8px_13px_11px] popins font-bold relative width-trans"
                >
                  Health
                </a>
                <a
                  href="#"
                  className="group p-[8px_13px_11px] popins font-bold relative width-trans"
                >
                  Shopping
                </a>
                <a
                  href="#"
                  className="group p-[8px_13px_11px] popins font-bold relative width-trans"
                >
                  Travel
                </a>
                <a
                  href="#"
                  className="group p-[8px_13px_11px] popins font-bold relative width-trans"
                >
                  Food
                </a>
                <a
                  href="#"
                  className="group p-[8px_13px_11px] popins font-bold relative width-trans"
                >
                  Featured
                </a>
                <a
                  href="#"
                  className="group p-[8px_13px_11px] popins font-bold relative width-trans"
                >
                  D2H Plans
                </a>
                <a
                  href="#"
                  className="group p-[8px_13px_11px] popins font-bold relative width-trans"
                >
                  Contact
                </a>
              </div>
              <button
                className="text-[#222] text-[28px]"
                onClick={() => setOpen(true)}
              >
                <GoSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#000000b3] bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center md:p-4 text-center sm:items-start md:px-[30px]">
              <button
                className="text-[30px] w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center fixed top-[15px] right-[20px] shadow-[0_5px_23px_rgba(188,207,219,.35)]"
                onClick={() => setOpen(false)}
              >
                <IoClose />
              </button>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative  transition-all h-[calc(100vh_-_500px)] flex items-center sm:my-8 sm:w-full sm:max-w-[1000px] w-full">
                  <div className="relative transform w-full overflow-hidden bg-white text-left shadow-xl transition-all">
                    <input
                      type="text"
                      className="w-full outline-none h-[74px] p-[5px_37px_5px_25px] text-[25px]"
                      placeholder="Search"
                    />
                    <GoSearch className="absolute right-[25px] top-[50%] translate-y-[-50%] text-[#222] text-[28px] md:block hidden" />
                    <button
                      className="text-[22px] w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center fixed top-[15px] right-[20px] shadow-[0_5px_23px_rgba(188,207,219,.35)] md:hidden"
                      onClick={() => setOpen(false)}
                    >
                      <IoClose />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
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
              <Dialog.Panel className="relative mr-16 flex w-full max-w-[270px] flex-1">
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
                <div
                  className={`flex grow flex-col overflow-y-auto bg-white ${
                    sidebarOpen ? "off-canvas-active" : ""
                  }`}
                >
                  <div className="bg-[#f3f3f3] p-[15px] list slidbar-logo">
                    <Image
                      src={Logo}
                      alt=""
                      className="w-auto h-[40px] object-cover mx-auto"
                    />
                  </div>
                  <div>
                    <ul>
                      <li className="block w-full font-bold p-[10px_15px] border-b-[#eee] border-b-[1px]">
                        <a href="#" className="">
                          Coupons
                        </a>
                      </li>
                      <li className="block w-full font-bold p-[10px_15px] border-b-[#eee] border-b-[1px]">
                        <a href="#" className="">
                          Coupons
                        </a>
                      </li>
                      <li className="block w-full font-bold p-[10px_15px] border-b-[#eee] border-b-[1px]">
                        <a href="#" className="">
                          Health
                        </a>
                      </li>
                      <li className="block w-full font-bold p-[10px_15px] border-b-[#eee] border-b-[1px]">
                        <a href="#" className="">
                          Shopping
                        </a>
                      </li>
                      <li className="block w-full font-bold p-[10px_15px] border-b-[#eee] border-b-[1px]">
                        <a href="#" className="">
                          Travel
                        </a>
                      </li>
                      <li className="block w-full font-bold p-[10px_15px] border-b-[#eee] border-b-[1px]">
                        <a href="#" className="">
                          Food
                        </a>
                      </li>
                      <li className="block w-full font-bold p-[10px_15px] border-b-[#eee] border-b-[1px]">
                        <a href="#" className="">
                          Featured
                        </a>
                      </li>
                      <li className="block w-full font-bold p-[10px_15px] border-b-[#eee] border-b-[1px]">
                        <a href="#" className="">
                        D2H Plans
                        </a>
                      </li>
                      <li className="block w-full font-bold p-[10px_15px] border-b-[#eee] border-b-[1px]">
                        <a href="#" className="">
                        Contact
                        </a>
                      </li>
                     
                    </ul>
                    
                  </div>
                  <div className="text-center">
                    <button
                      className="text-[30px] w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center shadow-[0_5px_23px_rgba(188,207,219,.35)] mx-auto mt-[10px]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <IoClose />
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Indulge_header;
