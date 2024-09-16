import { useState } from 'react';
import baseImage from '../../assets/images/base.png';
import ethereumImage from '../../assets/images/ethereum.png';
import polygonImage from '../../assets/images/pol-token.png';
import bnbImage from '../../assets/images/bnb.png';

export default function Header() {
  const [selectedNetwork, setSelectedNetwork] = useState('Base Mainnet');
  const [selectedNetworkImage, setSelectedNetworkImage] = useState(baseImage);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const networks = [
    {
      name: 'Base Mainnet',
      image: baseImage,
    },
    {
      name: 'Ethereum',
      image: ethereumImage,
    },
    {
      name: 'Polygon',
      image: polygonImage,
    },
    {
      name: 'BSC',
      image: bnbImage,
    },
  ];

  const handleNetworkSelect = (network) => {
    setSelectedNetwork(network.name);
    setSelectedNetworkImage(network.image);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none"
        >
          <img
            src={selectedNetworkImage}
            alt={selectedNetwork}
            className="w-5 h-5 sm:mr-2"
          />
          
          <span className="hidden sm:block">
            {selectedNetwork}
          </span>

          <svg
            className="w-4 h-4 ml-2 hidden sm:block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 shadow-lg w-44 bg-gray-700 divide-gray-600">
            {networks.map((network, index) => (
              <button
                key={index}
                onClick={() => handleNetworkSelect(network)}
                className="flex items-center w-full px-4  text-left hover:bg-gray-200"
              >
                <img
                  src={network.image}
                  alt={network.name}
                  className="w-5 h-5 mr-2"
                />
                <span className="w-full inline text-white hover:text-gray-800  py-2">{network.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <button className="px-3 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Connect Wallet
      </button>
    </div>
  );
}
