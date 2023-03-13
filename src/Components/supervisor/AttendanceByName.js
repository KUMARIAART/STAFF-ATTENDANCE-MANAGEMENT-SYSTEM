import React, { useState, useEffect } from 'react'
// import { DownloadTableExcel, useDownloadExcel } from 'react-export-table-to-excel'
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function AttendanceByName() {
    const [user1, setuser1] = useState([])
    const [name, setname] = useState('')
    const [flag, setFlag] = useState(false)
    const [key_array, setKeyArray] = useState([])
    const [value_array, setValueArray] = useState([])
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    // fetching data from attendance server
    useEffect(() => {
        fetch('http://localhost:3002/attendance')
            .then(res1 => res1.json())
            .then(data1 => {
                setuser1(data1)
            }).catch(error => {
                console.log(error)
            })
    }, [])

    const search = () => {
        user1.map((item, index) => {
            if (item.username.toLowerCase() === name.toLowerCase()) {
                setKeyArray(Object.keys(item.date))
                setValueArray(Object.values(item.date))
                setUsername(item.username)
                setEmail(item.email)
                setFlag(true)
                setname("")
            }
        })
        console.log(key_array, value_array)
    }
    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        doc.setFontSize(15);

        const title = `${username} (${email}) Report`;
        const headers = [["Date", "Status"]];

        const data = value_array.map((elt, index) => [key_array[index], value_array[index],]);

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
    }

    return (
        <div className='container'>

            <div className="row mt-5" >
                <div className="col-md-6" style={{ margin: "auto" }}>
                    <form>
                        <div className="bg-primary text-light text-center py-3 rounded mb-3 mt-3">
                            <h2>Attendance Report By Name</h2>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label">Username:</label>
                            <div className="col-sm-9">
                                <input value={name} className="form-control" type='text' placeholder='Enter Your Name' onChange={e => {
                                    setFlag(false)
                                    setname(e.target.value)
                                }}></input>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <div className="col-sm-12">
                                <button type='button' className='btn btn-success col-12 bg-primary'
                                    disabled={!name}
                                    onClick={() => {
                                        search()
                                    }}
                                >Search</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

            {flag ?
                <div>
                    <button className='btn btn-success bg-secondary' style={{marginLeft:'25%'}} onClick={() => exportPDF()}>Generate Report</button>

                    <table className="table table-bordered border-primary align-center mt-5" style={{ width: "50%", margin: "auto" }}>
                        <thead className='table-primary'>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Attendence</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{username}</td>
                                <td>
                                    {key_array.map((item, index) => { return (<tr> <td> {item}</td> </tr>) })}
                                </td>
                                <td>
                                    {value_array.map((item, index) => { return (<tr> <td> {item}</td> </tr>) })}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> :
                <h2 className='text-center' style={{ margin: "auto", marginTop: "5vh" }}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOBo2HfwSuyZ-cLJFIGnz3-HqAuhopFwjEA&usqp=CAU' /></h2>
            }
        </div>
    )
}
