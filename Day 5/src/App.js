import React from 'react';
import './App.css';
import Navbar from './navbar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Report from './pages/report';
import Product from './pages/leave';
import LoginComponent from './login';
import RegisterForm from './register';
import Footer from './footer';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/login' element={<LoginComponent/>}/>
          <Route path='/pages/report' element={<Report/>} />
          <Route path='/pages/leave' element={<Product/>} />
          <Route path='/register' element={<RegisterForm/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;