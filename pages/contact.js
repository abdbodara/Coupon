import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import map from "../public/Assets/Images/contact-map.jpg";
import Subscribe from "./deals/Subscribe";
import { useCreateContactMutation } from "../app/api";

const Contact = () => {
  const [data, setData] = useState({
    Fullname: "",
    Email: "",
    Select: "",
    Contact: "",
    Message: "",
  });
  const [createContact, { isLoading }] = useCreateContactMutation();

  const inputHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContact(data);
    } catch (error) {
      console.log("error-------------->", error);
    }
  };

  return (
    <div>
      <div className="contact_bg mt-[14px] md:h-[650px] h-[520px] md:mb-[220px] sm:mb-[600px] mb-[680px]">
        <div className="lg:max-w-[1140px] sm:max-w-[720px] max-w-[540px] mx-auto px-[12px]">
          <div>
            <div className="text-white flex items-center text-[14px] mb-2 p-[8px_0_0_40px]">
              <Link href="/" className="opacity-70 hover:opacity-100">
                Home
              </Link>
              <span className="px-[4px]">/</span>
              <p>About GrabOn</p>
            </div>
            <div className="md:m-[76px_0_42px] m-[32px_0] relative after:absolute after:bottom-0 after:w-full after:max-w-[140px] after:bg-white after:h-[2px] after:opacity-30 text-white md:pb-0 pb-[10px]">
              <h1 className="md:text-[45px] text-[36px] font-bold leading-[45px]">
                Write To Us
              </h1>
              <p className="md:text-[18px] text-[16px] font-bold md:leading-[44px] leading-[32px]">
                Want to partner with us? Got any coupon related issue? Reach us
              </p>
            </div>
          </div>
          <div className="md:flex items-start shadow-[0_11px_33px_0_rgba(43,75,115,.12)] md:mt-[100px] mt-[40px]">
            <div className="md:w-[65%] w-full lg:p-[42px_42px_33px_42px] p-[24px] bg-white rounded-[4px_0_0_4px]">
              <h1 className="text-[#575757] text-[24px] font-medium mb-[12px]">
                Send Us a Message
              </h1>
              <p className="text-[14px]">
                You can mail us at
                <a href="#" className="text-[#5eaef5]">
                  contact@grabon.in
                </a>
                <br /> Or, drop in a message below & we will get back to you in
                a jiffy.
              </p>
              <div className="mt-[50px]">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-x-[30px] ">
                    <div className="floatingLabelGroup">
                      <input
                        type="text"
                        name="Fullname"
                        id="Fullname"
                        value={data.Fullname}
                        className="border-b-[#57575780] border-b-[1px] p-2 outline-none text-[#b4b4b4] bg-white text-[12px] w-full h-[38px]"
                        autoComplete="off"
                        autoFocus
                        required
                        onChange={inputHandler}
                      />
                      <label className="floatingLabel">Your Full Name</label>
                    </div>
                    <div className="floatingLabelGroup">
                      <input
                        type="text"
                        id="Email"
                        name="Email"
                        value={data.Email}
                        className="border-b-[#57575780] border-b-[1px] p-2 outline-none text-[#b4b4b4] bg-white text-[12px] w-full h-[38px]"
                        autoComplete="off"
                        autoFocus
                        required
                        onChange={inputHandler}
                      />
                      <label className="floatingLabel">Your Email ID</label>
                    </div>
                    <div className="floatingLabelGroup">
                      <select
                        name="Select"
                        value={data.Select}
                        onChange={inputHandler}
                        className="border-b-[#57575780] border-b-[1px] p-2 outline-none text-[#b4b4b4] bg-white text-[12px] w-full h-[38px]"
                      >
                        <option>Cricket Fantasy (Campaigns)</option>
                        <option>Business</option>
                        <option>Problem with a Coupon</option>
                        <option>Site Feedback</option>
                        <option>General Question</option>
                        <option>Others</option>
                      </select>
                    </div>

                    <div className="floatingLabelGroup">
                      <input
                        type="number"
                        id="number"
                        name="Contact"
                        value={data.Contact}
                        className="border-b-[#57575780] border-b-[1px] p-2 outline-none text-[#b4b4b4] bg-white text-[12px] w-full h-[38px]"
                        autoComplete="off"
                        autoFocus
                        required
                        onChange={inputHandler}
                      />
                      <label className="floatingLabel">Contact Number</label>
                    </div>
                  </div>
                  <div className="floating-label-group">
                    <textarea
                      className="border-b-[#57575780] border-b-[1px] p-2 outline-none text-[#b4b4b4] bg-white text-[12px] w-full h-[38px] resize-none"
                      id="Message"
                      name="Message"
                      value={data.Message}
                      required
                      onChange={inputHandler}
                    ></textarea>
                    <label className="floating-label">Message</label>
                  </div>

                  <button className="bg-[#5eaef5] w-[160px] p-[10px_40px] text-[16px] font-semibold text-white mt-[36px] rounded-[20px]">
                    {isLoading ? "Submiting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
            <div className="md:w-[35%] w-full bg-[#233240] rounded-[0_4px_4px_0] text-white">
              <div className="w-full h-full relative after:w-full after:h-full after:absolute after:bg-[#23324099] after:left-0 after:top-0 after:content-['']">
                <Image
                  src={map}
                  alt="map"
                  className="w-full h-[224px] object-cover"
                />
              </div>
              <div className="lg:p-[24px] p-[16px] text-[14px]">
                <h1 className="font-bold lg:mb-[24px] mb-[16px]">
                  Corporate Address:
                </h1>
                <address className="italic lg:mb-[24px] mb-[16px]">
                  GrabOn, <br /> Inspirelabs Solutions Pvt Ltd, <br /> 21st
                  Floor, <br /> OneWest Building, Financial District, <br />
                  Gachibowli, <br /> Hyderabad, TS, 500032 <br />
                </address>
                <div className="flex gap-[48px]">
                  <p>See On Map</p>
                  <p>get directions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default Contact;

// const clickHandler = async (e) => {
//   try {
//     e.preventDefault();
//     const token = JSON.parse(localStorage.getItem("user"));
//     const datas = await axios
//       .post("http://localhost:3000/api/contact", data, {
//         headers: {
//           Authorization: `Bearer ${token.token}`,
//         },
//       })
//       .then((res) => {
//         return res;
//       });
//   } catch (error) {
//     console.log("error hai------------->", error);
//   }
// };
