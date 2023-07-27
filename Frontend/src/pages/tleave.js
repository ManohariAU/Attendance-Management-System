import React, { useState, useEffect } from 'react';
import './styles.css';
import TNavbar from '../teachernavbar';
import axios from 'axios';

function TLeave() {
  const [leaveDetails, setLeaveDetails] = useState([]);

  const fetchLeaveDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/auth/leave-details');
      setLeaveDetails(response.data);
    } catch (error) {
      console.error('Error fetching leaveDeta:', error);
    }
  };

  useEffect(() => {
    fetchLeaveDetails();
  }, []);

  return (
    <div className='leave'>
      <TNavbar />
      <div className='leave-bg'>
        <div className='ltext'>Review Leave</div>
        <center><div>History of Leaves</div></center>
      <div className='lbox-container'>
        {leaveDetails.map((leave) => (
          <div className='lbox' key={leave.id}>
            <p>Leave Id: {leave.leave_id}</p>
            <p>Student Id: {leave.stu_id}</p>
            <p>Student Name: {leave.stu_name}</p>
            <p>Start Date: {leave.start_date}</p>
            <p>End Date: {leave.end_date}</p>
            <p>Status : Pending</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default TLeave;
