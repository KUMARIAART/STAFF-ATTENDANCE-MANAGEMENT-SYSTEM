import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AttendanceByDate from './AttendanceByDate'
import AttendanceByName from './AttendanceByName'

export default function Supervisor() {

  const [isPreview, setIsPreview] = useState(true);

  return (
    <div className="container-fluid d-flex flex-column" style={{ marginTop: "-1vh" }}>

      <div id='button' className='d-flex justify-content-evenly align-self-center mt-5' style={{ width: '25%' }}>
        <button className='btn  bg-primary text-white' style={{ padding: "1vh", fontSize: '1.1em' }} onClick={() => { setIsPreview(true) }}>ATTENDANCE BY DATE</button>
        <button id='button1' className='btn  bg-primary text-white' style={{ padding: "1vh", marginLeft: '1vw', fontSize: '1.1em' }} onClick={() => { setIsPreview(false) }}>ATTENDANCE BY NAME</button>
      </div>

      <hr/>
      
      <div style={{ marginTop: '-1vh' }}>
        {isPreview ? <AttendanceByDate /> : <AttendanceByName />}
      </div>

      <div className='align-self-center mt-5 mb-4' style={{ fontSize: '1.4em' }}>
        <Link className='link' to='/'>Logout</Link>
      </div>

    </div>
  )
}
