import React from "react";
import "../Smartcontract.css";
import DataTableComponent from "./DataTableComponent";

const Transaction = () => {
    //17,34,39,0.5
    return (
        <div className="h-lvh  px-2">
            <div className="bg-gray-500 p-4 rounded-lg shadow w-[150%]  sm:w-full mx-auto mt-2 mb-5 pt-10 sm:min-w-96" style={{height:'95%'}} >
            <div className="bg-[rgba(31,41,55,1)] border border-gray-200 rounded-lg w-full overflow-y-auto  h-full p-4 min-w-5/6 style-scrollbar" style={{height:'97%'}}>
            {/* p-4 */}
                {/* Top bar for "Contract Source Code (Solidity)" */}
                <div className="flex justify-between items-center mb-2 bg-gray-700 p-2 rounded-t-lg min-w-5/6">
                    <span className="text-gray-200 font-semibold">
                        Latest Transactions
                    </span>
                    
                </div>
                <div className="px-1 style-scrollbar overflow-auto style-scrollbar"><DataTableComponent/></div>
            </div>
        </div>
        </div>
    );
};

export default Transaction;
