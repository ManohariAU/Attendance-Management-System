import React, { useState } from 'react';
import { FaChalkboardTeacher, FaUserGraduate, FaUserShield } from 'react-icons/fa';
import { PiStudentBold} from "react-icons/pi";
import { GiTeacher  } from "react-icons/gi";
import { MdAdminPanelSettings } from "react-icons/md";
import './front.css';
import LoginPage from './login'; // Import the StudentLoginForm component

function Frontpage() {
  const [showTeacherLogin, setShowTeacherLogin] = useState(false);
  const [showStudentLogin, setShowStudentLogin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const handleTeacherLoginClick = () => {
    setShowTeacherLogin(true);
    setShowStudentLogin(false);
    setShowAdminLogin(false);
  };

  const handleStudentLoginClick = () => {
    setShowStudentLogin(true);
    setShowTeacherLogin(false);
    setShowAdminLogin(false);
  };

  const handleAdminLoginClick = () => {
    setShowAdminLogin(true);
    setShowTeacherLogin(false);
    setShowStudentLogin(false);
  };

  return (
    <div className="front-container">
    {!showTeacherLogin && !showStudentLogin && !showAdminLogin && (
        <div className="icons-bg">
        <div className='icon-container'>
        <div className="icon" onClick={handleAdminLoginClick}>
          <MdAdminPanelSettings size={100} />
          <span>Admin</span>
        </div>
          <div className="icon" onClick={handleTeacherLoginClick}>
            <GiTeacher size={100} />
            <span>Teacher</span>
          </div>
          <div className="icon" onClick={handleStudentLoginClick}>
            <PiStudentBold size={100} />
            <span>Student</span>
            </div>
          </div>
        </div>
      )}

      {showTeacherLogin && (
        
          <LoginPage />
      )}

      {showStudentLogin && (
          <LoginPage/>
          )}
          
          {showAdminLogin && (
        <LoginPage/>
        
      )}
    </div>
  );
}

export default Frontpage;