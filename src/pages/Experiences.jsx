import React from "react";
import timelineElements from "../data/timelineElements.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
function Experiences() {
  return (
    <>
      <div className="bg-[#34353a] w-full py-10" id="experiences">
        <div className="lg:px-28 px-10 shadow-lg shadow-gray-800/80 lg:py-10 ">
          <h1 className="text-5xl lg:text-6xl text-white font-bold p-1 text-center">Work Experiences</h1>
          <div className="flex text-white gap-5 p-5 justify-center text-justify">
            <VerticalTimeline className="">
              {timelineElements.map((element) => {

                let lastElement = timelineElements[timelineElements.length - 2];
                console.log(lastElement)

                return (
                  <VerticalTimelineElement
                    key={element.id}
                    date={element.date}
                    dateClassName="date"
                    className="py-5 px-4"
                  >
                    <div className="relative">
                      {timelineElements.indexOf(element) <= timelineElements.indexOf(lastElement) ? (
                          <div className=" bg-white w-1 h-[130%] md:h-[150%] lg:h-[170%]  absolute -left-7 mt-3">
                                    {
                                console.log(timelineElements.indexOf(element), timelineElements.indexOf(lastElement) )
                            }
                          </div>
                          
                        ) : (
                        <div className="hidden"></div>
                        )}
                      <div className="bg-green-500 rounded-full h-5 w-5 absolute -left-9 mt-2"></div>
                      <h3 className="vertical-timeline-element-title text-4xl font-semibold text-[#fdc76b]">
                        {element.title}
                      </h3>
                      <h5 className="verticle-timeline-element-subtitle text-2xl text-white">
                        {element.company},  {element.location}
                      </h5>
                      <p id="description" className="text-lg text-[#fdc76b]">
                        {element.description}
                      </p>
                    </div>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiences;
