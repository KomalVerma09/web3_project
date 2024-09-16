import React, { useState } from "react";

const Dropdown = () => {
  const [selectProject, setSelectProject] = useState("Project1");
  const [selectDescription, setSelectDescription] = useState("Freemium");
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const projects = [
    {
      name: "Project1",
      description: "Freemium",
    },
    {
      name: "Project2",
      description: "Freemium",
    },
    {
      name: "Project3",
      description: "Freemium",
    },
    {
      name: "Project4",
      description: "Freemium",
    },
    {
      name: "Project5",
      description: "Freemium",
    },
  ];

  const handleProjectSelect = (project) => {
    setSelectProject(project.name);
    setSelectDescription(project.description);
    setIsOpenDropdown(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        className="text-white  font-medium border border-gray-600 text-sm px-5 py-2.5 text-center inline-flex items-center "
        type="button"
      >
        <div className="px-4 text-sm text-white">
          <div className="font-medium truncate">{selectProject}</div>
        </div>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpenDropdown && (
        <div
          id="dropdownInformation"
          className="absolute z-10 shadow w-44 bg-gray-700  mt-1"
        >
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => handleProjectSelect(project)}
              className="border-t border-gray-600 flex items-center px-4  w-full text-left  hover:bg-gray-800 hover:border-l-4 hover:border-blue-500"
            >
              <div className="px-4 text-sm w-full text-white  py-1.5">
                <div className="text-blue-500 text-xs">{project.description}</div>
                <div className="font-medium truncate">{project.name}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;
