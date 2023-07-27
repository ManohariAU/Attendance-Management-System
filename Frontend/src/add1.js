import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TNavbar from './teachernavbar';
import './apply.css';

const AddStudentForm = ({ onSubmit }) => {
  const [student, setStudent] = useState({
    stu_id: '',
    stu_name: '',
    class_year: '',
    section: '',
    dept_name: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/students", student);
      // If the request is successful, call the onSubmit prop to update the list of students
      onSubmit(response.data);
      // Reset the form after submission
    } catch (error) {
      // Handle errors if needed
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className='admin-form'>
    <TNavbar/>
    <div className='admin-box'>
    <div className='admin-box-bg'>
    <p>Add Students</p>
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="stu_id">Roll No:</label>
        <br></br>
        <input
          type="number"
          id="stu_id"
          name="stu_id"
          value={student.stu_id}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="stu_name">Name:</label>
        <br></br>
        <input
          type="text"
          id="stu_name"
          name="stu_name"
          value={student.stu_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="stu_gender">Gender:</label>
        <br></br>
        <input
          type="text"
          id="stu_gender"
          name="stu_gender"
          value={student.stu_gender}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="stu_phno">Phone Number:</label>
        <br></br>
        <input
          type="text"
          id="stu_phno"
          name="stu_phno"
          value={student.stu_phno}
          onChange={handleChange}
          required
        />
        </div>
      <div className="form-group">
      <label htmlFor="email">Email:</label>
      <br></br>
      <input
        type="text"
        id="email"
        name="email"
        value={student.email}
        onChange={handleChange}
        required
      />
    </div>
      <div className="form-group">
        <label htmlFor="class_year">Class Year:</label>
        <br></br>
        <input
          type="text"
          id="class_year"
          name="class_year"
          value={student.class_year}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="section">Section:</label>
        <br></br>
        <input
          type="text"
          id="section"
          name="section"
          value={student.section}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="dept_name">Department:</label>
        <br></br>
        <input
          type="text"
          id="dept_name"
          name="dept_name"
          value={student.dept_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='admin-add-button'>
        <button type="submit">Add Student</button><br></br>
        <Link to="/add2">
        <button >Back</button>
        </Link>
        </div>
    </form>
    </div>
    </div>
    </div>
  );
};

export default AddStudentForm;