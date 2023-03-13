import React, { useState, useEffect } from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function AttendanceByDate() {
    const [user, setuser] = useState([]);
    const [date, setdate] = useState('');
    const [flag, setFlag] = useState(false);

    // fetching data from attendance server
    useEffect(() => {
        fetch('http://localhost:3002/attendance')
            .then(res => res.json())
            .then(data => {
                setuser(data);
            })
            .catch(error => console.log(error))
    }, [])

    const search = () => {
        user.map((item) => {
            if (item['date'][date]) {
                setFlag(true);
            }
        })
    }

    const exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape

        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        doc.setFontSize(15);

        const title = `${date}  Report`;
        const headers = [["Username", "Email", "Status"]];

        const data = user.map((elt, index) => {
            if (elt["date"][date]) {
                return [elt.username, elt.email, elt["date"][date]]
            }
        });

        let content = {
            startY: 50,
            head: headers,
            body: data
        };

        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("reportofdate.pdf")
    }
    return (
        <div className='container align-self-center'>
            <div className="row mt-5" >
                <div className="col-md-6" style={{ margin: "auto" }}>
                    <form>

                        <div className="bg-primary text-light text-center py-3 rounded mb-3 mt-3">
                            <h2>Attendance Report By Date</h2>
                        </div>

                        <div className="mb-3 row">
                            <label className="col-sm-2 col-form-label">Date:</label>
                            <div className="col-sm-9">
                                <input className="form-control" type='date' placeholder='enter your name' onChange={e => {
                                    setFlag(false)
                                    setdate(e.target.value)
                                }}></input>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <div className="col-sm-12">
                                <button type='button' className='btn btn-success col-12 bg-primary'
                                    disabled={!date}
                                    onClick={() => {
                                        search()
                                    }}
                                >Search</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <hr/>
            {flag ?
                <div >
                    
                    <button className='btn btn-success bg-secondary' style={{marginLeft:'25%'}} onClick={() => exportPDF()}>Generate Report</button>
                    
                    <table className="table table-bordered border-primary align-center mt-5" style={{ width: "50%", margin: "auto"}}>
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

                            {user.map((item, index) => {
                                return item['date'][date] ?
                                    <tr key={index} className='row'>
                                        <td className='col-6'>{item.username}</td>
                                        <td className='col-6'>{item['date'][date]}</td>
                                    </tr> : null
                            })}

                        </tbody>
                    </table>
                </div> :
                <h2 className='text-center' style={{ margin: "auto", marginTop: "5vh" }}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOBo2HfwSuyZ-cLJFIGnz3-HqAuhopFwjEA&usqp=CAU' /></h2>
            }
        </div>

    )
}
