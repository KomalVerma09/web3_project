import React, { useEffect, useState } from 'react';
import './Tab.css'

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].name);

    useEffect(() => {
        const storedTab = localStorage.getItem('activeTab');
        if (storedTab && tabs.some(tab => tab.name === storedTab)) {
            setActiveTab(storedTab);
        } else {
            setActiveTab(tabs[0].name); // Ensure the first tab is selected if nothing is stored
        }
    }, [tabs]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        localStorage.setItem('activeTab', tabName);
    };

    const renderTabContent = () => {
        const activeTabContent = tabs.find(tab => tab.name === activeTab);
        return activeTabContent ? activeTabContent.component : null;
    };

    return (
        <>
            <nav className="mt-14 px-4 pb-0 md:ml-64 bg-gray-800 sticky top-14 h-14 border-y border-gray-700">
                <div className=" mx-auto h-full">
                    <div className="flex  items-center h-full ">
                        <ul className="flex overflow-x-auto hide-scrollbar font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm h-full">
                            {tabs.map(tab => (
                                <li
                                    key={tab.name}
                                    className={`h-full px-2 flex items-center ${activeTab === tab.name ? 'border-b-2 border-blue-500' : ''}`}
                                    onClick={() => handleTabClick(tab.name)}
                                >
                                    <span className="text-white cursor-pointer">{tab.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="tab-content p-4 md:ml-64 bg-[#111827] h-lvh">
                {renderTabContent()}
            </div>
        </>
    );
};

export default Tabs;
