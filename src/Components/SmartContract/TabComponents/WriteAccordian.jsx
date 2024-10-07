// src/components/Accordion.js
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Accordion = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="w-full mx-auto">
      <div className="border border-gray-700 rounded-lg mb-2 overflow-hidden">
        <button
          className="flex justify-between w-full px-4 py-2 text-left bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
          onClick={onClick}
        >
          <span>{title}</span>
          <span>{isOpen ? <FiChevronUp/> : <FiChevronDown/>}</span>
        </button>
        {isOpen && (
          <div className="px-4 py-2 bg-gray-900 text-gray-300">{children}</div>
        )}
      </div>
    </div>
  );
};

const AccordionGroup = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track the index of the open accordion

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle accordion, close if clicked again
  };

  return (
    <div className="w-full mx-auto">
      <Accordion
        title="1. buyTokens (0xd0febe4c)"
        isOpen={openIndex === 0}
        onClick={() => handleAccordionClick(0)}
      >
        <p>buyTokens</p>
        <input
          type="text"
          className="w-full mt-2 p-2 bg-gray-700 border border-gray-600 text-white rounded-md"
          placeholder="PayableAmount (ether)"
        />
        <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md">
          Write
        </button>
      </Accordion>
      <Accordion
        title="2. claimTokens (0x48c54b9d)"
        isOpen={openIndex === 1}
        onClick={() => handleAccordionClick(1)}
      >
        <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
          Write
        </button>
      </Accordion>
      <Accordion
        title="3. extendEndTime (0x88770cb0)"
        isOpen={openIndex === 2}
        onClick={() => handleAccordionClick(2)}
      >
        <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
          Write
        </button>
      </Accordion>
    </div>
  );
};

export default AccordionGroup;
