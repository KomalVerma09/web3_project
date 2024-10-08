import React, { useEffect, useState } from "react";
import "./Smartcontract.css";
import { useNavigate, Outlet } from "react-router-dom";

const NetworkSelector = () => {
  const [activeTab, setActiveTab] = useState("Testnet");
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const navigate = useNavigate();

  const networks = {
    Testnet: [
      {
        name: "0xB3414...0E37c",
        icon: <i class="fa-regular fa-folder-open"></i>,
      },
      {
        name: "0xA123F...8B29d",
        icon: <i class="fa-regular fa-folder-open"></i>,
      },
      {
        name: "0xC4927...1E84a",
        icon: <i class="fa-regular fa-folder-open"></i>,
      },
      {
        name: "0xF8241...9C61b",
        icon: <i class="fa-regular fa-folder-open"></i>,
      },
      {
        name: "0xE7823...4D57e",
        icon: <i class="fa-regular fa-folder-open"></i>,
      },
      {
        name: "0xB6598...7F12c",
        icon: <i class="fa-regular fa-folder-open"></i>,
      },
    ],
    Mainnet: [
      {
        name: "0xB3414...0E37c",
        icon: <i class="fa-regular fa-folder-open"></i>,
      },
      {
        name: "0xA123F...8B29d",
        icon: <i class="fa-regular fa-folder-open"></i>,
      },
      {
        name: "0xC4927...1E84a",
        icon: <i class="fa-regular fa-folder-open"></i>,
      },
      {
        name: "0xF8241...9C61b",
        icon: <i class="fa-regular fa-folder-open"></i>,
      },
      {
        name: "0xE7823...4D57e",
        icon: <i class="fa-regular fa-folder-open"></i>,
      },
      {
        name: "0xB6598...7F12c",
        icon: <i class="fa-regular fa-folder-open"></i>,
      },
    ],
    Devnet: [
      { name: "Project1", icon: <i class="fa-regular fa-folder-open"></i> },
      { name: "Project2", icon: <i class="fa-regular fa-folder-open"></i> },
      { name: "Project3", icon: <i class="fa-regular fa-folder-open"></i> },
      { name: "Project4", icon: <i class="fa-regular fa-folder-open"></i> },
      { name: "Project5", icon: <i class="fa-regular fa-folder-open"></i> },
      { name: "Project6", icon: <i class="fa-regular fa-folder-open"></i> },
    ],
  };

  useEffect(() => {
    if(networks[activeTab].length > 0){
      handleNetworkChange(networks[activeTab][0])
    }
  }, [activeTab])
  

  const handleNetworkChange = (network) => {
    setSelectedNetwork(network.name); // Store the network name
    navigate(`/smartContract/${network.name}`);
  };

  return (
    <div className="mt-14 p-5  md:ml-64 bg-gray-900 sticky top-14 border-y border-gray-700 w-auto overflow-x-auto style-scrollbar">
      <div className="min-h-screen flex flex-col bg-gray-800 text-white border border-gray-700 overflow-y-hidden overflow-x-auto">
        <div className="flex flex-col sm:flex-row">
        <div>
        <div className="flex justify-between items-center px-4 py-2 border-r border-gray-700 bg-gray-900 ">
          <div className="flex space-x-6">
            <button
              onClick={() => setActiveTab("Testnet")}
              className={`${
                activeTab === "Testnet"
                  ? "border-b-2 border-blue-500"
                  : "text-gray-400"
              } px-2 pb-1 focus:outline-none`}
            >
              Testnet
            </button>
            <button
              onClick={() => setActiveTab("Mainnet")}
              className={`${
                activeTab === "Mainnet"
                  ? "border-b-2 border-blue-500"
                  : "text-gray-400"
              } px-2 pb-1 focus:outline-none`}
            >
              Mainnet
            </button>
            <button
              onClick={() => setActiveTab("Devnet")}
              className={`${
                activeTab === "Devnet"
                  ? "border-b-2 border-blue-500"
                  : "text-gray-400"
              } px-2 pb-1 focus:outline-none`}
            >
              Devnet
            </button>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-full sm:min-h-lvh bg-gray-900 border-r border-gray-700 ">
            <input
              type="text"
              placeholder="🔍 Search a network"
              className="w-full py-2 px-4 bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none"
            />
            <ul className="h-full  overflow-y-auto style-scrollbar  mt-2">
              {networks[activeTab].length ? (
                networks[activeTab].map((network, index) => (
                  <li
                    key={index}
                    className={`flex items-center p-4 hover:bg-gray-800 cursor-pointer ${
                      selectedNetwork === network.name
                        ? "bg-gray-800"
                        : "bg-transparent"
                    }`}
                    onClick={() => handleNetworkChange(network)}
                  >
                    <span className="mr-3">{network.icon}</span>
                    <span>{network.name}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">
                  No networks available in {activeTab}
                </li>
              )}
            </ul>
          </div>

          {/* Main content */}
        </div>
        </div>
          <div className=" bg-gray-800 between450and639 w-[150%]">
            {/* <h1 className="text-3xl font-bold">PLEASE SELECT A NETWORK</h1> */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkSelector;
