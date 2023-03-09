import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Components/admin/Admin'
import Staff from '../Components/staff/Staff'
import Supervisor from '../Components/supervisor/Supervisor'
import Login from '../Components/login/Login'
import About from './About'
export default function Dashboard() {
  let navigate = useNavigate()
  return (
    <>
      <div>
        <nav className="navbar bg-dark " data-bs-theme="dark">
          <div className="container text-light">
            <img src="https://tse1.mm.bing.net/th?id=OIP.XdUEvjYiW_RXGzryqW-eTAHaJt&pid=Api" alt="Logo" width="100" height="90" className="d-inline-block align-text-top" />
            <h2 className="navbar-brand text-light"><b> Staff Attendance Management System</b></h2>
            <div className='d-flex'>
              <button className="btn btn-outline-light " type="submit" onClick={() => navigate("/about")}>About</button>

            </div>
          </div>
        </nav>
      </div>
      <About/>
      <footer className="bg-secondary text-white">
        <h1 className="nav justify-content-center border-bottom pb-4 mb-4">
        </h1>
        <p className="text-center text-muted">&copy; 2022 Natwest, Inc</p>
      </footer>
      {/* <About /> */}
    </>
  );
}
