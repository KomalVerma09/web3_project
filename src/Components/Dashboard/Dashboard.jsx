import React from 'react'
import Tabs from './Tabs'
import Overviews from './TabElements/Overviews'

const Dashboard = () => {
  return (
    <>
    <Tabs />
    <div className="p-4 sm:ml-64 bg-[#111827] h-lvh">
      <Overviews/>
      </div>
    </>
  )
}

export default Dashboard