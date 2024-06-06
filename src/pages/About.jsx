import React from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import { GoHorizontalRule } from "react-icons/go";

const aboutText = [
  {
    summary: "As a passionate software developer with two years of experience, I have honed my skills in designing, developing, and maintaining high-quality applications. My expertise spans across various programming languages, including Java, JavaScript, and MERN stack technologies, I also have a strong foundation in both front-end and back-end development. I thrive in collaborative environments, leveraging my problem-solving abilities and attention to detail to contribute effectively to team projects. My experience includes working on diverse projects, from web applications to mobile apps, ensuring they meet client requirements and exceed user expectations. I am continuously seeking opportunities to learn new technologies and improve my craft, driven by a genuine love for coding and a commitment to delivering exceptional software solutions."
  }
]

function About() {
  return (
    <>
    <div className="bg-[#34353a] w-full py-10" id='about'>
      <div className=" shadow-lg shadow-gray-800/80 w-full lg:px-28 px-10 lg:py-20">
        <h1 className='text-5xl lg:text-6xl text-white font-bold p-1 text-center'>About</h1>
        <div className="flex text-white gap-5 lg:p-5 p-2">
            <div className="hidden lg:block left w-[20%] border-t-4 mt-2 border-[#fdc76b]"></div>
            <div className="right flex justify-center items-center text-xl leading-9 tracking-wide text-justify">
              {aboutText.map((data) => <p>{data.summary}</p>)}
              </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default About