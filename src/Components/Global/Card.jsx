// Card.js
import React, { useState } from "react";
import EllipsisCard from "./Ellipsis-Card";

const Card = ({ cardData }) => {
  const {
    subtitle = "",
    title="",
    description = "",
    bottomElement="",
    imageUrl="",
    status="",
  } = cardData;
  const [openEllipsisCard, setOpenEllipsisCard] = useState(false);

  const toggleEllipsisCard = () => {
    setOpenEllipsisCard(!openEllipsisCard);
  };

  return (
    <div className="flex items-start justify-center min-h-48  bg-gray-800 border-2 border-gray-700 cursor-pointer sm:min-w-48  md:min-w-56">
      <div className="text-2xl text-gray-500 w-full h-full">
        <div className="flex flex-col justify-between h-full">
          <div className=" ">
            <div className="px-4 text-sm w-full text-white flex justify-between pt-1.5 border-l-4 border-blue-500 ">
              

            <div className="">
            <div className="text-blue-500">{subtitle}</div>
              <div className="font-medium uppercase md:text-2xl text-xl">{title}</div>
              </div>
            <div className="my-auto" onClick={toggleEllipsisCard}>
              <svg
                className="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 512"
              >
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
              </svg>
            </div>
            </div>
          
          {openEllipsisCard && (
            <div className="  relative -top-5 smaller-than-830:-right-20">
              <EllipsisCard />
            </div>
          )}

          <div className="px-4 text-sm w-full text-gray-400 text-wrap pt-2">
            {description}
            <div class="bg-green-100 text-green-800 text-sm font-medium my-2 px-2.5 py-0.3 rounded w-16">{status}</div>
          </div>
          </div>
          <div className="flex justify-between text-sm font-semibold px-4 py-2 border-t border-gray-600">
            <p className="my-auto">
              <span>{bottomElement}</span>
            </p>
            {imageUrl && (
              <div>
                <button type="button" className="flex text-sm rounded-full">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={imageUrl}
                    alt="user photo"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
