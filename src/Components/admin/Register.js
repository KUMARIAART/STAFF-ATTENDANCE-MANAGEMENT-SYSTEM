import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";


const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [type, setType] = useState("Staff")
    const [gender, setGender] = useState("")
    const [mail, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [errorUsername, setErrorUsername] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")
    const [errorAddress, setErrorAddress] = useState("")

    const checkUsername = (event) => {
        if (!event.trim()) {
            setErrorUsername("Username can't be empty")
        }
        else if (event.length < 5 || event.length > 15) {
            setErrorUsername("Username length must be minimum 5 and maximum 15")
        }
        else {
            setUsername(event)
            setErrorUsername("")
        }
    }

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

    const checkConfirmPassword = (event) => {
        if (event === password) {
            setconfirmPassword(event)
            setErrorConfirmPassword("")
        }
        else {
            setErrorConfirmPassword("ConfirmPassword and Password not matched")
        }
    }

    const checkAddress = (event) => {
        if (!event.trim()) {
            setErrorAddress("Address can't empty")
        }
        else {
            setAddress(event)
            setErrorAddress("")
        }
    }

    // Adding member in JSON server
    const submit = () => {
        let memberObj = {
            "id": uuidv4(),
            "username": username,
            "email": mail,
            "password": password,
            "user_type": type,
            "gender": gender,
            "address": address
        }
        fetch("http://localhost:3001/Members", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(memberObj)
        }).then(res => {
            if (res.status == 200) {
                alert("Member added sucessfully")
                return res.json()
            }
            else {
                return Promise.reject(res.status)
            }
        }).then(data => {
            return data
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='container'>
            <div className="row justify-content-md-center mt-5" style={{ margin: "auto" }} >
                <div className="col-md-8" >

                    <div className="bg-primary text-light text-center py-3 rounded mb-3 mt-3">
                        <h2 data-testid='heading'>Registration Form</h2>
                    </div>

                    <form>
                        <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label">Username:</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => {
                                    checkUsername(e.target.value)
                                }} placeholder="Username" required />
                                <p className='text-danger'>{errorUsername}</p>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label">Email:</label>
                            <div className="col-sm-9">
                                <input type="email" className="form-control" id="exampleFormControlInput5" onChange={(e) => {
                                    checkEmail(e.target.value)
                                }} placeholder="email" required />
                                <p className='text-danger'>{errorEmail}</p>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label">Password:</label>
                            <div className="col-sm-9">
                                <input type="password" className="form-control" id="exampleFormControlInput2" onChange={(e) => {
                                    checkPassword(e.target.value)
                                }} placeholder="Password" required />
                                <p className='text-danger'>{errorPassword}</p>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label">Confirm Password:</label>
                            <div className="col-sm-9">
                                <input type="password" className="form-control" id="exampleFormControlInput3" onChange={(e) => {
                                    checkConfirmPassword(e.target.value)
                                }} placeholder="Confirm Password" required />
                                <p className='text-danger'>{errorConfirmPassword}</p>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label">User type:</label>
                            <div onChange={(e) => { setType(e.target.value) }} className="col-sm-9">
                                <select className="form-select" >
                                    <option>Select one option</option>
                                    <option value="Staff">Staff</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Supervisor">Supervisor</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label">Gender:</label>
                            <div className="col-sm-9" onChange={(e) => setGender(e.target.value)} >
                                <div className="form-check form-check-inline">
                                    <input style={{ border: "0.1vw solid black" }} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input style={{ border: "0.1vw solid black" }} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label">Address:</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="exampleFormControlInput4" onChange={(e) => {
                                    checkAddress(e.target.value)
                                }} placeholder="Address" required />
                                <p className='text-danger'>{errorAddress}</p>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <div className="col-sm-12">
                                <button data-testid='button' type='submit' className='btn btn-success col-12 bg-primary'
                                    disabled={!username || !mail || !password || !confirmPassword || !gender || !address}
                                    onClick={() => {
                                        submit()
                                    }}
                                >Add Members</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;