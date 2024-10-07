import React from 'react'
import NetworkSelector from './NetworkSelection'

const SmartContract = () => {
    // const tabs = [
    //     {name: 'Home', label: 'Home', component:<Home/>},
    //     { name: 'Transactions', label: 'Transactions', component: <Transactions /> },
    //     { name: 'Events', label: 'Events', component: <Events /> },
    //     { name: 'Reports', label: 'Reports', component: <Reports /> },
    //     { name: 'ABI', label: 'ABI', component: <ABI /> },
    //     { name: 'Deploy', label: 'Deploy', component: <Deploy /> }
    // ];
  return (
<>
            {/* <Tabs tabs={tabs} /> */}
            <div className=''>
              {/* Hello */}
              <NetworkSelector/>
            </div>
        </>
  )
}

export default SmartContract