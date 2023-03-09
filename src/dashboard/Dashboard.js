import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Components/admin/Admin'
import Staff from '../Components/staff/Staff'
import Supervisor from '../Components/supervisor/Supervisor'
import Login from '../Components/login/Login'
import About from './About'
export default function Dashboard() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Staff" element={<Login><Staff /></Login>} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Supervisor" element={<Supervisor />} />
        <Route path="/About" element={<About />} />
      </Routes>

    </div>
  )
}
