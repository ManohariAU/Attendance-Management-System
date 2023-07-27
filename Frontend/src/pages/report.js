import React from 'react';
import './styles.css'
import Navbar from '../navbar';
import Footer from '../footer';
import Calendar from './calender';
import { useSelector } from 'react-redux';
function Attendance() {
  const username = useSelector((state) => state.username);
  const email = useSelector((state) => state.email);
  return (
    <div className='attendance'>
    <Navbar/>
    <div className='att-bg'>
    <div className='atext'>My Attendance</div>
    <div className='user'>
    <table name ='pro-box' cellSpacing={15}><tr><td className='name-cell'>Name:{username}</td>
    <td>Roll Number:19B68</td></tr>
    <tr><td>Email-Id:{email}</td>
    <td>Class : III CSE</td></tr></table></div>
    <Calendar/>
    </div>
    </div>
    );
  }

export default Attendance;