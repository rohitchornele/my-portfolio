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
    text: "Zomato-Frontend",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717603726/zomato-frontend_vwiqtc.png",
      detail: "https://luminous-mermaid-11c47d.netlify.app/",
    git: "https://github.com/rohitchornele/zomato-clone.git",
  },
  {
    id: 4,
    text: "Dentytech (Dribble)",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717603890/dentytech_x2gwlf.png",
    detail: "https://dentytech-dribble.netlify.app/",
    git: "https://github.com/rohitchornele/dentytech.git",

  },
  {
    id: 5,
    text: "Mongo DB",
    image:
      "https://res.cloudinary.com/dhc6husi2/image/upload/v1717603895/safaring-monk_izyycf.png",
    detail: "https://safaring-monk.onrender.com/",
    git: "	https://github.com/rohitchornele/safaring_monk.git",
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
        </div>
      </div>
    </>
  );
}

export default Portfolio;
