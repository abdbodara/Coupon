import React from "react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { PiLinkSimpleThin } from "react-icons/pi";
import { AiFillMail } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import { useSelectedCardContext } from "@/context/createContext";

const DealsPopup = () => {
  const [click, setClick] = useState(false);
  const [copid, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(selectedCardData?.productLink);
    setCopied(true);
  };

  const openInNewTab = (url) => {
    window.open(url);
  };

  const { isOpen, setIsOpen, selectedCardData } = useSelectedCardContext();

  return (
    <div>
      <Transition.Root show={isOpen ? true : false} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative top-[50px] transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                    >
                      <XMarkIcon
                        className="h-6 w-6 cursor-pointer"
                        aria-hidden="true"
                        onClick={() => {
                          setIsOpen(false), setCopied(false);
                        }}
                      />
                    </button>
                  </div>
                  <div className="relative pb-[40px]">
                    <div className="w-[300px] mt-5 inline-block align-middle ml-[36px] border-2 border-[#dfe7ef] rounded h-[300px] leading-[250px] mb-3 mr-auto text-center">
                      <Image
                        src={`/uploads/${selectedCardData?.image}`}
                        alt=""
                        width={100}
                        height={100}
                        className="align-middle max-w-[80%] max-h-[80%] leading-[250px] w-[50%] h-[80%] inline-block"
                      />
                    </div>
                    <div className="w-[calc-(100%_-_380px)] inline-block align-middle ml-[12px] p-3">
                      <p className="text-[16px] mt-0 font-[700] leading-[1.4]"></p>
                      <div className="text-[24px] font-[600] text-[700] text-[#575757]">
                        Rs. {selectedCardData?.price}
                        <del className="font-[400] text-[14px] ml-[18px] text-[#575757]">
                          Rs. {selectedCardData?.oldPrice}
                        </del>
                      </div>
                      <button
                        onClick={() =>
                          openInNewTab(selectedCardData?.productLink)
                        }
                        className="max-w-[272px] py-[14px] px-[95px] w-[272px] font-[400] rounded my-3 mx-auto text-[#fff] bg-[#005198] border-0 inline-block whitespace-nowrap align-middle text-center leading-[normal]"
                      >
                        View Deal
                      </button>
                      <div className="my-2 mx-0 text-[14px]">
                        <strong className="inline-block align-middle mb-1 font-[700] text-[14px]">
                          Share URL
                        </strong>
                        <p className="w-[calc(100%_-_90px)] my-[14px] inline-block ml-3 border-b border-b-[#ccc] py-0 px-0 pb-1">
                          <PiLinkSimpleThin className="-rotate-45 w-[16px] h-[16px] relative inline-block top-0 overflow-hidden text-[#16171A]" />
                          <span className="inline-block w-[calc(100%_-_60px)] text-ellipsis overflow-hidden whitespace-nowrap text-[14px] ">
                            {selectedCardData?.productLink}
                          </span>
                          <button
                            onClick={handleCopy}
                            className="absolute right-0 bg-[0_0] text-[#5eaef5] uppercase font-[500] p-0 rounded-sm inline-block leading-[normal] align-middle text-center"
                          >
                            {copid ? "COPIED" : "COPY"}
                          </button>
                        </p>
                      </div>
                      <div className="my-2 mx-0 text-[14px]">
                        <strong className="inline-block align-middle mb-1 font-[700] text-[14px]">
                          Share via
                        </strong>
                        <ul className="text-left inline-block w-[calc(100%_-_85px)] ml-[18px]">
                          <li className="inline-block text-[14px]">
                            <a
                              href="mailto:demo@demo.com"
                              className="text-[#16171a] inline-block"
                            >
                              <AiFillMail className="w-[20px] h-[20px] inline-block  top-[4px] mr-2 overflow-hidden text-[#ff9e24]" />
                              Email
                            </a>
                          </li>
                          <li className="inline-block ml-3">
                            <Link
                              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.grabon.in%2Fdeals%2F%3F12898"
                              className="text-[#16171a] inline-block text-[14px]"
                            >
                              <RiFacebookFill className="m-0 top-[2px] bg-[#3b5998] rounded-[50%] w-[20px] p-[2px] h-[20px] inline-block  overflow-hidden text-[#fff] mr-2" />
                              Facebook
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-[18px] h-[40px] mb-[-22px] overflow-hidden py-3 px-[36px] absolute bottom-0 left-[-24px] right-[-24px] bg-[#f9f9f9]">
                      <p className="font-[400] text-[14px] relative mt-0">
                        Want to give some feedback?
                        <span className="absolute right-0 top-0 rotate-90 !block">
                          <MdArrowBackIosNew
                            className="text-[#16171A] w-[15px] h-[15px]"
                            onClick={() => setClick(!click)}
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default DealsPopup;
