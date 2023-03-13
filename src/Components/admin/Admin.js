import React, { useState } from 'react'
import Register from './Register'
import { Link } from "react-router-dom"
import Delete from "./Delete"

export default function Admin() {
  const [flag, setFlag] = useState(true)
  return (
    <div className="container-fluid" style={{ marginTop: "-1vh" }}>
      <div className='d-flex flex-column'>

        <div className='d-flex justify-content-evenly align-self-center mt-5' style={{ width: '25%' }}>
          <button className='bg-primary' onClick={() => { setFlag(true) }} style={{ padding: "1vh", fontSize: '1.1em' }} variant="contained">ADD STAFF MEMBER</button>
          <button className='bg-primary' onClick={() => { setFlag(false) }} style={{ padding: "1vh", marginLeft: '1vw', fontSize: '1.1em' }} variant="contained">DELETE STAFF MEMBER</button>
        </div>

        <hr/>
        
        <div style={{ marginTop: '-1vh' }}>
          {
            flag ? <Register /> : <Delete />
          }
        </div>

        <div className='align-self-center mt-4 mb-4' style={{ fontSize: '1.4em' }}>
          <Link to="/">Logout</Link>
        </div>

      </div>
    </div>
  )
}
