import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { SidebarData } from './sidebar';
import './navbar.css';
import { IconContext } from 'react-icons';
import { Avatar } from '@mui/material';


function Navbar() {
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
              <Link to='/pages/report'>About</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li className='profile-icon' onClick={showProfileDropdown}>
            {<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
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
              <Link to='/settings'>Settings</Link>
            </li>
          </ul>
        </div>
      )}
    </IconContext.Provider>
    </div>
  );
}

export default Navbar;
