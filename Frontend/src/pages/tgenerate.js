import React from 'react';
import './styles.css';
import { Button } from '@mui/material';
import TNavbar from '../teachernavbar';
import Footer from '../footer';
function TGenerate() {
  return (
    <div className='generate'>
    <TNavbar/>
    <div className='g-bg'>
    <div className='gtext'>Generate Reports</div>
    <div className='gform-container'>
    <form>
      <label>
        Start Date:
        <input
          type="date"
        />
      </label>
      <br />
      <label>
        End Date:
        <input
          type="date"
        />
      </label>
      <label>
        Department:
        <input
          type="text"
        />
      </label>
      <label>
        Semester:
        <input
          type="text"
        />
      </label>
      <br />
      </form>
      <center><Button variant="contained" color='primary'
      onClick={() => {
        window.open(
          "https://drive.google.com/file/d/1mozwsmeo6CzhFPg2UkALlorxCnTv-sw0/view?usp=sharing"
        );
      }}>Download Report ⬇️</Button></center>
    </div>
    </div>
    </div>
    );
  }

export default TGenerate;