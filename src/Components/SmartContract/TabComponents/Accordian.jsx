import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Accordion = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="w-full  mx-auto">
      {accordionData.map((item, index) => (
        <div key={index} className="border border-gray-700 rounded-lg mb-2 overflow-hidden">
          <div
            className="flex justify-between w-full px-4 py-2 text-left bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
            onClick={() => toggle(index)}
          >
            <h3 className=" text-white">{item.title}</h3>
            <span>{open === index ? <FiChevronUp /> : <FiChevronDown />}</span>
          </div>
          {open === index && (
            <div className="p-2.5 bg-gray-900 text-gray-300">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const accordionData = [
  { title: 'endTime', content: 'Details about the end time...' },
  {
    title: 'owner',
    content: '0x581b74F39A66d4159881F2fB9Ab6427Efb380E99 address',
  },
  { title: 'presaleFinalized', content: 'Presale finalized status...' },
  { title: 'presaleSuccessful', content: 'Presale success status...' },
  { title: 'pricePerToken', content: 'Token price information...' },
  { title: 'startTime', content: 'Details about the start time...' },
  { title: 'token', content: 'Token information...' },
];

export default Accordion;
