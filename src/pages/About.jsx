import React from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import { GoHorizontalRule } from "react-icons/go";

function About() {
  return (
    <>
    <div className="bg-[#34353a] w-full py-10" id='about'>
      <div className=" shadow-lg shadow-gray-800/80 w-full lg:px-28 px-10 lg:py-20">
        <h1 className='text-5xl lg:text-6xl text-white font-bold p-1 text-center'>About</h1>
        <div className="flex text-white gap-5 lg:p-5 p-2">
            <div className="hidden lg:block left w-[20%] border-t-4 mt-2 border-[#fdc76b]"></div>
            <div className="right flex justify-center items-center text-xl"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti doloremque voluptates laborum commodi ad quas, placeat odio debitis earum, vitae neque nesciunt, ea rerum consectetur nostrum blanditiis cupiditate velit exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia eveniet porro ipsam. Quos eveniet veniam necessitatibus est libero nulla.</p></div>
        </div>
        </div>
    </div>
    </>
  )
}

export default About