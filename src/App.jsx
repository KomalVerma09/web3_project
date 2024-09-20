import Sidebar from './Components/Sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import TransactionManager from './Components/TransactionManager/TransactionManager'
import SmartContract from './Components/SmartContract/SmartContract'
import Frontend from './Components/UserInterface/Frontend'

function App() {

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' element={ <Dashboard/>} />
        <Route path='/transactionManager' element={ <TransactionManager/> } />
        <Route path='/smartContract' element={<SmartContract/>}/>
        <Route path='/frontend-ui' element={<Frontend/>}/>
        
      </Routes>
    </Router>

  )
}

export default App
