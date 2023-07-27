import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { SidebarData } from './sidebar';
import './navbar.css';
import { IconContext } from 'react-icons';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';

function Navbar() {
  const username = useSelector((state) => state.username);
  const [sidebar, setSidebar] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showProfileDropdown = () => setProfileDropdown(!profileDropdown);


  return (
    <div>
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <ul className='horizontal-list'>
            <li>
              <Link to='/pages/home'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/feedback'>Feedback</Link>
            </li>
            <li className='profile-icon' onClick={showProfileDropdown}>
            {username}
          </li>
          </ul>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {profileDropdown && (
        <div className='profile-dropdown'>
          <ul>
            <li>
              <Link to='/profile'>My Profile</Link>
            </li>
            <li>
              <Link to='/'>Logout</Link>
            </li>
          </ul>
        </div>
      )}
    </IconContext.Provider>
    </div>
  );
}

export default Navbar;
