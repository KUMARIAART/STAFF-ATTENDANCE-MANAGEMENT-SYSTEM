

import './App.css';
// import { Link, Route, Routes, useNavigate } from 'react-router-dom'

import Dashboard from './dashboard/Dashboard';
import Login from './Components/login/Login';
import Staff from './Components/staff/Staff';
function App() {
  return (
    <>
    <Dashboard/>
    {/* <Login/>
    <Staff/> */}
    </>
    // <>
    //   <Link to="/Staff">Staff</Link>
    //   <Routes>
    //     <Route path="./staff/Staff" element={<Staff />}></Route>
    //   </Routes>
    // </>
  );
}

export default App;
