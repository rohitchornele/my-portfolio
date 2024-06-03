import React from "react";
import Card from "../components/card/Card";

const skillsData = [
  {
    id: 1,
    text: "Javascript",
    image:
      "https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png",
  },
  {
    id: 2,
    text: "React",
    image:
      "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png",
  },
  {
    id: 3,
    text: "Python",
    image:
      "https://w7.pngwing.com/pngs/234/329/png-transparent-python-logo-thumbnail.png",
  },
  {
    id: 4,
    text: "Node JS",
    image:
      "https://w7.pngwing.com/pngs/450/470/png-transparent-node-js-angularjs-react-javascript-npm-node-js-angle-text-trademark-thumbnail.png",
  },
  {
    id: 5,
    text: "Mongo DB",
    image:
      "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
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
