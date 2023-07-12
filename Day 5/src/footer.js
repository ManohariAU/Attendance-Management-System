import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle,AiFillFacebook,AiFillTwitterCircle,AiFillInstagram } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
      <ul className='foot-list'>
      <li><Link href="#">Terms and Policies</Link></li>
      <li><Link href="#">Privacy Policies</Link></li>
      <li><Link href="#">FAQ</Link></li>
      <li><Link href="#">Cookies Settings</Link></li>
      <li><Link href="#">Contact</Link></li>
      <li><p>Follow us at</p></li>
      <li><AiFillGoogleCircle/><AiFillFacebook/><AiFillInstagram/><AiFillTwitterCircle/></li>
      </ul>
      
      <br></br>
        <p className="footer-text">2023 @ Copyrights. All rights are reserved</p>
      </div>
    </footer>
  );
}

export default Footer;