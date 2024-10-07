import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import SmartContract from './Components/SmartContract/SmartContract';
import Frontend from './Components/UserInterface/Frontend';
import NetworkDetails from './Components/SmartContract/NetworkDetails';
import Code from './Components/SmartContract/TabComponents/Code';
import Interact from './Components/SmartContract/TabComponents/Interact';
import Transaction from './Components/SmartContract/TabComponents/Transaction';
import Notification from './Components/SmartContract/TabComponents/Notification';
import ReadTab from './Components/SmartContract/TabComponents/ReadTab';
import WriteTab from './Components/SmartContract/TabComponents/WriteTab';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/frontend-ui" element={<Frontend />} />
        <Route path="/smartContract" element={<SmartContract />}>
          <Route path=":networkId" element={<NetworkDetails />}>
            <Route path="code" element={<Code />} />
            <Route path="interact" element={<Interact />}>
              <Route path="read" element={<ReadTab />} />
              <Route path="write" element={<WriteTab />} />
            </Route>
            <Route path="transaction" element={<Transaction />} />
            <Route path="notification" element={<Notification />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
