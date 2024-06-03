import React from 'react'
import { HiOutlineMail } from "react-icons/hi";

function ContactBlock({icon, contactDetails}) {
  return (
    <>
            <div className="flex gap-4 items-center justify-center bg-[#343531] px-5 lg:px-10 py-5 rounded-md">
              <span className="">
                {icon}{" "}
                {/* {icon} */}
              </span>
              <span className="text-xl text-[#fdc76b]">{contactDetails}</span>
            </div>
            
    </>
  )
}

export default ContactBlock