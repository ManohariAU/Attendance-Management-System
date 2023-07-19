import React, { useState } from 'react';
import Navbar from '../navbar';
import { Button } from '@mui/material';

const LeaveForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!startDate || !endDate || !reason || !file) {
      const newErrors = {};

      if (!startDate) newErrors.startDate = 'Start date is required';
      if (!endDate) newErrors.endDate = 'End date is required';
      if (!reason) newErrors.reason = 'Reason is required';
      if (!file) newErrors.file = 'Supporting documents are required';

      setErrors(newErrors);
      return;
    }

    // Create a new FormData object
    const formData = new FormData();

    // Add form data
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    formData.append('reason', reason);
    formData.append('file', file);

    // Send the form data to the server using a fetch or axios request
    // Replace the 'URL' with your server-side endpoint that handles the form submission
    fetch('URL', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div><Navbar/>
    <div className='form-bg'>
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
    <center><h2>Leave Form</h2></center>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        {errors.startDate && <span>{errors.startDate}</span>}
      </label>
      <br />
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        {errors.endDate && <span>{errors.endDate}</span>}
      </label>
      <br />
      <label>
        Reason:
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        {errors.reason && <span>{errors.reason}</span>}
      </label>
      <br />
      <label>
        Supporting Documents:
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {errors.file && <span>{errors.file}</span>}
      </label>
      <br />
      <center><Button variant="contained" type='submit' color='success' href="/">Submit</Button></center>
    </form>
    </div>
    </div>
    </div>
  );
};

export default LeaveForm;
