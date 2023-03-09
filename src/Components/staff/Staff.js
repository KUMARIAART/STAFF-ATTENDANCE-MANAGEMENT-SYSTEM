import React from 'react'
import { useContext } from 'react'
import loginContext from '../login/LoginContext'
export default function Staff() {
  const a=useContext(loginContext)
  return (
    <div>staff</div>
  )
}
