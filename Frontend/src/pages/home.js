import React from 'react';
import './styles.css'
import Navbar from '../navbar';
import Footer from '../footer';
import { useSelector } from 'react-redux';
function Home() {
  const username = useSelector((state) => state.username);
  return (
    <div className='home'>
    <Navbar/>
    <div className='text'><p>Attendence Management Portal!</p>
    <p>Welcome {username}</p>
    <p>Attend Today✅</p>
    <p className="stext">Achieve Tomorrow</p>
    </div>
    </div>
    );
  }

  export default Home;