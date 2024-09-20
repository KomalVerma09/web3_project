import React from 'react'
import Tabs from '../Global/Tabs'
import Home from './TabComponents/Home'
import Transactions from './TabComponents/Transactions'
import Events from './TabComponents/Events'
import Reports from './TabComponents/Reports'
import ABI from './TabComponents/ABI'
import Deploy from './TabComponents/Deploy'

const SmartContract = () => {
    const tabs = [
        {name: 'Home', label: 'Home', component:<Home/>},
        { name: 'Transactions', label: 'Transactions', component: <Transactions /> },
        { name: 'Events', label: 'Events', component: <Events /> },
        { name: 'Reports', label: 'Reports', component: <Reports /> },
        { name: 'ABI', label: 'ABI', component: <ABI /> },
        { name: 'Deploy', label: 'Deploy', component: <Deploy /> }
    ];
  return (
<>
            <Tabs tabs={tabs} />
        </>
  )
}

export default SmartContract