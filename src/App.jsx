import {Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard.jsx'
import Breaks from './components/Breaks.jsx'
import AgentOut from './components/AgentOut.jsx'
import Profile from './components/Profile.jsx'
const App=()=>{
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/breaks" element={<Breaks/>}/>
        <Route path="/agentout" element={<AgentOut/>}/>
        <Route path="/profile" element={<AgentOut/>}/>
      </Routes>
    </>
  )
}

export default App;