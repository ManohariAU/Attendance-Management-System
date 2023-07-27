import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './apply.css';
import TNavbar from './teachernavbar';

const MainPage2 = () => {
  const [teachers, setTeachers] = useState([]);
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/auth/teachers');
      setTeachers(response.data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleAddTeacher = async (teacher) => {

      try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/teachers', teacher);
        setTeachers((prevTeachers) => [...prevTeachers, response.data]);
      } catch (error) {
        alert('Error adding teacher:', error);
      }
    }

  const handleDeleteTeacher = async (teacherId) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/auth/teachers/${teacherId}`);
      setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher.teacher_id !== teacherId));
    } catch (error) {
      alert('Error deleting teacher:', error);
    }
  };

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesDepartment = !departmentFilter || teacher.dept_name.toLowerCase() === departmentFilter.toLowerCase();

    return matchesDepartment ;
  });

  const handleEditTeacher = (teacherId) => {
    // Find the selected student using the studentId
    const selectedTeacher = teachers.find((teacher) => teacher.teacher_id === teacherId);
    setSelectedTeacher(selectedTeacher); // Set the selected student to the state
  };
  const handleUpdateTeacher = async (updatedTeacher) => {
    try {
      await axios.put(`http://localhost:8080/api/v1/auth/teachers/${updatedTeacher.teacher_id}`, updatedTeacher);
      setTeachers((prevTeachers) => prevTeachers.map((teacher) => (teacher.teacher_id === updatedTeacher.teacher_id ? updatedTeacher : teacher)));
      setSelectedTeacher(null); // Clear the selected student after updating
      alert('Teacher updated successfully!');
    } catch (error) {
      alert('Error updating teacher:', error);
    }
  };
  const handleChange = (e, teacher) => {
    const { name, value } = e.target;
    setSelectedTeacher((prevTeacher) => ({ ...prevTeacher, [name]: value }));
  };
  const departmentOptions = ['CSE', 'IT', 'ECE', 'EEE'];

  return (
    <div className="admin-add">
    <TNavbar/>
    <div className='admin-add-bg'>
      <center><h1>Teacher Management System</h1></center>
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
        <Link to="/addteacher1">
        <button>Add Teacher</button>
      </Link>
      </div>
            </center>

      {filteredTeachers.length > 0 ? (
        <div>
          <center><h2>Teachers List:</h2></center>
          <center>
          <table>
            <thead>
              <tr className="table-header">
              <th className="table-cell">Id</th>
                <th className="table-cell">Name</th>
                <th className="table-cell">Department</th>
                <th className="table-cell">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.teacher_id} className="table-row">
                  <td className="table-cell">{teacher.teacher_id}</td>
                  <td className="table-cell">{teacher.teacher_name}</td>
                  <td className="table-cell">{teacher.dept_name}</td>
                  <td className="table-cell">
                  <EditIcon
                      onClick={() => handleEditTeacher(teacher.teacher_id)}
                      style={{ cursor: 'pointer', color: 'black' }}
                    />
                    <DeleteIcon
                      onClick={() => handleDeleteTeacher(teacher.teacher_id)}
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
        <p>No Teachers found.</p>
      )}
      {/* Edit Student Form */}
      {selectedTeacher && (
        <div className="edit-form">
          <h2>Edit Teacher</h2>
          <form onSubmit={() => handleUpdateTeacher(selectedTeacher)}>
            <div className="form-group">
              <label htmlFor="teacher_id">Teacher Id:</label>
              <input
                type="number"
                id="teacher_id"
                name="teacher_id"
                value={selectedTeacher.teacher_id}
                onChange={(e) => handleChange(e, selectedTeacher)}
                required
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="teacher_name">Name:</label>
              <input
                type="text"
                id="teacher_name"
                name="teacher_name"
                value={selectedTeacher.teacher_name}
                onChange={(e) => handleChange(e, selectedTeacher)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={selectedTeacher.email}
                onChange={(e) => handleChange(e, selectedTeacher)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dept_name">Department:</label>
              <input
                type="text"
                id="dept_name"
                name="dept_name"
                value={selectedTeacher.dept_name}
                onChange={(e) => handleChange(e, selectedTeacher)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject_name">Subject:</label>
              <input
                type="text"
                id="subject_name"
                name="subject_name"
                value={selectedTeacher.subject_name}
                onChange={(e) => handleChange(e, selectedTeacher)}
                required
              />
            </div>
            <button type="submit">Update Teacher</button>
          </form>
        </div>
      )}
    </div>
    </div>
  );
};

export default MainPage2;
