
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const EditStudentForm = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState({
    stu_id: '',
    stu_name: '',
    stu_gender: '',
    stu_phno: '',
    class_year: '',
    section: '',
    dept_name: '',
  });

  useEffect(() => {
    // Fetch the existing student details based on the studentId
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/students/${studentId}`);
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };
    fetchStudentDetails();
  }, [studentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the student details in the database
      await axios.put(`http://localhost:8080/students/${studentId}`, student);
      // Redirect back to the main page after saving changes
      window.location.href = '/';
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  return (
    <div className="edit-form-container">
      <h2>Edit Student Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="stu_id">Roll No:</label>
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
          <label htmlFor="class_year">Class Year:</label>
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
          <input
            type="text"
            id="dept_name"
            name="dept_name"
            value={student.dept_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="buttons-container">
          <button type="submit">Save Changes</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditStudentForm;
