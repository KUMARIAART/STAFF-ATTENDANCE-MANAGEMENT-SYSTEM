import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import moment from 'moment';

export default function Staff() {
  let [membersAttendanceDetail, setMembersAttendanceDetail] = useState([]);
  let [date, setDate] = useState("");
  let [presentOrLeave, setPresentOrLeave] = useState("");
 
  // useSelector is allow user to use dispatched data
  const {username,email,password} = useSelector(temp => temp.user.value)
  
  // Date dropdown array
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  arr[0] = moment().subtract(3, 'days').format("YYYY-MM-DD");
  arr[1] = moment().subtract(2, 'days').format("YYYY-MM-DD");
  arr[2] = moment().subtract(1, 'days').format("YYYY-MM-DD");
  arr[3] = moment().subtract(0, 'days').format("YYYY-MM-DD");
  arr[4] = moment().add(1, 'days').format("YYYY-MM-DD");
  arr[5] = moment().add(2, 'days').format("YYYY-MM-DD");
  arr[6] = moment().add(3, 'days').format("YYYY-MM-DD");
  arr[7] = moment().add(4, 'days').format("YYYY-MM-DD");
  arr[8] = moment().add(5, 'days').format("YYYY-MM-DD");
  arr[9] = moment().add(6, 'days').format("YYYY-MM-DD");
  arr[10] = moment().add(7, 'days').format("YYYY-MM-DD");

 // GET METHOD
  const fetchData=() => {
    fetch("http://localhost:3002/attendance")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        else {
          return Promise.reject(response.status);
        }
      })
      .then(data => {
        setMembersAttendanceDetail(data);
        return data;
      })
      .catch(error => console.log(error));

  };

  // Attendance marking function
  let postAttendance = (date, presentOrLeave) => {
    fetchData()
    let id;
    let exist = false;
    let attendance = membersAttendanceDetail.find((item) => {
      if ((item.email === email && item.password === password)) {
        id = item.id;
        item["date"][date] = presentOrLeave
        exist = true
        
        return item;
      }
      else {
        exist = false;
      }
    })
    console.log(attendance);
    // PATCH METHOD
    if (exist) {
      return fetch(`http://localhost:3002/attendance/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(attendance)
        }
      )
        .then(response => {
          if (response.ok) {
            alert("Attendance Marked Successfully!")
            return response.json();
          }
          else {
            return Promise.reject(response.status);
          }
        })
        .then(data => console.log(data)
        )
        .catch(error => console.log(error));
    }
    // POST METHOD
    else {
      console.log(date);
      let newUser = {
        "username": username,
        "email": email,
        "password": password,
        "date": {

        }
      }
      newUser.date[date] = presentOrLeave;
      return fetch("http://localhost:3002/attendance",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
        }
      )
        .then(response => {
          if (response.ok) {
            alert("Attendance Marked Successfully!")
            return response.json();
          }
          else {
            return Promise.reject(response.status);
          }
        })
        .then(data => console.log(data))
        .catch(error => console.log(error));
    }
  }

  // Attendance marking form
  return (
    <div>
      <div className="row mt-5" >
        <div className="col-md-4" style={{ margin: "auto" }}>
          <div className="bg-primary text-light text-center py-3 rounded mb-3 mt-3">
            <h2>Mark Attendance</h2>
          </div>
          <div className="mb-4 row">
            {/* Date dropdown field*/}
            <label className="col-sm-2 col-form-label">Date:</label>
            <div className="col-sm-10">
              <select value={date} onChange={(event) => setDate(event.target.value)} className="form-select" >
                <option>Select date</option>

                {arr.map((item, index) => {
                  let backgroundColor;
                  let color;
                  if (item === moment().format("YYYY-MM-DD")) {
                    backgroundColor = "#007BFF";
                    color = "white";
                  }
                  return (
                    <option style={{ backgroundColor: backgroundColor, color: color }} value={item} key={index}>{item}</option>
                  )
                })}

              </select>
            </div>
          </div>
          <div className="mb-4 row">
            {/* Present or leave field */}
            <label htmlFor="attendance" className="col-sm-2 col-form-label">Mark As:</label>
            <div className='col-sm-5' onChange={(event) => setPresentOrLeave(event.target.value)}>

              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Present" style={{ border: "1px solid grey" }} />
                <label className="form-check-label" htmlFor="inlineRadio1">Present</label>
              </div>

              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Leave" style={{ border: "1px solid grey" }} />
                <label className="form-check-label" htmlFor="inlineRadio2">Leave</label>
              </div>
            </div>
          </div>

          <div className="mb-4 row">
            {/* Submit button */}
            <div className="col-sm-12">
              <button data-testid='button' className='btn btn-success col-12 bg-primary' onClick={() => postAttendance(date, presentOrLeave)} disabled={!date || !presentOrLeave}>Submit</button>
            </div>
          </div>
          <div className='mb-3 row'>
            <div className='col-sm-12 text-center mt-4 mb-4'>
              {/* Navigate on login page */}
              <Link to="/" style={{ fontSize: '1.4em' }}>Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
