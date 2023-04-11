import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillBackward } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, value] = useState(false);
  const navM = () => {
    value(!nav);
  };

  window.onscroll = () => {
    let nav = document.body.querySelector(".navbar");
    let bHome = document.body.querySelector(".back");
    let kepala = nav.offsetTop;

    if ((kepala < window.pageYOffset) & (window.pageYOffset > 470)) {
      nav.classList.add("nav-ubah-putih");
      nav.classList.remove("nav-ubah-hitam");
      bHome.classList.add("back-home");
    } else {
      nav.classList.add("nav-ubah-hitam");
      nav.classList.remove("nav-ubah-putih");
      bHome.classList.remove("back-home");
    }
  };

  const keHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar container fixed z-10  flex h-24 max-w-[1240px] items-center justify-between gap-5 border-y-0 p-5  shadow-md sm:max-w-full md:relative md:mix-blend-normal  md:backdrop-blur-0 lg:fixed lg:px-[6.5rem] lg:py-6 lg:opacity-100 lg:shadow-lg lg:brightness-[120%] lg:backdrop-blur-md">
      <h1 className="rounded-[20px] bg-basecolor px-5 py-[6px] text-[16px] font-bold text-green-400 md:rounded-none md:p-0 md:text-3xl lg:bg-transparent ">React App</h1>
      <ul className=" hidden font-sans text-[0.95rem] font-bold text-slate-300 md:flex">
        <li className="px-2 hover:cursor-pointer" onClick={keHome}>
          Home
        </li>
        <li className="px-2 hover:cursor-pointer">
          <Link to="about" spy={true} smooth={true} offset={-50} duration={400}>
            About
          </Link>
        </li>
        <li className="px-2 hover:cursor-pointer">
          <Link to="contacts" spy={true} smooth={true} offset={-90} duration={400}>
            Contact
          </Link>
        </li>
        <li className="px-2 hover:cursor-pointer">
          <Link to="package" spy={true} smooth={true} offset={-90} duration={400}>
            Package
          </Link>
        </li>
        <li className="px-2 hover:cursor-pointer">Project</li>
      </ul>
      <div className=" flex rounded-[10%] bg-basecolor p-3 text-basefont md:hidden md:rounded-none md:p-0" onClick={navM}>
        {!nav ? <AiOutlineMenu size={20} className="  text-slate-300"></AiOutlineMenu> : <AiOutlineClose size={20} />}
      </div>
      <div className={!nav ? "hidden" : "fixed left-0 top-0 z-[9999] h-full  w-[65%] border-r  border-slate-600   bg-basecolor px-5  py-[22px] text-basefont  opacity-[0.89]   duration-700 ease-linear md:hidden"}>
        <h1 className=" pt-2 text-3xl font-bold text-green-400 ">React App</h1>
        <ul className="  pr-5 pt-[50px] text-[0.9rem] uppercase backdrop-blur-md">
          <li className=" border-b py-[13px]" onClick={keHome}>
            Home
          </li>
          <li className=" border-b py-[13px]">
            <Link to="about" spy={true} smooth={true} offset={-95} duration={400}>
              About
            </Link>
          </li>
          <li className=" border-b py-[13px]">
            <Link to="contacts" spy={true} smooth={true} offset={-93} duration={400}>
              Contact
            </Link>
          </li>
          <li className=" border-b py-[13px]">
            <Link to="package" spy={true} smooth={true} offset={-93} duration={400}>
              Package
            </Link>
          </li>
          <li className=" border-b py-[13px]">Project</li>
        </ul>
      </div>

      <button onClick={keHome} className="back absolute -bottom-[65vh] right-7 hidden rounded-[50%] bg-green-500 p-3 text-black lg:p-4 ">
        <AiFillBackward></AiFillBackward>
      </button>
    </div>
  );
};

export default Navbar;
