import { Link } from "react-router-dom";
const About = () => {
    return (
        <div className="container">

            <div className="card mb-3">
                <img style={{ width: "50vw", height: "50vh" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lkhvMOYvp02TXD6D6nEGxUJESv4Hfn_FKw&usqp=CAU" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">Staff Attendance Management System</h2>
                    <p className="card-text">The Attendance Management System project was developed to help employers track and monitor  their employees.
                        An attendance management system monitors absence,presents and leave.
                        Online attendance software reduces the need for paper, spreadsheets, and punching time cards. Employees are not
                        allowed to steal time under this approach. A real-time attendance management system
                        integrates all of the various types of attendance devices that users utilize, including smart
                        cards, biometrics, and facial recognition device.
                    </p>
                </div>
            </div>

        </div>
    )
}
export default About;