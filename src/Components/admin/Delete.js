import { useState, useEffect } from "react"
const DleleteEmploye = () => {
    const [employeName, setEmployeName] = useState("");
    const [employePassword, setEmployePassword] = useState("");
    const [status, setStatus] = useState("");
    useEffect(() => {
        fetch("http://localhost:3001/Members")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setStatus(data)
            })
    }, []);
    function deleteData() {
        let unique;
        let unique1=status.find((item)=>{
            if(item.username===employeName && item.password===employePassword){
                unique=item.id
                return 
            }
        })
        fetch(`http://localhost:3001/Members/${unique}`, {
            method: 'DELETE'
        })
    }
    return (
        <>
            <div className="row mt-5" >
                <div className="col-md-6" style={{ margin: "auto" }}>
                    <div className="bg-primary text-light text-center py-3 rounded mb-3 mt-3">
                        <h2>Dlelete Member</h2>
                    </div>

                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label">User Name:</label>
                        <div className="col-sm-9">
                            <input onChange={(event) => setEmployeName(event.target.value)} type="text" className="form-control" id="exampleFormControlInput2" placeholder="Enter User Name" required />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label">User Password:</label>
                        <div className="col-sm-9">
                            <input onChange={(event) => setEmployePassword(event.target.value)} type="password" className="form-control" id="exampleFormControlInput2" placeholder="Enter Your Password" required />
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <div className="col-sm-12">
                            <button className='btn btn-success col-12 bg-primary' onClick={() => {
                                deleteData();
                            }}>Dlelete</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default DleleteEmploye;