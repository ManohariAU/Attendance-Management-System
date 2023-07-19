import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const CVdep = () => {
  return (
    <div>
      <Button component={Link} to="/managestudent" variant="contained" color="primary">
        1st yr
      </Button>
      <Button component={Link} to="/managestudent" variant="contained" color="primary">
        2nd yr
      </Button>
      <Button component={Link} to="/managestudent" variant="contained" color="primary">
        3rd yr
      </Button>
      <Button component={Link} to="/managestudent" variant="contained" color="primary">
        4th yr
      </Button>
    </div>
  );
};

export default CVdep;
