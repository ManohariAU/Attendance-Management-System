import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './sdept.css';
import TNavbar from './teachernavbar';

const EEdep = () => {
  return (
    <div className='sdept'>
    <TNavbar/>
    <div className='sdept-bg'>
    <div className='sdept-text'>Select class to continue..</div>
    <div className='sdept-button-cont'>
      <Button className='sdb' component={Link} to="/managestudent" variant="contained" color="primary">
        I year
      </Button>
      <Button className='sdb' component={Link} to="/managestudent" variant="contained" color="primary">
        II year
      </Button>
      <Button className='sdb' component={Link} to="/managestudent" variant="contained" color="primary">
        III year
      </Button>
      <Button className='sdb' component={Link} to="/managestudent" variant="contained" color="primary">
        IV year
      </Button>
      </div>
      </div>
    </div>
  );
};

export default EEdep;
