import React from 'react';
import './about.css';
import Navbar from './navbar';
import img1 from './report-img.png';
import img2 from './visibility-bg.jpg';
import img3 from './track-att.jpg';

function About() {
  return (
    <div className='about'>
      <Navbar />
      <div className='about-bg'>
        <div className='about-box'>
          <p className='head-text'>ABOUT US</p>
          <div className='about-text'>
            It is an attendance management portal is an online platform designed to automate 
            and streamline the process of tracking and managing attendance for 
            organizations, schools, colleges, or other institutions. It provides a centralized 
            system that allows administrators, teachers, or supervisors to record and monitor 
            attendance data efficiently. 
          </div>
        </div>
        <div className='features'>
          <div className='card-about'>
            <img src={img1} alt='Image 1' />
            <p className='card-text'>Easy Reporting</p>
          </div>
          <div className='card-about'>
            <img src={img2} alt='Image 2' />
            <p className='card-text'>Wide visibility</p>
          </div>
          <div className='card-about'>
            <img src={img3} alt='Image 3' />
            <p className='card-text'>Easy Monitoring</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
