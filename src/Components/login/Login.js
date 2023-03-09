import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Dashboard from '../../dashboard/Dashboard'
import Staff from '../staff/Staff'
import loginContext from './LoginContext'

export default function Login(props) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState([])
  const [usertype, setUserType] = useState("")
  const [istype, setIstype] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate();


  useEffect(() => {
    fetch('http://localhost:3001/Members')
      .then((r) => r.json())
      .then((res) => {
        setData(res)
        console.log(res)
      });
  }, []);
  console.log('type', usertype);
  function MatchFields(data) {
    console.log('wee', data);
    let User = data.filter(type => {
      console.log('s', type);
      if (type.email === email && type.password === password && type.user_type === usertype) {
        setError("")
        setIstype(usertype)
        setUsername(type.username)
        navigate(`/${usertype}`)


      }
      else {
        setError("User doesn't exist!")

      }
    })
    console.log(User);
    return User;
  }
  return (
    <div>
      <loginContext.Provider value={{ username, email, password }}>
        {props.children}
      </loginContext.Provider>
      <div className="row mt-5" >
        <div className="col-md-6" style={{ margin: "auto" }}>
          <div className="bg-primary text-light text-center py-3 rounded mb-3 mt-3">
            <h2>Login</h2>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label" type="email" >Email:</label>
            <div className="col-sm-9">
              <input onChange={(event) => {
                setEmail(event.target.value)
              }} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" required />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label" type="password">Password :</label>
            <div className="col-sm-9">
              <input onChange={(event) => {
                setPassword(event.target.value)
              }} type="password" className="form-control" id="exampleFormControlInput2" placeholder="Enter your password" required />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">User Type:</label>
            <div className="col-sm-9">
              <select onChange={(event) => setUserType(event.target.value)} className="form-select" aria-label="Default select example">
                <option >Select type</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
                <option value="Supervisor">Supervisor</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            {!error ? <p></p> : <p className="col-sm-12" style={{ color: "red" }}>{error}</p>}
          </div>
          <div className="mb-3 row">
            <div className="col-sm-12">
              <button className='btn btn-success col-12 bg-primary' type="submit" disabled={!email || !password || !usertype} onClick={() => MatchFields(data)}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
