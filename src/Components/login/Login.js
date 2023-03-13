import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from './LoginSlice'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [data, setData] = useState([])
  const [usertype, setUserType] = useState("")
  const [error, setError] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")


  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Fetching data from member.json 
  useEffect(() => {
    fetch('http://localhost:3001/Members')
      .then((r) => r.json())
      .then((res) => {
        setData(res)
      })
      .catch(error=>console.log(error));
  }, []);

  const checkEmail = (event) => {
    if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event))) {
      setErrorEmail("Invalid Email")
    }
    else {
      setEmail(event)
      setErrorEmail("")
    }
  }

  const checkPassword = (event) => {
    let hasCaps = /[A-Z]/.test(event);
    let hasNums = /\d/.test(event)
    let hasSmallLetter = /[a-z]/.test(event)
    let hasSpecial = /[@#$%&*]/.test(event)
    let checkFirstAlphabet = event.charAt(0)
    if (!(checkFirstAlphabet >= "A" && checkFirstAlphabet <= "Z" || checkFirstAlphabet >= "a" && checkFirstAlphabet <= "z")) {
      setErrorPassword("Password must start with alphabet")
    }
    else if (event.trim() && hasCaps && hasNums && hasSmallLetter && hasSpecial) {
      setErrorPassword("")
      setPassword(event)
    }
    else {
      setErrorPassword("Password should contain atleast one \n Uppercase letter, lowercase letter, \n number and special characters &*@$. ")
    }
  }

  //After matching  field navigate according their user_type
  function MatchFields(data) {
    let User = data.filter(type => {
      if (type.email === email && type.password === password && type.user_type === usertype) {

        setError("")
        navigate(`/${usertype}`)

        dispatch(login({
          username: type.username,
          email,
          password
        }))

      }
      else {
        setError("User doesn't exist!");
      }
    })
    return User;
  }

  return (
    <div className='container'>
      <div className="row mt-5" >
        <div className="col-md-6" style={{ margin: "auto" }}>

          <div className="bg-primary text-light text-center py-3 rounded mb-3 mt-3">
            <h2>Login Here</h2>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label" type="email" >Email:</label>
            <div className="col-sm-9">
              <input onChange={(event) => {
                setEmail(event.target.value)
                checkEmail(event.target.value)
              }} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" required />
              <p className='text-danger'>{errorEmail}</p>
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label" type="password">Password :</label>
            <div className="col-sm-9">
              <input onChange={(event) => {
                setPassword(event.target.value)
                checkPassword(event.target.value)
              }} type="password" className="form-control" id="exampleFormControlInput2" placeholder="Enter your password" required />
              <p className='text-danger'>{errorPassword}</p>
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-3 col-form-label">User Type:</label>
            <div className="col-sm-9">
              <select onChange={(event) => setUserType(event.target.value)} className="form-select">
                <option >Select type</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
                <option value="Supervisor">Supervisor</option>
              </select>
            </div>
          </div>

          <div className="mb-3 row">
            {!error ? <p></p> : <p className="col-sm-12 text-danger">{error}</p>}
          </div>

          <div className="mb-3 row">
            <div className="col-sm-12">
              <button data-testid="button" className='btn btn-success col-12 bg-primary' type="submit" disabled={!email || !password || !usertype} onClick={() => MatchFields(data)}>Login</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
