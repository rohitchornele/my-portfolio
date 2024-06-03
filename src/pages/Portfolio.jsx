import React from "react";
import Card from "../components/card/Card";

const projectData = [
  {
    id: 1,
    text: "Real Estate Frontend",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717435749/realEstatesnap_nhlnca.png",
    detail: "https://real-estate-phi-pink.vercel.app/",
    git: "https://github.com/rohitchornele/real-estate.git",
  },
  {
    id: 2,
    text: "Dragable Components",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717436570/Draggable_Component_qkbobr.png",
    detail: "https://draggable-components.netlify.app/",
    git: "https://github.com/rohitchornele/draggable-components.git",
  },
  {
    id: 3,
    text: "Python",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717435749/realEstatesnap_nhlnca.png",
    detail: "This project is based on MERN Stack",
    git: "",
  },
  {
    id: 4,
    text: "Node JS",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717435749/realEstatesnap_nhlnca.png",
    detail: "This project is based on MERN Stack",
    git: "",

  },
  {
    id: 5,
    text: "Mongo DB",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717435749/realEstatesnap_nhlnca.png",
    detail: "This project is based on MERN Stack",
    git: "",
  },
];

function Portfolio() {
  return (
    <>
      <div
        className="skills-container bg-[#34353a] w-full pb-10"
        id="portfolio"
      >
        <div className="w-full p-5 text-center shadow-lg shadow-gray-800/80  lg:px-24 px-10 lg:pb-20 py-10">
          <h1 className="text-5xl lg:text-6xl text-white font-bold p-1">
            Projects
          </h1>
          <div className="flex flex-row gap-6 flex-wrap justify-center items-center p-5 ">
            <Card data={projectData} />
          </div>

          <button className="bg-[#fdc76b] rounded-md py-2 px-4 mt-6">
            View More
          </button>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
