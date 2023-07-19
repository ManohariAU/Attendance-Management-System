import React from 'react';
import './styles.css'
import Navbar from '../navbar';
import Footer from '../footer';
import Calendar from './calender';
function Attendance() {
  return (
    <div className='attendance'>
    <Navbar/>
    <div className='att-bg'>
    <div className='atext'>My Attendance</div>
    <div className='user'>
    <table cellSpacing={15}><tr><td className='name-cell'>Name:Manohari</td>
    <td>Roll Number:19B68</td></tr>
    <tr><td>Email-Id:Mano68@gmail.com</td>
    <td>Class : III CSE</td></tr></table></div>
    <Calendar/>
    </div>
    </div>
    );
  }

export default Attendance;