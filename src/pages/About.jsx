import React from "react";
// import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const aboutText = [
  {
    summary:
      "As a passionate software developer with two years of experience, I have honed my skills in designing, developing, and maintaining high-quality applications. My expertise spans across various programming languages, including Java, JavaScript, and MERN stack technologies, I also have a strong foundation in both front-end and back-end development. I thrive in collaborative environments, leveraging my problem-solving abilities and attention to detail to contribute effectively to team projects. My experience includes working on diverse projects, from web applications to mobile apps, ensuring they meet client requirements and exceed user expectations. I am continuously seeking opportunities to learn new technologies and improve my craft, driven by a genuine love for coding and a commitment to delivering exceptional software solutions.",
      
  },
];

const academicsData = [
  {
    id: 1,
    title: "Master of Computer Application",
    university: "RTMNU, Nagpur",
    grade: "65.04%",
    year: "2017-2020",
  },
  {
    id: 2,
    title: "Bachelor of Comp. Application",
    university: "MCU, Bhopal",
    grade: "63.48%",
    year: "2017-2020",
  },
  {
    id: 3,
    title: "Higher Secondary School",
    university: "MPBSE, Bhopal",
    grade: "67.80%",
    year: "2013-2014",
  },

  {
    id: 4,
    title: "High School",
    university: "MPBSE, Bhopal",
    grade: "81.66%",
    year: "2011-2012",
  },
];

function About() {
  return (
    <>
      <div className="bg-[#34353a] w-full py-10" id="about">
        <div className=" shadow-lg shadow-gray-800/80 w-full lg:px-28 px-10 lg:py-10">
          <h1 className="text-5xl lg:text-6xl text-white font-bold p-1 text-center">
            About
          </h1>
          <div className="flex flex-col-reverse lg:flex-row text-white lg:p-5 p-1 items-start justify-center w-full">
            {/* <div className="hidden lg:block left w-[20%] border-t-4 mt-2 border-[#fdc76b]"></div> */}

            <div className="lg:w-[50%] lg:py-6 mt-16 lg:mt-0">
              <h1 className="text-3xl lg:text-4xl text-white font-bold text-center">
                Academics
              </h1>
              <div className="flex text-white gap-5 lg:p-5 justify-center text-start">
                <VerticalTimeline className="">
                  {academicsData.map((element) => {
                    let lastElement =
                      academicsData[academicsData.length - 2];
                    console.log(lastElement);

                    return (
                      <VerticalTimelineElement
                        key={element.id}
                        date={element.year}
                        dateClassName="date"
                        className="py-5 px-4"
                      >
                        <div className="relative">
                          {academicsData.indexOf(element) <=
                          academicsData.indexOf(lastElement) ? (
                            <div className=" bg-white w-1 h-[155%] md:h-[180%] lg:h-[175%]  absolute -left-7 mt-3">
                              {console.log(
                                academicsData.indexOf(element),
                                academicsData.indexOf(lastElement)
                              )}
                            </div>
                          ) : (
                            <div className="hidden"></div>
                          )}
                          <div className="bg-green-500 rounded-full h-5 w-5 absolute -left-9 mt-2"></div>
                          <h3 className="vertical-timeline-element-title text-3xl font-semibold text-[#fdc76b]">
                            {element.title}
                          </h3>
                          <h5 className="verticle-timeline-element-subtitle text-xl text-white">
                            {element.university}, {element.location}
                          </h5>
                          <p
                            id="description"
                            className="text-lg text-[#fdc76b]"
                          >
                            {element.grade}
                          </p>
                        </div>
                      </VerticalTimelineElement>
                    );
                  })}
                </VerticalTimeline>
              </div>
            </div>

            <div className="right lg:py-6 flex justify-center items-center text-xl leading-9 tracking-wide text-justify lg:w-[50%]">
          {aboutText.map((data) => (
            <p className="indent-20">{data.summary}</p>
          ))}
        </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default About;
