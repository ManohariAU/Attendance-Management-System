import React, { useState, useEffect } from 'react';
import './managestudents.css';

const AttendanceTable = () => {
  const initialStudents = [
    // Add your student data here with an additional property for each session
    { id: 1, name: 'Student 1', session1: false, session2: false, session3: false, session4: false, session5: false },
    // Add other students' data similarly...
  ];

  const [students, setStudents] = useState(initialStudents);
  const [totalPresentees, setTotalPresentees] = useState(new Array(5).fill(0));
  const [totalAbsentees, setTotalAbsentees] = useState(new Array(5).fill(0));
  const [selectedSession, setSelectedSession] = useState(1); // Initialize the selected session as 1 (Session 1)

  useEffect(() => {
    // Load attendance data from localStorage on page load
    const attendanceData = JSON.parse(localStorage.getItem('attendanceData'));
    if (attendanceData) {
      setStudents(attendanceData.students);
      setTotalPresentees(attendanceData.totalPresentees);
      setTotalAbsentees(attendanceData.totalAbsentees);
    }
  }, []);

  useEffect(() => {
    // Save attendance data to localStorage whenever students or attendance counts change
    const attendanceData = {
      students: students,
      totalPresentees: totalPresentees,
      totalAbsentees: totalAbsentees,
    };
    localStorage.setItem('attendanceData', JSON.stringify(attendanceData));
  }, [students, totalPresentees, totalAbsentees]);

  const handleAttendanceChange = (id, session) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, [session]: !student[session] } : student
    );
    setStudents(updatedStudents);
    updateAttendanceCounts(updatedStudents);
  };

  const updateAttendanceCounts = (updatedStudents) => {
    const sessionCount = 5; // Number of sessions

    // Initialize arrays to store presentees and absentees for each session
    const presentCounts = new Array(sessionCount).fill(0);
    const absentCounts = new Array(sessionCount).fill(0);

    updatedStudents.forEach((student) => {
      for (let i = 1; i <= sessionCount; i++) {
        const sessionKey = `session${i}`;
        if (student[sessionKey]) {
          presentCounts[i - 1]++;
        } else {
          absentCounts[i - 1]++;
        }
      }
    });

    setTotalPresentees(presentCounts);
    setTotalAbsentees(absentCounts);
  };

  const handleSessionChange = (sessionNumber) => {
    setSelectedSession(sessionNumber);
  };

  // Calculate the presentees and absentees for the selected session
  const presenteesCount = totalPresentees[selectedSession - 1];
  const absenteesCount = totalAbsentees[selectedSession - 1];

  return (
    <div>
      <div>
      <br/><br/><br/><br/>
        <label>Select Session:</label>
        <select value={selectedSession} onChange={(e) => handleSessionChange(e.target.value)}>
          <option value={1}>Session 1</option>
          <option value={2}>Session 2</option>
          <option value={3}>Session 3</option>
          <option value={4}>Session 4</option>
          <option value={5}>Session 5</option>
        </select>
      </div>
      <br/><br/><br/>
      <table className='at'>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Session 1</th>
            <th>Session 2</th>
            <th>Session 3</th>
            <th>Session 4</th>
            <th>Session 5</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>
                <input
                  type="checkbox" style={{width:'24px',height:'24px'}}
                  checked={student.session1}
                  onChange={() => handleAttendanceChange(student.id, 'session1')}
                  className="mark-box"
                />
              </td>
              <td>
                <input
                  type="checkbox" style={{width:'24px',height:'24px'}}
                  checked={student.session2}
                  onChange={() => handleAttendanceChange(student.id, 'session2')}
                  className="mark-box"
                />
              </td>
              <td>
                <input
                  type="checkbox" style={{width:'24px',height:'24px'}}
                  checked={student.session3}
                  onChange={() => handleAttendanceChange(student.id, 'session3')}
                  className="mark-box"
                />
              </td>
              <td>
                <input
                  type="checkbox" style={{width:'24px',height:'24px'}}
                  checked={student.session4}
                  onChange={() => handleAttendanceChange(student.id, 'session4')}
                  className="mark-box"
                />
              </td>
              <td>
                <input
                  type="checkbox" style={{width:'24px',height:'24px'}}
                  checked={student.session5}
                  onChange={() => handleAttendanceChange(student.id, 'session5')}
                  className="mark-box"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {/* Pop-up box */}
        {selectedSession && (
          <div className="popup">
            <span className="popup-content">
              <h3>Session {selectedSession}</h3>
              <p>Total Presentees: {presenteesCount}</p>
              <p>Total Absentees: {absenteesCount}</p>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceTable;