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
        <div className="p-2 hover:scale-[102%]" key={item.id}>
          <div className="card-div bg-[#48494f] rounded-lg hover:border">
            <div className="w-60 h-64 flex flex-col justify-around items-center">
              <div>
                <img className="h-32 rounded-lg px-4" src={item.image} alt="" />
              </div>
              <div className=" w-[100%] px-6">
                <h4 className="text-md text-white">{item.text}</h4>
                {item.detail && <div className=" text-sm text-white py-1 mt-2 flex justify-between items-center "> 
                  <a href={item.git} target="_blank" className="bg-blue-700 rounded-lg py-1 px-2 flex items-center gap-1">Github <MdOpenInNew /></a>
                  <a href={item.detail} target="_blank" className="bg-blue-700 rounded-lg py-1 px-2 flex items-center gap-1">Preview <MdOpenInNew /></a>
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
