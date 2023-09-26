import Image from "next/image";
import React, { useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
const tabs = [
  { name: "Details on Dell", href: "#", current: false },
  { name: "How To Use Dell Coupons", href: "#", current: false },
  { name: "Dell Customer Care", href: "#", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ProductDetail = () => {
  const [tabSelect, setTabSelect] = useState(1);
  return (
    <div className="mt-[42px] overflow-hidden bg-white border border-[#d6d8da] rounded-[8px] lg:border-[#3e65a9] lg:border-t-[2px]">
      <div className="hidden lg:grid grid-cols-3 text-center">
        {tabs.map((tab, index) => (
          <span
            key={tab.name}
            onClick={() => setTabSelect(index + 1)}
            className={classNames(
              tabSelect === index + 1
                ? "bg-white text-black  text-[16px] font-medium"
                : "bg-[#3e65a9] text-white text-[14px] font-normal",
              " p-[12px] leading-[20px] hover:after:top-0 after:transition-all after:duration-200 relative after:content-[''] after:absolute after:bg-[#123561] after:h-[6px] after:rounded-full after:w-full after:left-0 after:top-[-6px] after:block cursor-pointer"
            )}
            aria-current={tab.current ? "page" : undefined}
          >
            {tab.name}
          </span>
        ))}
      </div>
      <div className="bg-white lg:p-[24px]">
        <p
          onClick={() => setTabSelect(1)}
          className={classNames(
            tabSelect === 1
              ? " bg-[#3e65a9] text-white text-[14px] font-normal"
              : "bg-white border-b border-[#d6d8da] text-[#16171a] text-[14px] font-normal",
            " p-[12px] leading-[20px] lg:hidden flex items-center justify-between cursor-pointer"
          )}
        >
          Details on Dell <BiSolidUpArrow  className={tabSelect === 1 ? " text-[10px]" : "text-[10px] rotate-180"} />
        </p>
        <div className={`${tabSelect === 1 ? "block" : "hidden"} p-[12px] lg:p-0`} data-id="1">
          <h2 className="text-[#373737] font-[700] text-[16px] leading-[24px] m-[0_auto_12px]">
            Latest Dell India Laptop Coupons, Offers &amp; Discount Codes
          </h2>
          <table className="table w-full table-bordered">
            <thead>
              <tr>
                <th className="p-[8px] text-[14px] text-left leading-[18px]">
                  Dell Laptop Offers
                </th>
                <th className="p-[8px]  text-[14px] text-left leading-[18px]">
                  Dell Discount Coupon Code
                </th>
                <th className="p-[8px]  text-[14px] text-left leading-[18px]">
                  Validity
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Dell Coupon Code
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Up To Rs 24,882 OFF
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  All Users
                </td>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Dell India Coupons
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Inspiron Laptops - Up To Rs 20,000 OFF
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  All Users
                </td>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Dell Promo Code
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Desktops - Up To Rs 12,000 OFF
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  All Users
                </td>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Dell Discount Coupons
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Up To Rs 12,000 OFF On Student Laptops
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  All Users
                </td>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Dell Accessories Coupon
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Up To 30% OFF
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  All Users
                </td>
              </tr>
            </tbody>
          </table>
          <figure className="m-[1em_40px]">
            <Image
              width={720}
              height={360}
              alt="Dell Coupon Code"
              className="max-w-[720px] mx-auto max-h-[360px] w-full h-full"
              src="/Assets/Images/dell-india-coupon-code.jpg"
            />
            <span className="text-[#16171a] block text-center text-[14px]">
              Flat Rs 10000 OFF On Laptops
            </span>
          </figure>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            Special Offers, Discounts, Deals On GrabOn
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Be rest assured to find the offers you’re looking for on GrabOn,
            India’s leading coupons and deals platform. Browse through your
            favourite Dell products and avail the seasonal deals right here
            using the latest coupons and vouchers. Apart from this, get cashback
            up to 10% and an instant discount on UPI/net banking. Millions of
            Indians have saved Millions of rupees here, be next. Make the most
            of it.
          </p>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            About Dell
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Dell started as a computer company in 1984 in a dorm room at the
            University of Texas, and went on to become a key leader in the
            global tech industry. With its ambitious innovations and
            advancements, Dell spread its wings across the universe in a short
            period to create a better world and became the go-to option for
            electronic gadgets across the globe. It houses a workforce of almost
            2 lakh to provide easy access to the best technology globally.
            Laptops, desktops, gaming systems, monitors, workstations, storage,
            drives, servers and everything you would ever need are provided at
            discounted prices.
          </p>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            List of Dell Products &amp; Popular Deals
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Dell has a wide range of products and here we are with a list of
            some top products to help you make the right decision, while you
            plan on buying one.
          </p>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            <strong className="text-[#373737] text-bold">Dell Laptops</strong>:
            Planning to bring home a laptop of your choice? We’ve got this
            covered for you. You can opt for Vostro Laptops, Latitude Laptops,
            Dell Precision Mobile Workstations, and Inspiron Laptops. XPS
            Ultrabook and Inspiron 2-in-1 Laptops are also preferred under this
            category.
          </p>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            Best Laptop Deals
          </h3>
          <table className="table w-full table-bordered">
            <tbody>
              <tr>
                <th className="p-[8px] text-[14px] text-left leading-[18px]">
                  Laptop Model
                </th>
                <th className="p-[8px] text-[14px] text-left leading-[18px]">
                  Price Starting At
                </th>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Inspiron Laptops
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  ₹38,490
                </td>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Vostro Laptops
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  ₹ 34,989.99
                </td>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  XPS Laptops
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  ₹ 1,27,490.00
                </td>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Inspiron 2-in-1 Laptops
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  ₹ 52,990.00
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            <strong className="text-[#373737] text-bold">
              Dell Gaming Laptops
            </strong>
            : Gaming laptops possess powerful components, are durable and built
            to provide cutting-edge speed and performance. The advantage is that
            it works as a normal computer too. If you are the one planning to
            purchase this, G Series Gaming Laptop and Alienware Laptops by Dell
            are the best buy deals on any given day.
          </p>
          <table className="table w-full table-bordered">
            <tbody>
              <tr>
                <th className="p-[8px] text-[14px] text-left leading-[18px]">
                  Laptop Model
                </th>
                <th className="p-[8px] text-[14px] text-left leading-[18px]">
                  Price Starting At
                </th>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  G Series Gaming Laptops
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  ₹ 71,490.00
                </td>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Alienware Laptops
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  ₹1,54,490.00
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            <strong className="text-[#373737] text-bold">Dell Desktops</strong>:
            You can find great desktop collections at Dell. To help you get the
            best one, here are a few products you should be aware of - Inspiron,
            Vostro - Small &amp; Compact, OptiPlex - Micro, Ultra, including the
            New OptiPlex Tower Desktops should be on your mind, while buying
            one.
          </p>
          <table className="table w-full table-bordered">
            <tbody>
              <tr>
                <th className="p-[8px] text-[14px] text-left leading-[18px]">
                  Desktop Model
                </th>
                <th className="p-[8px] text-[14px] text-left leading-[18px]">
                  Price Starting At
                </th>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Inspiron Desktops
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  ₹ 48,989.99
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            <strong className="text-[#373737] text-bold">
              Dell Workstations
            </strong>
            : Workstations are high-performing computer systems that have
            advanced graphics capabilities and large storage capacity. They also
            have a powerful central processing unit for superior performance.
            Precision Mobile Workstations, Wyse Thin Clients and Software, New
            Precision Tower Workstation, and Small Form Factor Workstation by
            Dell are a few to name.
          </p>
          <p className="text-[#373737] leading-[22px] text-[14px] mb-[12px]">
            <strong>Dell Servers</strong>:
          </p>
          <ul className="text-[#373737] mb-[24px] text-[14px] list-inside leading-[22px] list-decimal">
            <li>PowerEdge Tower Server</li> <li>PowerEdge Rack Server</li>
          </ul>
          <p className="text-[#373737] leading-[22px] text-[14px] mb-[12px]">
            <strong>Dell Storage</strong>:
          </p>
          <ul className="text-[#373737] mb-[24px] text-[14px] list-inside leading-[22px] list-decimal">
            <li>PowerEdge Tower Server</li> <li>PowerEdge Rack Server</li>
          </ul>
          <p className="text-[#373737] leading-[22px] text-[14px] mb-[12px]">
            <strong>Dell Networking</strong>:
          </p>
          <ul className="text-[#373737] mb-[24px] text-[14px] list-inside leading-[22px] list-decimal">
            <li>M-Series Blade</li>
            <li>PowerSwitch Managed Campus</li>
            <li>PowerSwitch Data Center Switches</li>
            <li>MX Switching Modules</li>
          </ul>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            Dell Monitors
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Dell offers a wide range of collections on monitors you can choose
            from. You can check out the list and pick one as per your needs.
            Gaming Monitors, UltraSharp Monitors, Ultra-High-Definition (UHD)
            Monitors, Curved Monitors, C Series, P Series, E Series, S Series.
          </p>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            For those searching for monitor accessories or stands, can go
            through this list:
          </p>
          <ul className="text-[#373737] mb-[24px] text-[14px] list-inside leading-[22px] list-decimal">
            <li>Dell Performance Dock</li> <li>Dell Docking Station</li>
            <li>Dell Docking Station USB</li> <li>Dell Universal Dock</li>
            <li>Dell Single/Dual Monitor Arm</li>
            <li>Dell Micro All-In-One Stand</li>
          </ul>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            <strong className="text-[#373737] text-bold">
              Electronics &amp; Accessories
            </strong>
            : Dell has a house of electronics and accessories one can opt for.
            From monitors, audio, and docking stations to keyboards and mice
            (mouse), additional power supply ports, adapters to batteries,
            internal and external hard drives, projectors, and carrying cases,
            Dell has got everything you would ever want.
          </p>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            Dell - Money Saving Tips and Tricks
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            <strong className="text-[#373737] text-bold">
              Exclusive Deals
            </strong>
            : Head to the official website and click on the “Deals” category to
            view the available offers on laptop and desktop models that can be
            used for home or office purposes.
          </p>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            <strong className="text-[#373737] text-bold">
              Employee Discounts
            </strong>
            : Save up to Rs 10,000 on select laptops, desktops, and other
            accessories by choosing the Corporate Employee Purchase Program.
          </p>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            <b className="text-[#373737] text-bold">
              Buy a Dell product with a trade-in offer:
            </b>
            Dell often offers trade-in offers on its products. This means that
            you can trade in your old computer for a discount on a new one.
          </p>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            <strong className="text-[#373737] text-bold">
              Student Discounts
            </strong>
            : If you are a student, sign up and get an instant offer of up to Rs
            5000 on desired laptop models.
          </p>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            <strong className="text-[#373737] text-bold">
              Social Media Connect
            </strong>
            : Know more about the latest product offerings from Dell and
            exclusive deals by subscribing to social media channels - Facebook,
            Instagram, and Twitter.
          </p>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            <b className="text-[#373737] text-bold">Instant Discount Deals</b>:
            One can get instant cashback, and discounts on purchases made at
            Dell. This offer is applicable to transactions made through Net
            banking.
          </p>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            <b className="text-[#373737] text-bold">
              Shop during Dell{"'"}s sales events
            </b>
            : Dell often holds sales events, such as Black Friday and Cyber
            Monday. These events are a great time to buy Dell products at a
            discount.
          </p>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            The Dell Advantage
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Why Dell? Apart from its powerful devices at affordable rates, it
            has unmatched customer service, extended warranties, instant online
            solutions, laptop deals, etc. They also have a plethora of business
            solutions as well. So, the question isn{"'"}t {"Why Dell?"}. It is
            {"Why not Dell?"}. Just visit Dell.com and choose from the wide
            variety of products on display. You can search and select
            specifications and configurations to find the best match for
            yourself.
          </p>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Dell laptops are of good quality and the company also has great
            customer service. But if they seem expensive to you, you should also
            look at the
            <a
              className="text-[#519cde] underline"
              href="https://www.grabon.in/lenovo-coupons/"
            >
              Lenovo
            </a>
            collection where you can save on ordering laptops. However, if you
            need accessories like printers and ink, give no thought and just
            head over to HP Shopping and buy some quality products using
            <a
              className="text-[#519cde] underline"
              href="https://www.grabon.in/hpshopping-coupons/"
            >
              HP Discount Code
            </a>
            from GrabOn.
          </p>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            Return Policy
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            You have the liberty to return your product within Due to any
            unwanted situation, if you feel the urge to return your products,
            you have the liberty to do so within 30 days from the date of
            receiving it. You just need to contact their support team and follow
            the simple instructions, and the rest will be taken care of.
          </p>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            Customer Support
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            At Dell, their dedicated customer support team is available on 1800
            425 2067 to help you with any of your queries or concerns. You can
            call them anytime and get personalized solutions for your Dell
            products. Whether it’s a hardware problem, a software issue, a
            warranty claim, or a product upgrade, they have you covered.
          </p>
          <h2 className="text-[16px] text-[#373737] font-bold mb-[12px]">
            FAQs
          </h2>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            Does Dell offer a discount?
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Yes, there are plenty of discounts that you can get on Dell. You can
            get discounts on student laptop deals, desktop deals, and more.
            There are many newly launched deals that you can check out. To know
            the discounts, navigate to the Deals section on the Dell website.
            Now pick the one that fits your budget and make a purchase online.
          </p>
          <h4 className="text-[14px] text-[#16171a] font-bold my-[18.38px]">
            Is there a student offer at Dell?
          </h4>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Yes, students can save flat Rs.11500 and extra Rs.5000 on select
            laptop models under the back-to-college offer at Dell.
          </p>
          <h4 className="text-[14px] text-[#16171a] font-bold my-[18.38px]">
            Can I use a Dell offer code to save additional discounts?
          </h4>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Absolutely! You will save up to 20% along with an extra Rs.1000
            Inspiration laptops at Dell by using a working promo code at the
            checkout page.
          </p>
          <h4 className="text-[14px] text-[#16171a] font-bold my-[18.38px]">
            Does Dell accept coupon codes on their bundle offers?
          </h4>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Absolutely! Along with a discount of up to 57%, you can make an
            additional savings of Rs.4000 as a bundle deal on their
            workstations.
          </p>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            Where can I get a coupon code for my Dell laptop?
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            If you are eager to purchase a Dell laptop and have no idea where to
            look for coupons, check out the GrabOn Dell Coupons page. You will
            be flourished with the list of coupons and deals to get benefitted.
          </p>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            How do I use a Dell promo code?
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Follow the steps given below to apply a coupon code on the Dell
            website for purchasing a laptop.
          </p>
          <ul className="text-[#373737] mb-[24px] text-[14px] list-inside leading-[22px] list-decimal">
            <li>Open the official Dell website.</li>
            <li>
              Select the model, click on the {"Add to Cart"} and then
              {"Proceed"}
              buttons.
            </li>
            <li>
              On the Cart page, enter the coupon and click on the
              {"Apply Coupon"}button.
            </li>
            <li>
              You can avail of the max. discount and save money using Dell promo
              codes.
            </li>
          </ul>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            How much do I save on Dell with laptop offers?
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Check out the table below to know how much you can save on
            purchasing a laptop with offers from Dell.
          </p>
          <table className="table w-full table-bordered">
            <tbody>
              <tr>
                <th className="p-[8px] text-[14px] text-left leading-[18px]">
                  Type of Deals
                </th>
                <th className="p-[8px] text-[14px] text-left leading-[18px]">
                  Save Percentage
                </th>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Newly Launched Deals
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  14%
                </td>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Laptop Deals
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  12%
                </td>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Affordable Deals
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  17%
                </td>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Thin &amp; Light Laptop Deals
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  14%
                </td>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  Gaming Laptop Deals
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  12%
                </td>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  2-in-1 Laptop Deals
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  13%
                </td>
              </tr>
              <tr>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  XPS Laptop Deals
                </td>
                <td className="p-[8px] text-[14px] text-left leading-[18px]">
                  9%
                </td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            Are there Dell promo codes for students?
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Nope! Dell is not offering any promo codes for students as of now.
            But the students who wish to pursue higher studies can get exclusive
            laptop deals and save a maximum of 16% on Dell products.
          </p>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            Can I get a Dell product delivered to my home?
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Yes, you can order laptops and other products online and get them
            delivered to your doorstep. There is a wide range of Dell products
            available on the website for you to choose from. To save more on
            your purchase, you can use the best Dell coupons.
          </p>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            How can I return a Dell laptop?
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            If you are not satisfied with Dell laptops or have received a
            damaged product (which is next to impossible), you can return it
            within 30 days. Ship your product back within 30 days from the date
            of delivery. Don’t forget to attach the invoice and tags to the
            return shipment. The company offers free return shipping on all
            products.
          </p>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            Can I get Dell services at home?
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Yes, you can avail of the best services for home from Dell in case
            your laptops or other products need servicing. You can check the for
            more details.
          </p>
          <span className="mReadMore hidden-lg">Read More</span>
        </div>
        <p
          onClick={() => setTabSelect(2)}
          className={classNames(
            tabSelect === 2
              ? " bg-[#3e65a9] text-white text-[14px] font-normal"
              : "bg-white border-y border-[#d6d8da]  text-[#16171a] text-[14px] font-normal",
            " p-[12px] leading-[20px]  flex lg:hidden items-center justify-between cursor-pointer"
          )}
        >
         How To Use Dell Coupons <BiSolidUpArrow className={tabSelect === 2 ? " text-[10px]" : "text-[10px] rotate-180"} />
        </p>
        <div className={`${tabSelect === 2 ? "block" : "hidden"} p-[12px] lg:p-0`} data-id="2">
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            Saving on Dell products
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            A few tips to help you save big on whatever you purchase on Dell:
          </p>
          <ul className="text-[#373737] mb-[24px] text-[14px] list-inside leading-[22px] list-decimal">
            <li>
              If possible, wait till a sale comes up where you can get big
              discounts.
            </li>
            <li>
              Check other sellers to see if they are providing that particular
              product for a lower price.
            </li>
            <li>
              Look for coupons and deals on GrabOn. You will certainly find
              handy discounts on Dell products here.
            </li>
          </ul>
          <h3 className="text-[16.38px] text-[#16171a] font-bold my-[16.38px]">
            Using Coupons at GrabOn.
          </h3>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            Here are a few things that you need to do in order to take advantage
            of GrabOn’s coupons on Dell:
          </p>
          <ol className="text-[#373737] mb-[24px] text-[14px] list-inside leading-[22px] list-decimal">
            <li>
              <p className="inline">
                Go to www.grabon.in and type ‘Dell’ in the search bar. You will
                be taken to the Dell offers page where you can browse through
                the list of coupons and deals.
              </p>
            </li>
            <li>
              <p className="inline">
                Choose a coupon that you want to use while shopping at Dell.
                Click on ‘Show Coupon Code’.
              </p>
              <figure className="m-[1em_40px]">
                <Image
                  alt="img"
                  width={700}
                  height={373}
                  className="max-w-[700px] mx-auto max-h-[373px] w-full h-full"
                  src="/Assets/Images/dell-coupon-code.jpg"
                />
              </figure>
            </li>
            <li>
              <p className="inline">
                Click on the ‘Copy Code’ button. Your coupon will be copied to
                the clipboard and you will be redirected to Dell’s website.
              </p>
              <figure className="m-[1em_40px]">
                <Image
                  alt="img"
                  width={700}
                  height={373}
                  className="max-w-[700px] mx-auto max-h-[373px] w-full h-full"
                  src="/Assets/Images/dell-offers.jpg"
                />
              </figure>
            </li>
            <li>
              <p className="inline">
                Once you’re at the Dell website, select the laptop/PC accessory
                that you wish to purchase and add it to the cart. During
                checkout, you will be given the option of entering a coupon.
              </p>
            </li>
            <li>
              <p className="inline">
                Paste the copied code in the box provided.
              </p>
              <figure className="m-[1em_40px]">
                <Image
                  alt="img"
                  width={700}
                  height={373}
                  className="max-w-[700px] mx-auto max-h-[373px] w-full h-full"
                  src="/Assets/Images/dell-discount-code.jpg"
                />
              </figure>
            </li>
            <li>
              <p className="inline">
                The coupon will be applied successfully to your order and the
                discounted price will appear on the screen.
              </p>
              <figure className="m-[1em_40px]">
                <Image
                  alt="img"
                  width={700}
                  height={373}
                  className="max-w-[700px] mx-auto max-h-[373px] w-full h-full"
                  src="/Assets/Images/dell-promo-code.jpg"
                />
              </figure>
            </li>
            <li>
              <p className="inline">
                You just have to make the payment then and your Dell order will
                be delivered soon.
              </p>
            </li>
          </ol>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            So, these are a few steps to follow when using GrabOn’s coupons to
            get lucrative discounts on Dell products.
          </p>
        </div>
        <p
          onClick={() => setTabSelect(3)}
          className={classNames(
            tabSelect === 3
              ? " bg-[#3e65a9] text-white text-[14px] font-normal"
              : "bg-white border-y border-[#d6d8da]  text-[#16171a] text-[14px] font-normal",
            " p-[12px] leading-[20px] lg:hidden flex items-center justify-between cursor-pointer"
          )}
        >
          Dell Customer Care <BiSolidUpArrow  className={tabSelect === 3 ? " text-[10px]" : "text-[10px] rotate-180"} />
        </p>
        <div className={`${tabSelect === 3 ? "block" : "hidden"} p-[12px] lg:p-0`} data-id="3">
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            For Customer Service Helpline, call on +91 0800-425-0088
          </p>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            You can also email them on online_India@dell.com
          </p>
          <p className="text-[14px] block leading-[22px] mb-[12px]">
            For further queries visit
            https://www.dell.com/learn/in/en/indhs1/campaigns/contact-us-in-dhs
          </p>
          <span className="mReadMore lg:hidden">Read More</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
