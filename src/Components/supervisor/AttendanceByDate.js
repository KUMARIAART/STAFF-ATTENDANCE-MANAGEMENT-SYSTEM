import React, { useState, useEffect } from 'react'
export default function AttendanceByDate() {
    const [user1, setuser1] = useState([])
    const [date, setdate] = useState('')

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
                            <h2>Attendance Report By Date</h2>
                        </div>
                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Date:</label>
                            <div className="col-sm-9">
                                <input className="form-control" type='date' placeholder='enter your name' onChange={e => setdate(e.target.value)}></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {user1.length > 0 ?
                <table className="table table-bordered border-primary align-center mt-5" style={{ width: "50%", margin: "auto" }}>
                    <thead className='table-primary'>
                        <tr className='row'>
                            <th className='col-12'>Date: {date}</th>
                        </tr>
                        <tr className='row'>

                            <th className='col'>Name</th>
                            <th className='col'>Attendence</th>
                        </tr>
                    </thead>
                    <tbody>

                        {user1.map((item, index) => {
                            return item['date'][date] ?
                                <tr key={index} className='row'>
                                    <td className='col-6'>{item.username}</td>
                                    <td className='col-6'>{item['date'][date]}</td>
                                </tr> : null
                        })}

                    </tbody>
                </table> :
                <h2 style={{ margin: "auto", marginTop: "5vh" }}>No data is added!</h2>
            }
        </div>

    )
}
