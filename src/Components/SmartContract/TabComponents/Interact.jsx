import React, { useState } from "react";
import Read from "./ReadTab"; // Import Read component
import Write from "./WriteTab"; // Import Write component
import "../Smartcontract.css";

const Interact = () => {
    const [activeInteractTab, setActiveInteractTab] = useState("Read");

    const handleInteractTabs = (tab) => {
        setActiveInteractTab(tab);
    };

    return (
        <div className="h-lvh px-2">
            <div className="bg-[rgba(55,65,81,1)] p-4 rounded-lg shadow w-[150%] sm:w-full max-w-4xl mx-auto mt-2 mb-5 pt-10 sm:min-w-96" style={{ height: '95%' }}>
                <div className="bg-[rgba(31,41,55,1)] border border-gray-200 rounded-lg h-full p-4 min-w-5/6 overflow-y-auto" style={{ height: '97%' }}>
                    {/* Top bar for "Contract Source Code (Solidity)" */}
                    <div className="flex justify-between items-center mb-2 bg-gray-700 p-2 rounded-t-lg min-w-5/6">
                        <div className="flex space-x-2">
                            <button onClick={() => handleInteractTabs("Read")} className={`${
                                activeInteractTab === "Read"
                                    ? "border-b-2 border-blue-500"
                                    : "text-gray-400"
                            } px-2 pb-1 focus:outline-none`}>
                                Read
                            </button>
                            <button onClick={() => handleInteractTabs("Write")} className={`${
                                activeInteractTab === "Write"
                                    ? "border-b-2 border-blue-500"
                                    : "text-gray-400"
                            } px-2 pb-1 focus:outline-none`}>
                                Write
                            </button>
                        </div>
                    </div>
                    
        {/* Tab content */}
        <div className="">
          {activeInteractTab === "Read" && <Read />} {/* Render Read component */}
          {activeInteractTab === "Write" && <Write />} {/* Render Write component */}
        </div>
                </div>
            </div>
        </div>
    );
};

export default Interact;
