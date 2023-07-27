import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './apply.css';
import TNavbar from './teachernavbar';

const MainPage = () => {
  const [students, setStudents] = useState([]);
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [classYearFilter, setClassYearFilter] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/auth/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAddStudent = async (student) => {
    const isDuplicate = students.some((existingStudent) => existingStudent.stu_id === student.stu_id);
    if (isDuplicate) {
      alert(`Student with ID ${student.stu_id} already exists and will not be added!`);
    } else {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/students', student);
        setStudents((prevStudents) => [...prevStudents, response.data]);
      } catch (error) {
        alert('Error adding student:', error);
      }
    }
  };

  const handleDeleteStudent = async (studentId) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/auth/students/${studentId}`);
      setStudents((prevStudents) => prevStudents.filter((student) => student.stu_id !== studentId));
    } catch (error) {
      alert('Error deleting student:', error);
    }
  };

  const filteredStudents = students.filter((student) => {
    const matchesDepartment = !departmentFilter || student.dept_name.toLowerCase() === departmentFilter.toLowerCase();
    const matchesClassYear = !classYearFilter || student.class_year === classYearFilter;
    const matchesSection = !sectionFilter || student.section.toLowerCase() === sectionFilter.toLowerCase();
    return matchesDepartment && matchesClassYear && matchesSection;
  });

  const handleEditStudent = (studentId) => {
    // Find the selected student using the studentId
    const selectedStudent = students.find((student) => student.stu_id === studentId);
    setSelectedStudent(selectedStudent); // Set the selected student to the state
  };
  const handleUpdateStudent = async (updatedStudent) => {
    try {
      await axios.put(`http://localhost:8080/api/v1/auth/students/${updatedStudent.stu_id}`, updatedStudent);
      setStudents((prevStudents) => prevStudents.map((student) => (student.stu_id === updatedStudent.stu_id ? updatedStudent : student)));
      setSelectedStudent(null); // Clear the selected student after updating
      alert('Student updated successfully!');
    } catch (error) {
      alert('Error updating student:', error);
    }
  };
  const handleChange = (e, student) => {
    const { name, value } = e.target;
    setSelectedStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };
  const departmentOptions = ['CSE', 'IT', 'ECE', 'EEE'];
  const classYearOptions = ['I year', 'II year', 'III year', 'IV year'];
  const sectionOptions = ['A', 'B'];

  return (
    <div className="admin-add">
    <TNavbar/>
    <div className='admin-add-bg'>
      <center><h1>Student Management System</h1></center>
      <center>
      <div>
        <select value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)}>
          <option value="">All Departments</option>
          {departmentOptions.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>

        <select value={classYearFilter} onChange={(e) => setClassYearFilter(e.target.value)}>
          <option value="">All Class Years</option>
          {classYearOptions.map((classYear) => (
            <option key={classYear} value={classYear}>
              {classYear}
            </option>
          ))}
        </select>

        <select value={sectionFilter} onChange={(e) => setSectionFilter(e.target.value)}>
          <option value="">All Sections</option>
          {sectionOptions.map((section) => (
            <option key={section} value={section}>
              {section}
            </option>
          ))}
        </select>

        <Link to="/add1">
        <button>Add Student</button>
      </Link>
      </div>
            </center>

      {filteredStudents.length > 0 ? (
        <div>
          <center><h2>Students List:</h2></center>
          <center>
          <table>
            <thead>
              <tr className="table-header">
                <th className="table-cell">Roll No</th>
                <th className="table-cell">Name</th>
                <th className="table-cell">Class Year</th>
                <th className="table-cell">Section</th>
                <th className="table-cell">Department</th>
                <th className="table-cell">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.stu_id} className="table-row">
                  <td className="table-cell">{student.stu_id}</td>
                  <td className="table-cell">{student.stu_name}</td>
                  <td className="table-cell">{student.class_year}</td>
                  <td className="table-cell">{student.section}</td>
                  <td className="table-cell">{student.dept_name}</td>
                  <td className="table-cell">
                  <EditIcon
                      onClick={() => handleEditStudent(student.stu_id)}
                      style={{ cursor: 'pointer', color: 'black' }}
                    />
                    <DeleteIcon
                      onClick={() => handleDeleteStudent(student.stu_id)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </center>
        </div>
      ) : (
        <p>No students found.</p>
      )}
      {/* Edit Student Form */}
      {selectedStudent && (
        <div className="edit-form">
          <h2>Edit Student</h2>
          <form onSubmit={() => handleUpdateStudent(selectedStudent)}>
            <div className="form-group">
              <label htmlFor="stu_id">Roll No:</label>
              <input
                type="number"
                id="stu_id"
                name="stu_id"
                value={selectedStudent.stu_id}
                onChange={(e) => handleChange(e, selectedStudent)}
                required
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="stu_name">Name:</label>
              <input
                type="text"
                id="stu_name"
                name="stu_name"
                value={selectedStudent.stu_name}
                onChange={(e) => handleChange(e, selectedStudent)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="stu_gender">Gender:</label>
              <input
                type="text"
                id="stu_gender"
                name="stu_gender"
                value={selectedStudent.stu_gender}
                onChange={(e) => handleChange(e, selectedStudent)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="stu_phno">Phone Number:</label>
              <input
                type="text"
                id="stu_phno"
                name="stu_phno"
                value={selectedStudent.stu_phno}
                onChange={(e) => handleChange(e, selectedStudent)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={selectedStudent.email}
                onChange={(e) => handleChange(e, selectedStudent)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="class_year">Class Year:</label>
              <input
                type="text"
                id="class_year"
                name="class_year"
                value={selectedStudent.class_year}
                onChange={(e) => handleChange(e, selectedStudent)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="section">Section:</label>
              <input
                type="text"
                id="section"
                name="section"
                value={selectedStudent.section}
                onChange={(e) => handleChange(e, selectedStudent)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dept_name">Department:</label>
              <input
                type="text"
                id="dept_name"
                name="dept_name"
                value={selectedStudent.dept_name}
                onChange={(e) => handleChange(e, selectedStudent)}
                required
              />
            </div>
            <button type="submit">Update Student</button>
          </form>
        </div>
      )}
    </div>
    </div>
  );
};

export default MainPage;
