import React from 'react'
import Tabs from '../Global/Tabs'
import Overview from './TabComponents/Overview'
import Edit from './TabComponents/Edit'
import Web3Interface from './TabComponents/Web3-Interface'
import Publish from './TabComponents/Publish'

const Frontend = () => {
    const tabs = [
        {name: 'Overview', label: 'Overview', component:<Overview/>},
        { name: 'Edit', label: 'Edit', component: <Edit /> },
        { name: 'Web3Interface', label: 'Web3Interface', component: <Web3Interface /> },
        { name: 'Publish', label: 'Publish', component: <Publish /> }
    ];
  return (
    <>
    <Tabs tabs={tabs} />
    </>
  )
}

export default Frontend