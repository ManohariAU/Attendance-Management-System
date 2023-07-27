// LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import RegistrationForm from './register';
import { useDispatch } from 'react-redux';

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [username,setUsername]=useState('');
  const [password, setPassword] = useState('');
  const [loginRole, setLoginRole] = useState('teacher');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate for redirection

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
        email: email,
        password: password,
        role: loginRole,
      });

      const token = response?.data?.token;
      if (token) {
        localStorage.setItem('token', token);

        // Store the email in the Redux store without dispatching LOGIN_SUCCESS action
        dispatch({ type: 'SET_USERNAME', payload: { username: username } });
        dispatch({ type: 'SET_EMAIL', payload: { email: email } });

        // Redirect based on the login role
        if (loginRole === 'teacher') {
          navigate('/pages/thome');
        } else if (loginRole === 'student') {
          navigate('/pages/home');
        } else if (loginRole === 'admin') {
          navigate('/pages/ahome');
        }
      } else {
        console.log('Invalid response from the server.');
      }
    } catch (error) {
      console.log('Error occurred during login:', error.message);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/register'); // Use navigate for redirection to the registration form
  };

  return (
    <div className="login-container">
      <div className="left-image"></div>
      <div className="right-form">
        <center>
          <div className="student-login-form-bg">
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
              <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <br />
              <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <div className="role-select">
                <label>
                  <input
                    type="radio"
                    value="teacher"
                    checked={loginRole === 'teacher'}
                    onChange={() => setLoginRole('teacher')}
                  />
                  Login as Teacher
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value="student"
                    checked={loginRole === 'student'}
                    onChange={() => setLoginRole('student')}
                  />
                  Login as Student
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value="admin"
                    checked={loginRole === 'admin'}
                    onChange={() => setLoginRole('admin')}
                  />
                  Login as Admin
                </label>
                <br />
              </div>
              <button type="submit">Login</button>
              <br />
              <div className="signup-link" style={{ paddingLeft: '110px' }}>
                <Link onClick={handleClick}>Don't have an account?</Link>
              </div>
            </form>
          </div>
        </center>
      </div>
    </div>
  );
}

export default LoginPage;
