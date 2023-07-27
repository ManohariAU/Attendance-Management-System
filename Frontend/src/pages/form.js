import React, { useState } from 'react';
import Navbar from '../navbar';
import { Button } from '@mui/material';
import axios from 'axios'; // Make sure you have installed axios

const LeaveForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    start_date: '',
    end_date: '',
    reason: '',
    stu_id: '',
    stu_name: '',
    teacher_id: '',
    teacher_name: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/leave-details", formData);
      // If the request is successful, call the onSubmit prop to update the list of students
      onSubmit(response.data);
      // Reset the form after submission
    } catch (error) {
      // Handle errors if needed
      console.error('Error adding student:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='form-bg'>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <center><h2>Leave Form</h2></center>
            <div>
        <label>Start Date:</label>
        <br></br>
        <input
          type="text"
          id="start_date"
          name="start_date"
          value={formData.start_date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
      <label>End Date:</label>
      <br></br>
      <input
        type="text"
        id="end_date"
        name="end_date"
        value={formData.end_date}
        onChange={handleChange}
        required
      />
    </div>
    <div>
    <label>Reason:</label>
    <br></br>
    <input
      type="textarea"
      id="reason"
      name="reason"
      value={formData.reason}
      onChange={handleChange}
      required
    />
  </div>
  <div>
  <label>Student Id:</label>
  <br></br>
  <input
    type="number"
    id="stu_id"
    name="stu_id"
    value={formData.stu_id}
    onChange={handleChange}
    required
  />
</div>
<div>
<label>Student name:</label>
<br></br>
<input
  type="text"
  id="stu_name"
  name="stu_name"
  value={formData.stu_name}
  onChange={handleChange}
  required
/>
</div>
<div>
<label>Teacher Id:</label>
<br></br>
<input
  type="number"
  id="teacher_id"
  name="teacher_id"
  value={formData.teacher_id}
  onChange={handleChange}
  required
/>
</div>
<div>
<label>Teacher Name:</label>
<br></br>
<input
  type="text"
  id="teacher_name"
  name="teacher_name"
  value={formData.teacher_name}
  onChange={handleChange}
  required
/>
</div>
            <br /><br></br>
            <center>
              <Button variant="contained" type='submit' color='success'>
                Submit
              </Button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveForm;
