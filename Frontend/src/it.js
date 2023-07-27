
import React from 'react';
import { Link } from 'react-router-dom';
import './sdept.css';
import TNavbar from './teachernavbar';

function ITdep() {
  return (
    <div className='sdept'>
    <TNavbar/>
    <div className='sdept-bg'>
    <div className='flex-cont'>
      <div className="links-button-hover">
        <div className="year-link">
          I year
        </div>
        <div className="sections-container">
          <Link to="/managestudent">
            <div className="links-button">Section A</div>
          </Link>
          <Link to="/managestudent">
            <div className="links-button">Section B</div>
          </Link>
        </div>
      </div>
      <br />
      <div className="links-button-hover">
        <div className="year-link">
          II year
        </div>
        <div className="sections-container">
          <Link to="/managestudent">
            <div className="links-button">Section A</div>
          </Link>
          <Link to="/managestudent">
            <div className="links-button">Section B</div>
          </Link>
        </div>
      </div>
      <br />
      <div className="links-button-hover">
        <div className="year-link">
          III year
        </div>
        <div className="sections-container">
          <Link to="/managestudent">
            <div className="links-button">Section A</div>
          </Link>
          <Link to="/managestudent">
            <div className="links-button">Section B</div>
          </Link>
        </div>
      </div>
      <br />
      <div className="links-button-hover">
        <div className="year-link">
          IV year
        </div>
        <div className="sections-container">
          <Link to="/managestudent">
            <div className="links-button">Section A</div>
          </Link>
          <Link to="/managestudent">
            <div className="links-button">Section B</div>
          </Link>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default ITdep;
