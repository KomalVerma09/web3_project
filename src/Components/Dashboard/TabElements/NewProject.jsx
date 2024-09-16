import React, { useState } from 'react';

const NewProject = ({ onClose }) => {
  const [color, setColor] = useState('#01FEE2');
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  const colors = ['#333333', '#F44336', '#FF9800', '#2196F3', '#4CAF50', '#E91E63', '#9C27B0', '#FFC107', '#673AB7'];

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="bg-gray-800 text-white p-6  w-full max-w-md mx-auto shadow-md relative">
      {/* Cross button to close the modal */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
      >
        &times;
      </button>

      <h2 className="text-xl font-bold mb-4">NEW PROJECT</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Give the best name to your project"
          className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Describe your project"
          className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={240}
        />
        <div className="text-gray-400 text-sm mt-1">{description.length}/240</div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Project Color</label>
        <div className="flex items-center gap-2">
          {colors.map((col, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full cursor-pointer ${col === color ? 'border-2 border-teal-300' : ''}`}
              style={{ backgroundColor: col }}
              onClick={() => handleColorChange(col)}
            />
          ))}
          <input
            type="text"
            value={color}
            className="ml-2 px-2 py-1 bg-gray-900 text-white border border-gray-700 rounded-md w-24"
            onChange={(e) => setColor(e.target.value)}
          />
          <button
            className="ml-2 bg-teal-400 text-black px-2 py-1 rounded-md"
            onClick={() => navigator.clipboard.writeText(color)}
          >
            Copy
          </button>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button className="text-gray-400 hover:text-white" onClick={onClose}>Cancel</button>
        <button className="bg-teal-400 text-black px-4 py-2 rounded-md hover:bg-teal-500">Confirm</button>
      </div>
    </div>
  );
};

export default NewProject;
