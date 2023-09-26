import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { GrClose } from "react-icons/gr";
import Rating from "react-rating";
import { PiStarThin } from "react-icons/pi";
import { RiStarFill } from "react-icons/ri";
import axios from "axios";

export const RatingModal = (props) => {
  const itemValue = props.data.MerchantId._id;

  const [data, setData] = useState({
    itemId: itemValue,
    value: "",
  });

  const handleStarClick = async (value) => {
    try {
      const newData = { ...data, value };
      const token = JSON.parse(localStorage.getItem("user"));
      const response = await axios.post(
        "http://localhost:3000/api/rating",
        newData,
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      );
      console.log("🚀 ~ file: RatingModal.js:30 ~ handleStarClick ~ response:", response)
      props.setIsOpen(false);
    } catch (error) {
      console.error("Error submitting rating", error.message);
    }
  };

  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#0d254c] bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[520px] transform overflow-hidden rounded-[8px] bg-white p-[58px_0_56px] text-left align-middle shadow-xl transition-all">
                  <button
                    onClick={() => props.setIsOpen(false)}
                    className="absolute top-[20px] outline-none focus:outline-none right-[20px]"
                  >
                    <GrClose />
                  </button>
                  <div>
                    <h1 className="text-[22px] block text-center text-[#575757] mb-[26px]">
                      Rate <strong className="font-bold">Dell</strong>
                    </h1>
                    <div className="flex justify-center items-center">
                      <Rating
                        emptySymbol={
                          <PiStarThin className="text-[42px] ml-[5px] text-[#575757] " />
                        }
                        fullSymbol={
                          <RiStarFill className="text-[42px] text-yellow-400" />
                        }
                        onChange={(value) => handleStarClick(value)}
                      />
                    </div>
                    <div>
                      <p className="text-[#575757] block my-[16px] text-center text-[14px]">
                        Rated 4/5, Out of
                        <span className="go-r-count">48</span>
                        Votes
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
