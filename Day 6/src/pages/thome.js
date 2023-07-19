import React from 'react';
import './styles.css'
import TNavbar from '../teachernavbar';
function THome() {
  return (
    <div className='home'>
    <TNavbar/>
    <div className='text'><p>Attendence Management Portal!</p>
    <p>Attend Today✅</p>
    <p class="stext">Achieve Tomorrow</p>
    </div>
    </div>
    );
  }

export default THome;