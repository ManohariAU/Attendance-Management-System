import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './register.css';
export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setErrorMessage('Password and confirm password do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,

        mobile: data.mobile,
        role: data.role, // Add role to the request data
      });

      if (response?.data) {
        console.log(response.data); // Assuming the server returns data in the response
      } else {
        console.log('Registration failed. No response data.');
      }

      // After successful registration, you might want to redirect the user to a new page
      // For example, you can redirect to a "Thank You" page:
      // history.push('/thankyou');
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error.response.data); // Log the error response from the server
      } else {
        console.log('Registration failed. An error occurred.',error);
      }
    }
  };

  return (
    <section>
      <div className="rregister">
        <div className="rcol-1">
          <h2 style={{ fontSize: '1.5cm', paddingLeft: '70px', color: 'aliceblue' }}>Welcome!</h2>
          <form id="rform" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <h3>Register</h3>
            <input
              type="text"
              {...register('username', { required: true, maxLength: 10 })}
              placeholder="Username"
              style={{height: '50%' }}
            />
            <br></br>
            {errors.username?.type === 'required' && 'Username is required'}
            <br></br><br></br>
            <input
              type="email"
              {...register('email', { required: true })}
              placeholder="Email"
              style={{ height: '50%' }}
            />
            <br></br>
            {errors.email?.type === 'required' && 'Email is required'}
            <br></br><br></br>

            <input
              type="password"
              {...register('password', { required: true, minLength: 10 })}
              placeholder="Password"
              style={{ height: '50%' }}
            />
            <br></br>
            {errors.password?.type === 'required' && 'Password is required'}
            <br></br>
            {errors.password?.type === 'minLength' && 'Password must be at least 10 characters'}
            <br></br>
            <input
              type="password"
              {...register('confirmPassword')}
              placeholder="Confirm Password"
              style={{ height: '50%' }}
            />
            <br></br><br></br>
            {/* Dropdown/select field for role */}
            <select {...register('role')} style={{ height: '50%' }}>
              <option value="STUDENT">Student</option>
              <option value="TEACHER">Teacher</option>
              <option value="ADMIN">Admin</option>
            </select>
            <br></br><br></br>
            {/* Mobile number field */}
            <input
              type="text"
              {...register('mobile', { required: true, maxLength: 10 })}
              placeholder="Mobile Number"
              style={{height: '50%' }}
            />
            <br></br>
            {errors.mobile?.type === 'required' && 'Mobile Number is required'}
            {errors.mobile?.type === 'maxLength' && 'Max Length Exceeded'}

            {/* Error message for password confirmation mismatch */}
            {errorMessage && <p className='errormsg'>{errorMessage}</p>}
          <br></br><br></br>
            <button className="btn"  type="submit">
              Sign Up
            </button>
            <Link to="/login" style={{ color: 'black', fontSize: '0.5cm', paddingLeft: '30px' }}>
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}