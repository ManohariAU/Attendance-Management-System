import React from 'react';
import './styles.css';
import TNavbar from '../teachernavbar';
import { useSelector } from 'react-redux';
function THome() {
  const username = useSelector((state) => state.username);
  return (
    <div className='home'>
    <TNavbar/>
    <div className='text'><p>Attendence Management Portal!</p>
    <p>Welcome {username}</p>
    <p>Attend Today✅</p>
    <p class="stext">Achieve Tomorrow</p>
    </div>
    </div>
    );
  }

export default THome;