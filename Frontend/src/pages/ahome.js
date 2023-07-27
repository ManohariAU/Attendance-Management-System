import React from 'react';
import './styles.css'
import ANavbar from '../anavbar';
import { useSelector } from 'react-redux';
function AHome() {
  const username = useSelector((state) => state.username);
  return (
    <div className='home'>
    <ANavbar/>
    <div className='text'><p>Attendence Management Portal!</p>
    <p>Welcome {username}</p>
    <p>Attend Today✅</p>
    <p class="stext">Achieve Tomorrow</p>
    </div>
    </div>
    );
  }

export default AHome;