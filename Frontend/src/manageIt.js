import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './managestudent.css';
import TNavbar from './teachernavbar';

function ManageIT() {
  const [students, setStudents] = useState([]);
  const [department, setDepartment] = useState('IT');
  const [classYear, setClassYear] = useState('I year');
  const [section, setSection] = useState('A');
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [session1PresentCount, setSession1PresentCount] = useState(0);
  const [session1AbsentCount, setSession1AbsentCount] = useState(0);
  const [session2PresentCount, setSession2PresentCount] = useState(0);
  const [session2AbsentCount, setSession2AbsentCount] = useState(0);

  // Fetch students on component mount and when the selected date changes
  useEffect(() => {
    fetchStudents(selectedDate);
  }, [selectedDate]);

  const fetchStudents = async (date) => {
    try {
      if (date === null) {
        console.error('Please select a date.');
        return;
      }

      const formattedDate = formatDate(date); // Helper function to format the date in the required format

      const response = await axios.get(
        `http://localhost:8080/api/v1/auth/students/filter/${department}/${classYear}/${section}?date=${formattedDate}`
      );
      if (response.status === 200) {
        // Assuming the backend returns session1 and session2 properties for each student
        const studentsData = response.data.map((student) => ({
          ...student,
          session1: student.session1 === 'Present' ? 'P' : '',
          session2: student.session2 === 'Present' ? 'P' : '',
        }));
        setStudents(studentsData);
      } else {
        console.error('Failed to fetch students:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleInputChange = async (studentId, session, value) => {
    try {
      // Check if the selected date is a government holiday or future date
      const isGovernmentHoliday = checkIfGovernmentHoliday(selectedDate);
      const isFutureDate = checkIfFutureDate(selectedDate);

      if (isGovernmentHoliday) {
        console.error('Cannot mark attendance on a government holiday.');
        return;
      }

      if (isFutureDate) {
        console.error('Cannot mark attendance for future dates.');
        return;
      }

      // If the selected date is not today, do not allow editing the attendance
      if (!isToday(selectedDate)) {
        console.error('Attendance can only be edited for today.');
        return;
      }

      const status = value.trim().toUpperCase(); // Convert the input to uppercase after trimming

      // If the input is not 'P' or 'A', set the status to empty
      const finalStatus = status === 'P' || status === 'A' ? status : '';

      const attendanceData = {
        date: selectedDate,
        status: finalStatus,
        session: session,
        student: {
          stu_id: studentId,
        },
      };

      const response = await axios.post('http://localhost:8080/api/v1/auth/attendance', attendanceData);
      if (response.status === 201) {
        console.log('Attendance updated successfully!');
        // Update the students' data after successfully updating attendance
        const updatedStudents = students.map((student) => {
          if (student.stu_id === studentId) {
            return {
              ...student,
              [session === 'Session 1' ? 'session1' : 'session2']: finalStatus,
            };
          }
          return student;
        });
        setStudents(updatedStudents);
      } else {
        console.error('Failed to update attendance:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating attendance:', error);
    }
  };

  const handleSession1ButtonClick = () => {
    // Calculate the number of present and absent students for Session 1
    const presentCount = students.filter((student) => student.session1 === 'P').length;
    const absentCount = students.filter((student) => student.session1 === 'A').length;
    setSession1PresentCount(presentCount);
    setSession1AbsentCount(absentCount);
  };

  const handleSession2ButtonClick = () => {
    // Calculate the number of present and absent students for Session 2
    const presentCount = students.filter((student) => student.session2 === 'P').length;
    const absentCount = students.filter((student) => student.session2 === 'A').length;
    setSession2PresentCount(presentCount);
    setSession2AbsentCount(absentCount);
  };

  const checkIfGovernmentHoliday = (date) => {
    // Add logic here to check if the selected date is a government holiday
    // You can store the list of government holidays in a separate array or fetch it from the backend.
    // For this example, we'll assume there are no government holidays.
    return false;
  };

  const checkIfFutureDate = (date) => {
    // Compare the selected date with the current date to check if it's a future date.
    return date > currentDate;
  };

  const isToday = (date) => {
    const formattedCurrentDate = new Date(currentDate).setHours(0, 0, 0, 0);
    const formattedSelectedDate = new Date(date).setHours(0, 0, 0, 0);
    return formattedSelectedDate === formattedCurrentDate;
  };

  // Helper function to format the date in the required format (dd/MM/yyyy)
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Function to handle date selection in the DatePicker
  const handleDateChange = (date) => {
    // Update the selected date when the user picks a date from the DatePicker
    setSelectedDate(date);
  };

  return (
    <div className='manage'>
    <TNavbar/>
    <div className='m-bg'>
      <h1>Manage Students</h1>
      <div>
        <label>
          Department:
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="IT">IT</option>
          </select>
        </label>
        <label>
          Year:
          <select value={classYear} onChange={(e) => setClassYear(e.target.value)}>
            <option value="I year">I</option>
            <option value="II year">II</option>
            <option value="III year">III</option>
            <option value="IV year">IV</option>
          </select>
        </label>
        <label>
          Section:
          <select value={section} onChange={(e) => setSection(e.target.value)}>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </label>
        <label>
          Date:
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            todayButton="Today"
          />
        </label>
        <button onClick={fetchStudents}>Fetch Students</button>
      </div>
      <br /><br /><br />
      {students.length === 0 ? (
        <div>No students found for the selected class, department, and section.</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Session 1</th>
              <th>Session 2</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.stu_id}>
                <td>{student.stu_id}</td>
                <td>{student.stu_name}</td>
                <td>
                  {isToday(selectedDate) ? (
                    <input
                      type="text"
                      value={student.session1}
                      onChange={(e) => handleInputChange(student.stu_id, 'Session 1', e.target.value)}
                      disabled={selectedDate > currentDate}
                    />
                  ) : (
                    <span>{student.session1}</span>
                  )}
                </td>
                <td>
                  {isToday(selectedDate) ? (
                    <input
                      type="text"
                      value={student.session2}
                      onChange={(e) => handleInputChange(student.stu_id, 'Session 2', e.target.value)}
                      disabled={selectedDate > currentDate}
                    />
                  ) : (
                    <span>{student.session2}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div>
      <br></br>
        <button onClick={handleSession1ButtonClick} disabled={students.some((student) => student.session1 === '')}>
          Session 1
        </button>
        <span>Present: {session1PresentCount}</span>
        <span>Absent: {session1AbsentCount}</span>
      </div>
      <div>
        <button onClick={handleSession2ButtonClick} disabled={students.some((student) => student.session2 === '')}>
          Session 2
        </button>
        <span>Present: {session2PresentCount}</span>
        <span>Absent: {session2AbsentCount}</span>
      </div>
      </div>
    </div>
  );
}

export default ManageIT;
