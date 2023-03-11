
import React, { useState, useEffect } from 'react'
export default function AttendanceByName() {
    const [user1, setuser1] = useState([])
    const [name, setname] = useState('')

    useEffect(() => {

        fetch('http://localhost:3002/attendance')
            .then(res1 => res1.json())
            .then(data1 => {
                setuser1(data1)
            })
    }, [])
    return (
        <div className='container'>
            <div className="row mt-5" >
                <div className="col-md-6" style={{ margin: "auto" }}>
                    <form>
                        <div className="bg-primary text-light text-center py-3 rounded mb-3 mt-3">
                            <h2>Attendance Report By Name</h2>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label">Date:</label>
                            <div className="col-sm-9">
                                <input className="form-control" type='text' placeholder='Enter Your Name' onChange={e => setname(e.target.value)}></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {user1.length > 0 ?
                <table className="table table-bordered border-primary align-center mt-5" style={{ width: "50%", margin: "auto" }}>
                    <thead className='table-primary'>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Attendence</th>
                        </tr>
                    </thead>
                    <tbody>

                        {user1.map((item, index) => {
                            if (item.username.toLowerCase() === name.toLowerCase()) {
                                let key_array = Object.keys(item.date)
                                let value_array = Object.values(item.date)
                                let Name = item.username
                                console.log(value_array)
                                return <tr>
                                    <td>{Name}</td>
                                    <td>
                                        {key_array.map((item, index) => { return (<tr> <td> {item}</td> </tr>) })}
                                    </td>
                                    <td>
                                        {value_array.map((item, index) => { return (<tr> <td> {item}</td> </tr>) })}
                                    </td>
                                </tr>
                            }
                        })}
                    </tbody>
                </table> :
                <h2 style={{ margin: "auto", marginTop: "5vh" }}>No data is added!</h2>
            }
        </div>
    )
}
