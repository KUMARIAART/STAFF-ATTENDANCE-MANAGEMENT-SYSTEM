import React, { useState } from 'react'
import { Button } from '@mui/material'
import Register from './Register'
import { Link } from "react-router-dom"

export default function Admin() {
  const [flag, setFlag] = useState(true)
  return (
    <div className="container" style={{ margin: "auto",alignItems:"center"}}>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',margin:"auto"}}>
        <Button onClick={() => { setFlag(true) }} style={{ padding: "1vh" }} variant="contained">ADD STAFF MEMBER</Button>
        <Button onClick={() => { setFlag(false) }} style={{ padding: "1vh", marginLeft: "0.5vw" }} variant="contained">DELETE STAFF MEMBER</Button>
      </div>
      {
        flag ? <Register /> : <h1>Delete</h1>
      }
      <Link style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} to="/">logout</Link>
    </div>
  )
}
