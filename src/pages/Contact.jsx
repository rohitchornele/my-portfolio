import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import ContactBlock from "../components/ContactBlock";
import { IoCallOutline,IoLocationSharp } from "react-icons/io5";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

function Contact() {
  return (
    <>
      <div className="bg-[#34353a] w-full pb-10" id="contact">
        <div className="shadow-lg shadow-gray-800/80">
        <div className="flex flex-col lg:flex-row  lg:py-10 justify-center lg:justify-between items-center">
          <div className="hidden lg:block h-1 w-[37%] bg-[#fdc76b]"></div>
          <h1 className="text-5xl lg:text-6xl text-white font-bold p-1">
            Contact Me
          </h1>
          <div className="hidden lg:block  h-1 w-[37%] bg-[#fdc76b]"></div>
        </div>
        <div className="flex justify-center items-center gap-10 lg:py-10 pt-8 lg:px-56 flex-wrap">
          <ContactBlock
          icon={<HiOutlineMail className="lg:text-3xl text-xl cursor-pointer text-white" />}
          contactDetails={"rohitchornele@gmail.com"}
          />
          <ContactBlock 
          icon={<IoCallOutline className="lg:text-3xl text-xl cursor-pointer text-white" />}
          contactDetails={"+91 7000234217"}
          />
          <ContactBlock
          icon={<IoLocationSharp className="lg:text-3xl text-xl cursor-pointer text-white" />}
          contactDetails={"Nagpur, Maharashtra, India"}
          />
          
        </div>
        <div className="flex flex-col lg:py-10 py-10 lg:flex-row justify-center lg:justify-between items-center">
          <div className="hidden lg:block h-1 w-[37%] bg-[#fdc76b]"></div>
          <div className="socials flex gap-7 text-white">
             {/* <FaFacebook className="text-3xl" /> */}
             <a href="https://wa.me/7000234217" target="_blank">
              <FaWhatsapp className="text-4xl cursor-pointer" />
            </a>
            <a href="https://github.com/rohitchornele" target="_blank">
              <FaGithub className="text-4xl cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/rohit-chornele/" target="_blank">
              <FaLinkedin className="text-4xl cursor-pointer" />
            </a>
            <a href="https://x.com/RohitChornele" target="_blank">
              <FaTwitter className="text-4xl cursor-pointer"/>
            </a>
          </div>
          <div className="hidden lg:block  h-1 w-[37%] bg-[#fdc76b]"></div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
