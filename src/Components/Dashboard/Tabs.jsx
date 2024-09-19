import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Overviews from './TabElements/Overviews';
import UsageAnalytics from './TabElements/UsageAnalytics';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const handleTabClick = (tab)=>{
        setActiveTab(tab);
    }

    const renderTabContent = () => {
        switch (activeTab) {
          case 'Overview':
            return <Overviews />;
          case 'Usage_Analytics':
            return <UsageAnalytics />;
          default:
            return <UsageAnalytics />; // Default to Overview if no tab is selected
        }
      };
    
  return (
    <>
        
<nav class=" mt-14 p-4 pb-0 sm:ml-64 bg-[#111827] ">
    <div class="max-w-screen-xl  mx-auto border-b border-gray-600">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li className={`p-2 ${activeTab==='Overview'?'border-b-2 border-blue-500' : ''}`} onClick={()=>handleTabClick('Overview')}>
                <span className="text-white cursor-pointer">Overview</span>
                </li>
                <li className={`p-2 ${activeTab==='Usage_Analytics'?'border-b-2 border-blue-500':''}`} onClick={()=>handleTabClick('Usage_Analytics')}>
                <span className="text-white cursor-pointer">Usage analytics</span>
                </li>
                
            </ul>
        </div>
    </div>
</nav>

<div className="tab-content p-4 sm:ml-64 bg-[#111827] min-h-lvh">
        {renderTabContent()}
      </div>

    </>
  )
}

export default Tabs