import React, { useState } from 'react';
import baseImage from '../../assets/images/base.png';
import ethereumImage from '../../assets/images/ethereum.png';
import polygonImage from '../../assets/images/pol-token.png';
import bnbImage from '../../assets/images/bnb.png';

const NewProject = ({ onClose, onCreateProject }) => {
  const [color, setColor] = useState('#01FEE2');
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  const colors = ['#333333', '#F44336', '#FF9800', '#2196F3', '#4CAF50', '#E91E63', '#9C27B0', '#FFC107', '#673AB7'];

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleCreateProject = () => {
    if (projectName && description) {
      const descriptionCopy = description;
      const truncatedDescription = descriptionCopy.length > 60 
      ? descriptionCopy.slice(0, 60) + '...' 
      : descriptionCopy;

      onCreateProject({
        title: projectName,
        subtitle: 'Frontend',
        description: truncatedDescription,
        color: color,
        bottomElement: (
          <div className="flex gap-2">
          <div>
            <img className="w-5 h-5 rounded" src={baseImage} alt="Base" />
          </div>
          <div>
            <img className="w-5 h-5 rounded-full" src={ethereumImage} alt="Ethereum" />
          </div>
          <div>
            <img className="w-5 h-5 rounded" src={polygonImage} alt="Polygon" />
          </div>
          <div>
            <img className="w-5 h-5 rounded" src={bnbImage} alt="BNB" />
          </div>
        </div>
        ),
        imageUrl: "https://ui-avatars.com/api/?name=Frontend+Ui/?rounded=true",
        status: "",
      });
      onClose(); // Close the modal after creating the project
    }
  };

  return (
    <div className="bg-gray-800 text-white p-6   w-full max-w-md mx-auto shadow-md relative">
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
        <input
          id="description"
          placeholder="Describe your project"
          className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md text-wrap"
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
        <button
          className="bg-teal-400 text-black px-4 py-2 rounded-md hover:bg-teal-500"
          onClick={handleCreateProject}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default NewProject;
