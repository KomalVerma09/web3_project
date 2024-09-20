import React from 'react';
import Tabs from '../Global/Tabs';
import Overviews from './TabComponents/Overviews';
import UsageAnalytics from './TabComponents/UsageAnalytics';

const Dashboard = () => {
    const tabs = [
        { name: 'Overview', label: 'Overview', component: <Overviews /> },
        { name: 'Usage_Analytics', label: 'Usage Analytics', component: <UsageAnalytics /> }
    ];

    return (
        <>
            <Tabs tabs={tabs} />
        </>
    );
};

export default Dashboard;
