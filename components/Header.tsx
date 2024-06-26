import React from "react";
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";
import Head from "next/head";

function Header() {
  const [active, setActive] = React.useState(0);
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <>
    <div className="absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <Head>
        <title>Cool Project</title>
      </Head>
      <div className="flex items-center gap-2 font-medium tracking-[4px]">
        <IoIosGlobe className="text-xl" />
        Car Hire In Ahmedabad
      </div>
      {/* <div className="flex items-center gap-6 md:hidden">
        <IoMdSearch className="text-lg" />
        <IoMdPerson className="text-lg" />
      </div> */}
      <ul className={`flex flex-wrap items-center gap-3 text-[11px] md:gap-10 `}>
        {menus.map((menu, index) => {
          return (
            <motion.li
              layout
              key={index}
              className={`${
                active == index && "border-b-2 border-b-yellow-500"
              } inline-block cursor-pointer border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
            >
              {menu}
            </motion.li>
          );
        })}
      </ul>
      {/* <div className="hidden md:flex items-center gap-6">
        <IoMdSearch className="text-lg" />
        <IoMdPerson className="text-lg" />
      </div> */}
    </div>
    </>
  );
}

export default Header;

const menus = [
  "Home",
  "Services",
  "Pricing",
  "About",
  "Contact",
];
