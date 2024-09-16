import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Dropdown from './Components/Sidebar/Dropdown'
import Buttons from './Components/Sidebar/Buttons'
import Tabs from './Components/Dashboard/Tabs'
import TransactionManager from './Components/TransactionManager/TransactionManager'
import NewProject from './Components/Dashboard/TabElements/NewProject'

function App() {

  return (
    <Router>
      {/* <Navbar /> */}
      {/* <Buttons/> */}
      <Sidebar />


      {/* <NewProject/> */}
      {/* <Dropdown/> */}
      <Routes>
        <Route path='/' element={ <Dashboard/>} />
        <Route path='/transactionManager' element={ <TransactionManager/> } />
        
      </Routes>
    </Router>

  )
}

export default App
