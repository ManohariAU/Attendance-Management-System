import React from 'react';
import './styles.css'
import Navbar from '../navbar';
import Footer from '../footer';
function Home() {
  return (
    <div className='home'>
    <Navbar/>
    <div className='text'><p>Attendence Management Portal!</p>
    <p>Attend Today✅</p>
    <p class="stext">Achieve Tomorrow</p>
    </div>
    </div>
    );
  }

export default Home;