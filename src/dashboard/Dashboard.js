import React from 'react'
import Admin from '../Components/admin/Admin';

export default function Dashboard() {
  return (
    <>
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://tse1.mm.bing.net/th?id=OIP.XdUEvjYiW_RXGzryqW-eTAHaJt&pid=Api" alt="Logo" width="80" height="50" className="d-inline-block align-text-top" />
            <b>Attendance Management System</b>
          </a>
        </div>
      </nav>

      <footer className="fixed-bottom">
        <h1 className="nav justify-content-center border-bottom pb-4 mb-4">
        </h1>
        <p className="text-center text-muted">&copy; 2022 Natwest, Inc</p>
      </footer>
      <Admin />
    </>
  );
}
