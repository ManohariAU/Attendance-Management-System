import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import './department.css';
import TNavbar from './teachernavbar';

const DepartmentPage = () => {
  const departmentData = [
    { id: 1, name: 'CS', description: 'Computer Science Department', link: '/cs' },
    { id: 2, name: 'IT', description: 'Information Technology Department', link: '/it' },
    { id: 3, name: 'ECE', description: 'Electronics and Communication Engineering Department', link: '/ece' },
    { id: 4, name: 'EE', description: 'Electrical Engineering Department', link: '/ee' },
  ];

  return (
    <div className="department-page">
      <TNavbar />
      <div className='dept-bg'>
        <h2 className="page-title">Departments</h2>
          {departmentData.map((department) => (
            <Link key={department.id} to={department.link} className="department-card">
              <h3 className="department-name">{department.name}</h3>
              <p className="department-description">{department.description}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default DepartmentPage;
