import React, { useEffect, useState } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";

const NetworkDetails = () => {
  const { networkId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Interact");

  useEffect(() => {
    if (networkId && activeTab === "Interact") {
      navigate(`/smartContract/${networkId}/interact`);
    }
  }, [networkId, activeTab, navigate]);

  const handleTabs = (tab) => {
    setActiveTab(tab);
    navigate(`/smartContract/${networkId}/${tab.toLowerCase()}`);
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col">
        <div className="flex justify-between items-center px-4 py-2 border-r border-gray-700 bg-gray-800 sm:bg-gray-900 border sm:border-0 sm:min-w-96 w-[150%] sm:w-full">
          <div className="flex space-x-6">
            <button
              onClick={() => handleTabs("Interact")}
              className={`${
                activeTab === "Interact"
                  ? "border-b-2 border-blue-500"
                  : "text-gray-400"
              } px-2 pb-1 focus:outline-none`}
            >
              Interact
            </button>
            <button
              onClick={() => handleTabs("Code")}
              className={`${
                activeTab === "Code"
                  ? "border-b-2 border-blue-500"
                  : "text-gray-400"
              } px-2 pb-1 focus:outline-none`}
            >
              Code
            </button>
            <button
              onClick={() => handleTabs("Transaction")}
              className={`${
                activeTab === "Transaction"
                  ? "border-b-2 border-blue-500"
                  : "text-gray-400"
              } px-2 pb-1 focus:outline-none`}
            >
              Transaction
            </button>
            <button
              onClick={() => handleTabs("Notification")}
              className={`${
                activeTab === "Notification"
                  ? "border-b-2 border-blue-500"
                  : "text-gray-400"
              } px-2 pb-1 focus:outline-none`}
            >
              Notification
            </button>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NetworkDetails;
