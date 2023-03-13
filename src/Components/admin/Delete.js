import { useState, useEffect } from "react"

const DleleteEmploye = () => {
    const [membersEmail, setMembersEmail] = useState("");
    const [membersPassword, setmeMbersPassword] = useState("");
    const [status, setStatus] = useState("");
    const [staffStatus, setStaffStatus] = useState("");

    useEffect(() => {

         // fetching the data from member JSON server
        fetch("http://localhost:3001/Members")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setStatus(data)
            }).catch(error => {
                console.log(error);
            })

         // fetching the data from attendance JSON server
        fetch("http://localhost:3002/attendance")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setStaffStatus(data)
            }).catch(error => {
                console.log(error);
            })

    }, []);

    //Delete from member JSON server
    const DeleteMembers = () => {
        let unique;
        let unique1 = status.find((item) => {
            if (item.email === membersEmail && item.password === membersPassword) {
                unique = item.id
                return
            }
        })
        fetch(`http://localhost:3001/Members/${unique}`, {
            method: 'DELETE'
        }).then(res => {
            if (res.status === 200) {
                alert("member Removed Sucessfully")
            } else {
                alert("An error occurred while removing member")
            }
        }).catch(error => {
            console.log(error);
        })
    }

    // Delete from attendance JSON server
    const DeleteAttendance = () => {
        let uniqueId;
        let flag = true
        let unique2 = staffStatus.find((item) => {
            if (item.email === membersEmail && item.password === membersPassword) {
                flag = false
                uniqueId = item.id
                return
            }
        })
        if (flag) {
            alert("Invalid user detail")
        }
        else {
            fetch(`http://localhost:3002/attendance/${uniqueId}`, {
                method: 'DELETE'
            })
        }
    }

    const Delete = () => {
        DeleteMembers();
        DeleteAttendance();
        setMembersEmail("")
        setmeMbersPassword("")
    }

    return (
        <div className="container">
            <div className="row mt-5" >
                <div className="col-md-6" style={{ margin: "auto" }}>

                    <div className="bg-primary text-light text-center py-3 rounded mb-3 mt-3">
                        <h2>Delete Member</h2>
                    </div>

                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label">User Email:</label>
                        <div className="col-sm-9">
                            <input onChange={(event) => setMembersEmail(event.target.value)} value={membersEmail} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter User Email" required />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label">User Password:</label>
                        <div className="col-sm-9">
                            <input onChange={(event) => setmeMbersPassword(event.target.value)} value={membersPassword} type="password" className="form-control" id="exampleFormControlInput2" placeholder="Enter Your Password" required />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <div className="col-sm-12">
                            <button className='btn btn-success col-12 bg-primary' type="button" disabled={!membersEmail || !membersPassword} onClick={() => {
                                Delete();
                            }}>Dlelete</button>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}
export default DleleteEmploye;