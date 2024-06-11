import React from "react";
import { MdOpenInNew } from "react-icons/md";
import "./card.css";

const cardData = [
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
      "https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png",
  },
  {
    id: 3,
    text: "Javascript",
    image:
      "https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png",
  },
  {
    id: 4,
    text: "React",
    image:
      "https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png",
  },
  {
    id: 5,
    text: "Javascript",
    image:
      "https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png",
  }
];

function Card( { data } ) {
  return (
    <>
      {data.map((item) => (
        <div className="p-2 hover:scale-[102%] duration-300 ease-in-out" key={item.id}>
          <div className="card-div bg-[#48494f] rounded-lg hover:bg-[#48495f]">
            <div className="lg:w-60 lg:h-64 w-32 min-h-48 flex flex-col justify-evenly items-center">
              <div>
                <img className="lg:h-32 h-24 rounded-lg px-4 object-contain" src={item.image} alt="" />
              </div>
              <div className=" w-[100%] px-6">
                <h4 className="text-md text-white text-center">{item.text}</h4>
                {item.detail && <div className=" text-sm text-[#121213] py-1 mt-2 flex flex-col lg:flex-row justify-between items-center pb-3"> 
                  <a href={item.git} target="_blank" className="bg-[#fdc76b] rounded-lg py-1 px-2 flex items-center gap-1 font-semibold">Github <MdOpenInNew /></a>
                  <a href={item.detail} target="_blank" className="bg-[#fdc76b] rounded-lg py-1 px-2 flex items-center gap-1 font-semibold mt-2 lg:mt-0">Preview <MdOpenInNew /></a>
                </div>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
