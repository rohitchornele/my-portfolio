import React from "react";
import { PiLineVerticalLight } from "react-icons/pi";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-[#34353a] w-full lg:pt-0 pt-12">
        <div className="relative shadow-lg shadow-gray-800/80">
          
          <div className="flex lg:flex-row flex-col lg:justify-around justify-center items-center">
            <div className="text-content pt-8 lg:pt-0 text-center lg:text-start ">
              <div className="">
              <h1 className="text-white text-3xl py-1 my-1 flex lg:block flex-col justify-center gap-3">
                {" "}
                I'M{" "}
                <span className="text-[#fdc76b] font-bold lg:text-8xl text-6xl px-5 animate-slidein300 ">
                  {" "} {" "}{" "}
                  Rohit Chornele
                </span>{" "}
              </h1>
              </div>
              <h5 className="text-white text-4xl py-1 my-1">
                Full Stack Developer
              </h5>
              <a href="https://www.linkedin.com/in/rohit-chornele/" target="_blank">
              <button className=" border-4 border-[#fdc76b] py-2 px-4 my-4 rounded-md text-[#fdc76b]">
                Contact Me
              </button>
              </a>
              <a href="https://drive.google.com/file/d/1_YovEIDb1zreRiR_NgaaDRPdXKi6LqtR/view?usp=drive_link" target="_blank" className="ml-4">
              <button className=" border-4 border-[#fdc76b] py-2 px-4 my-4 rounded-md text-[#fdc76b]">
                Download Resume
              </button>
              </a>
            </div>
            <div className="img-content lg:mt-10 flex justify-center">
              <img
                className="lg:w-[82%] w-[80%] pt-10"
                src="https://res.cloudinary.com/dhc6husi2/image/upload/v1717570448/portrait_e3q8qk.png"
                alt=""
              />
            </div>
          </div>
          <div className="lg:absolute right-4 bottom-4 flex lg:flex-col justify-center items-center text-white mx-auto gap-4 py-5 lg:py-0">
            <PiLineVerticalLight className="text-[#fdc76b] text-7xl hidden lg:block" />
            {/* <FaFacebook className="text-3xl" /> */}
            <a href="https://wa.me/7000234217" target="_blank">
              <FaWhatsapp className="text-3xl cursor-pointer" />
            </a>
            <a href="https://github.com/rohitchornele" target="_blank">
              <FaGithub className="text-3xl cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/rohit-chornele/" target="_blank">
              <FaLinkedin className="text-3xl cursor-pointer" />
            </a>
            {/* <a href="https://x.com/RohitChornele" target="_blank">
              <FaTwitter className="text-3xl cursor-pointer"/>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
