import React from "react";
import Card from "../components/card/Card";

const skillsData = [
  {
    id: 1,
    text: "HTML",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717603268/html_izpmar.png",
  },
  {
    id: 2,
    text: "CSS",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717603267/css_ninvbp.png",
  },
  {
    id: 3,
    text: "Tailwind CSS",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717603269/tailwind_pb1c4y.png",
  },
  {
    id: 4,
    text: "Javascript",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717602809/javascript_jtk1ye.png",
  },
  {
    id: 5,
    text: "React",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717602914/react_qvmqsd.png",
  },
  {
    id: 6,
    text: "Express",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717602264/exoress_uspblw.png",
  },
  {
    id: 7,
    text: "Node JS",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717602867/node_js_ubg5dk.png",
  },
  {
    id: 8,
    text: "Mongo DB",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717602996/mongodb_ycwjxc.png",
  },
  {
    id: 8,
    text: "Github",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717603555/github_rkfq7b.png",
  }
];

function Skills() {
  return (
    <>
      <div className="skills-container bg-[#34353a] w-full  py-10" id="skills">
        <div className="w-full  shadow-lg shadow-gray-800/50 lg:px-24 px-10 lg:py-20">
          <h1 className="text-5xl lg:text-6xl text-white font-bold p-1 text-center">My Skills</h1>
          <div className="flex flex-row gap-6 flex-wrap justify-center items-center p-5">
            <Card data={skillsData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
