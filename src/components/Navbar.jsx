import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scrolling down, hide the navbar
        setShow(false);
      } else {
        // if scrolling up, show the navbar
        setShow(true);
      }

      // remember the current page location for the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <nav className="">
        <div
          className={`w-full z-50 fixed  bg-[#fdc76b]  lg:py-2 lg:px-24 text-[#34353a] font-bold transition-transform duration-300 transform ${
            show ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center">
            <div className="p-1 px-3">
              <a href="/" className="gap-1 font-bold items-center">
                <img
                  className="h-12 bg-[#34353a] rounded-full"
                  src={logo}
                  alt=""
                />
              </a>
            </div>
            {/* Primary menu and logo */}
            <div className="">
              <div className="hidden lg:flex justify-between gap-10">
                {/* <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/portfolio"}>Portfolio</Link>
                <Link to={"/contact"}>Contact</Link> */}

                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#experiences">Experiences</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            <div className="hidden lg:block">
              <button className="bg-blue-800 rounded-md px-4 py-2 text-white">
               <a href="https://www.linkedin.com/in/rohit-chornele/" target="_blank"> Hire Me</a>
              </button>
            </div>

            {/* secondary */}
            <div className="lg:hidden flex justify-between">
              <div className="hidden xs:flex items-center ">
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center px-5">
                <button
                  className="h-6 text-black"
                  onClick={() => setToggleMenu(!toggleMenu)}
                >
                  <IoMenu />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" className="pt-16"  onClick={() => setToggleMenu(!toggleMenu)}>
                Home
              </a>
              <a href="#about"  onClick={() => setToggleMenu(!toggleMenu)}>About</a>
              <a href="#skills"  onClick={() => setToggleMenu(!toggleMenu)}>Skills</a>
              <a href="#experiences"  onClick={() => setToggleMenu(!toggleMenu)}>Experiences</a>
              <a href="#portfolio"  onClick={() => setToggleMenu(!toggleMenu)}>Portfolio</a>
              <a href="#contact"  onClick={() => setToggleMenu(!toggleMenu)}>Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
