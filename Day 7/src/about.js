import React from 'react';
import './about.css';
import Navbar from './navbar';
import './myattend.jpg';
import Footer from './footer';
import './about.css';
import img1 from './myattend.jpg';
import img2 from './school-attendance.jpg';
import img3 from './about-bg.jpg';

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
          <div className='card'>
            <img src={img1} alt='Card 1' className='card-image' />
            <div className='card-description'>Students can track their attendance and view their present and absent days request leave etc..</div>
          </div>
          <div className='card'>
            <img src={img2} alt='Card 2' className='card-image' />
            <div className='card-description'>Teachers can mark the student's attendance , review Leave Requests and generate reports for dates,sessions or classes</div>
          </div>
          <div className='card'>
            <img src={img3} alt='Card 3' className='card-image' />
            <div className='card-description'>Admin can track the overall attendance of the organization</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
