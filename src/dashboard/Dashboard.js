import { Route, Routes, useNavigate } from 'react-router-dom'
import '../App.css'
import Admin from '../Components/admin/Admin'
import Staff from '../Components/staff/Staff'
import Supervisor from '../Components/supervisor/Supervisor'
import Login from '../Components/login/Login'
import About from './About'
export default function Dashboard() {
  const navigate = useNavigate;
  return (
    <div style={{ overflowY: 'scroll', position: 'relative' }}>
      <div className='fixed w-full h-16'>
        <nav className="navbar" style={{ background: "linear-gradient(to right, #0000cd,#00008b)", boxShadow: "0rem 0.1rem 0.1rem 0rem grey", zIndex: '1' }}>
          <div className="container text-light">
            <img src="https://tse1.mm.bing.net/th?id=OIP.XdUEvjYiW_RXGzryqW-eTAHaJt&pid=Api" alt="Logo" width="100" height="90" className="d-inline-block align-text-top" />
            <h2 className="navbar-brand text-light"><b> Staff Attendance Management System</b></h2>
            <div className='d-flex'>

              <button className="btn btn-outline-light " type="submit" onClick={() => navigate("/about")} style={{ marginLeft: "2vw" }}>About Us</button>

            </div>
          </div>
        </nav>
      </div>

      <div className="d-flex flex-column min-vh-100" style={{ marginTop: '1%' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Staff" element={<Staff />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Supervisor" element={<Supervisor />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>

      <footer id='footer' className="text-light py-2" style={{ background: "linear-gradient(to right, #0000cd,#00008b)" }}>
        <div className="container">
          <div className='text-center'>
            <p className="text-light">&copy; 2022 Natwest, Inc</p>
          </div>
          <div className="text-center">
            <ul className="list-inline" >
              <li className="list-inline-item">
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f" style={{ marginTop: '1.5vh', width: '3vh', fontSize: 'x-large', color: 'white' }}></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram" style={{ marginTop: '1.5vh', width: '3vh', fontSize: 'x-large', color: 'white' }}></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter" style={{ marginTop: '1.5vh', width: '3vh', fontSize: 'x-large', color: 'white' }}></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/">
                  <i className="fab fa-github" style={{ marginTop: '1.5vh', width: '3vh', fontSize: 'x-large', color: 'white' }}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
