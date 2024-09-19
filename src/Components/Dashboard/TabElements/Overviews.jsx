import React, { useState } from "react";
import './Overviews.css'

import NewProject from "./NewProject"; // Assuming you already created this component

const Overviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      
        <div className="p-4 bg-[#111827]">
          <div className="grid card-container gap-4 mb-4 ">
            <div
              className="flex items-center justify-center h-48 bg-gray-800 border-2 border-dashed border-gray-700 newProject cursor-pointer"
              onClick={openModal}
            >
              <p className="text-2xl text-gray-500">
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>

            <div className="flex items-start justify-center h-48 bg-gray-800 border-2 border-gray-700">
              <div className="text-2xl text-gray-500 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  <div className="px-4 text-sm w-full text-white flex justify-between py-1.5 border-l-4 border-blue-500">
                    <div>
                      <div className="text-blue-500">Freemium</div>
                      <div className="font-medium truncate uppercase text-2xl">
                        Test1
                      </div>
                    </div>
                    <div className="my-auto">
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
                  <div className="flex justify-between text-sm font-semibold px-4 py-2 border-t border-gray-600">
                    <p className="my-auto">
                      Created at: <span className="text-blue-500">09/14/2024</span>
                    </p>
                    <div>
                      <button type="button" className="flex text-sm rounded-full">
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="user photo"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <NewProject onClose={closeModal} />
        </div>
      )}
    </>
  );
};

export default Overviews;
