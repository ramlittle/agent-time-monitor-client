import {Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import Breaks from './components/Breaks.jsx'
import AgentOut from './components/AgentOut.jsx'
import Profile from './components/Profile.jsx'
import Login from './components/Login.jsx'
import { examineCredentials } from './functions/authentication.js'
const App=()=>{
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard examineCredentials={examineCredentials}/>}/>
        <Route path="/breaks" element={<Breaks examineCredentials={examineCredentials}/>}/>
        <Route path="/agentout" element={<AgentOut examineCredentials={examineCredentials}/>}/>
        <Route path="/profile" element={<Profile examineCredentials={examineCredentials}/>}/>
        <Route path="/login" element={<Login examineCredentials={examineCredentials}/>}/>
      </Routes>
    </>
  )
}

export default App;