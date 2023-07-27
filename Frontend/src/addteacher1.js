import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TNavbar from './teachernavbar';
import './apply.css';

const AddTeacherForm = ({ onSubmit }) => {
  const [teacher, setTeacher] = useState({
    teacher_id: '',
    teacher_name: '',
    email: '',
    dept_name: '',
    subject_name: ''

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prevTeacher) => ({ ...prevTeacher, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/teachers', teacher);
      // If the request is successful, call the onSubmit prop to update the list of teachers
      onSubmit(response.data);
      // Reset the form after submission
      setTeacher({
        teacher_id: '',
        teacher_name: '',
        email: '',
        dept_name: '',
        subject_name: ''
      });
      alert("Teacher added successfully");
    } catch (error) {
      // Handle errors if needed
      console.error('Error adding teacher:', error);
    }
  };

  return (
    <div className='admin-form'>
      <TNavbar />
      <div className='admin-box'>
        <div className='admin-box-bg'>
          <p>Add Teachers</p>
          <form onSubmit={handleSubmit}>
            
            <div className='form-group'>
              <label htmlFor='teacher_name'>Name:</label>
              <br />
              <input
                type='text'
                id='teacher_name'
                name='teacher_name'
                value={teacher.teacher_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
            <label htmlFor='email'>Name:</label>
            <br />
            <input
              type='text'
              id='email'
              name='email'
              value={teacher.email}
              onChange={handleChange}
              required
            />
          </div>
            <div className='form-group'>
              <label htmlFor='dept_name'>Department:</label>
              <br />
              <input
                type='text'
                id='dept_name'
                name='dept_name'
                value={teacher.dept_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='subject_name'>Subject:</label>
              <br />
              <input
                type='text'
                id='subject_name'
                name='subject_name'
                value={teacher.subject_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='admin-add-button'>
              <button type='submit'>Add Teacher</button>
              <br />
              <Link to='/addteacher2'>
                <button>Back</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTeacherForm;
