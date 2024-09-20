import React, { useState } from "react";
import "./Overviews.css";
import NewProject from "../NewProject";
import Card from "../../Global/Card";

const Overviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardsData, setCardsData] = useState([
    {
      title: "Test1",
      bottomElement: (
        <span>
          Created at: <span className="text-blue-500">09/14/2024</span>
        </span>
      ), 
      subtitle: "Freemium",
      imageUrl: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
  ]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to add new project to the cardsData
  const addNewProject = (newProject) => {
    setCardsData((prevData) => [...prevData, newProject]);
  };

  return (
    <>
      <div className="bg-[#111827]">
        <div className="grid card-container gap-4 mb-4">
          {/* New Project Button */}
          <div
            className="flex items-center justify-center min-h-48 bg-gray-800 border-2 border-dashed border-gray-700 newProject cursor-pointer"
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

          {/* Render dynamic cards */}
          {cardsData.map((card, index) => (
            <Card key={index} cardData={card} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <NewProject onClose={closeModal} onCreateProject={addNewProject} />
        </div>
      )}
    </>
  );
};

export default Overviews;
