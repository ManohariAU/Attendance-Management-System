import React from 'react';
import './styles.css'
import TNavbar from '../teachernavbar';
function TLeave() {
  return (
    <div className='leave'>
    <TNavbar/>
    <div className='leave-bg'>
    <div className='ltext'>Review Leave
    <center><div>History of Leaves</div></center></div>
    <div className='box-container'>
    <div className='box'>
    <p>Student_Id : 21CS001</p>
    <p>Reason : Sick Leave</p>
    <p>Total Days : 1</p>
    <p>Status : Pending </p></div>
    <div className='box'>    
    <p>Student_Id : 21IT045</p>
    <p>Reason : Sick Leave</p>
    <p>Total Days : 1</p>
    <p>Status : Pending</p>
    </div>
    <div className='box'>    
    <p>Student_Id : 21CSE068</p>
    <p>Reason : Personal Leave</p>
    <p>Total Days : 2</p>
    <p>Status : Rejected</p>
  </div>
  </div>
  <div className='box-container'>
    <div className='box'>
    <p>Student_Id : 21IT008</p>
    <p>Reason : Sick Leave</p>
    <p>Total Days : 1</p>
    <p>Status : Approved</p></div>
    <div className='box'>
    <p>Student_Id : 21CS079</p>
    <p>Reason : PersonalLeave</p>
    <p>Total Days : 1</p>
    <p>Status : Approved</p></div>
    <div className='box'>
    <p>Student_Id : 21IT067</p>
    <p>Reason : Sick Leave</p>
    <p>Total Days : 1</p>
    <p>Status : Approved</p></div>
    
  </div>
    </div>
    </div>
    );
  }

export default TLeave;