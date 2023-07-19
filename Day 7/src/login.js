import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Checkbox, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission

    // Perform validation
    if (username.trim() === '' || password.trim() === '') {
      console.log('Please fill in all fields');
    } else if (username === 'manohari.au03@gmail.com' && password === 'Mano@2003') {
      // Successful login
      dispatch({ type: 'LOGIN_SUCCESS' });
      navigate('/pages/home');
    }
    else if(username=== 'teacher@gmail.com' && password === 'Te@12'){
      dispatch({ type: 'LOGIN_SUCCESS' });
      navigate('/pages/thome');
    } else {
      // Failed login
      alert('Invalid username or password');
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className="login-container">
      <table className="table1" cellSpacing={0.05}>
        <tr>
          <td>
            <div className="box2"></div>
          </td>
          <td>
            <div className="boxxe">
              <form className="login-form" onSubmit={handleLogin}>
                <h3>
                  <center>Welcome!</center>
                </h3>
                <label>Username:</label>
                <TextField
                  id="outlined-basic"
                  label="Username/E-mail"
                  type="text"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <br />
                <label>Password:</label>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <br />
                <div className="checkbox-container">
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                  <Link href="#">Forgot Password?</Link>
                </div>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={username.trim() === '' || password.trim() === ''}
                >
                  Login
                </Button>
              </form>
              <h5>
                <span>or sign in with</span>
              </h5>
              <table cellSpacing={25}>
                <tr>
                  <td>
                    <a href="https://accounts.google.com/signup">
                      <GoogleIcon color="primary" />
                    </a>
                  </td>
                  <td>
                    <a href="https://www.facebook.com/login">
                      <FacebookIcon color="primary" />
                    </a>
                  </td>
                  <td>
                    <a href="https://twitter.com/login">
                      <TwitterIcon color="primary" />
                    </a>
                  </td>
                </tr>
              </table>
              <div className="checkbox-container">
                <p>
                  Don't have an account?
                  <Button variant="contained" href="/register" color="success">
                    Register
                  </Button>
                </p>
              </div>
              <p>Copyright © 2023. All rights reserved.</p>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default LoginPage;
