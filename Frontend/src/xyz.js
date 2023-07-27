import React, { useState } from 'react';
import axios from 'axios';

const AttendancePage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [attendanceDetails, setAttendanceDetails] = useState([]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const formatDate = (date) => {
    const selectedDate = new Date(date);
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const day = String(selectedDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const fetchAttendanceDetails = () => {
    const formattedDate = formatDate(selectedDate);
    // Replace 'YOUR_BACKEND_API_ENDPOINT' with your actual API endpoint URL
    console.log(formattedDate)
    axios.get(`attendance/filter/${selectedDate}`)
    .then((response) => {
          console.log(response);
        setAttendanceDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching attendance details:', error);
      });
  };

  return (
    <div>
      <h1>Attendance Details</h1>
      <input type="string" value={selectedDate} onChange={handleDateChange} />
      <button onClick={fetchAttendanceDetails}>Fetch Details</button>

      {/* Display the attendance details */}
      <div>
        {attendanceDetails.map((attendance) => (
          <div key={attendance.id}>
            <p>Student ID: {attendance.student.stu_id}</p>
            <p>Student Name: {attendance.student.stu_name}</p>
            <p>Status: {attendance.status}</p>
            <p>Session: {attendance.session}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendancePage;
