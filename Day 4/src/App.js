import React from 'react';
import './App.css';
import Navbar from './navbar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Report from './pages/report';
import Product from './pages/product';
import LoginComponent from './login';
import RegisterForm from './register';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/pages/home' exact element={<Home/>} />
          <Route path='/login' element={<LoginComponent/>}/>
          <Route path='/pages/report' element={<Report/>} />
          <Route path='/pages/product' element={<Product/>} />
          <Route path='/register' element={<RegisterForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;