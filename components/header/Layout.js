import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "../footer/Footer";
import { useRouter } from "next/router";
import { BsChevronDown } from "react-icons/bs";

const Layout = ({ children }) => {
  const router = useRouter();

  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {router.pathname === "/indulge" ||
      router.pathname === "/coupon_code/[id]" ||
      router.pathname === "/coupon_codes/[id]" ? (
        ""
      ) : (
        <Header />
      )}
      {children}
      {showScrollButton && (
        <a
          onClick={scrollToTop}
          className="bg-[#5eaef5] w-[50px] h-[50px] cursor-pointer shadow-[0_3px_10px_rgba(0,0,0,.5)] fixed top-[50%] translate-y-[-50%] right-0 flex justify-center items-center text-white text-[24px] rotate-180"
        >
          <BsChevronDown />
        </a>
      )}
      {router.pathname === "/indulge" ||
      router.pathname === "/coupon_code/[id]" ||
      router.pathname === "/coupon_codes/[id]" ? (
        ""
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default Layout;
