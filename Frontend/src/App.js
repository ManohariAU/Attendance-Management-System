import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/home';
import Report from './pages/report';
import Leave from './pages/leave';
import LoginPage from './login';
import RegisterationForm from './register';
import Form from './pages/form';
import Footer from './footer';
import Timetable from './myschedule';
import About from './about';
import Contact from './contact';
import Generate from './pages/generate';
import Frontpage from './front';
import THome from './pages/thome';
import TLeave from './pages/tleave';
import TNavbar from './teachernavbar';
import TGenerate from './pages/tgenerate';
import ManageStudents from './managestudent';
import DepartmentPage from './department';
import ITdep from './it';
import CSdep from './cs';
import ECEdep from './ece';
import EEdep from './ee';
import GLoginForm from './login';
import ManageIT from './manageIt';
import MainPage from './add2';
import AddStudentForm from './add1';
import MainPage2 from './addteacher2';
import AddTeacherForm from './addteacher1';
import AHome from './pages/ahome';
import ANavbar from './anavbar';
import Feedback from './feedback';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Frontpage />} />
          <Route path='/pages/home' element={<Home />} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/pages/report' element={<Report />} />
          <Route path='/pages/leave' element={<Leave />} />
          <Route path='/register' element={<RegisterationForm />} />
          <Route path='/pages/form' element={<Form />} />
          <Route path='/myschedule' element={<Timetable />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pages/generate' element={<Generate />} />
          <Route path='/pages/tnavbar' element={<TNavbar/>} />
          <Route path='/pages/thome' element={<THome/>} />
          <Route path='/pages/tleave' element={<TLeave/>} />
          <Route path='/pages/tgenerate' element={<TGenerate />} />
          <Route path='/managestudent' element={<ManageStudents/>} />
          <Route path='/department' element={<DepartmentPage/>} />
          <Route path='/it' element={<ITdep/>}/>
          <Route path='/cs' element={<CSdep/>}/>
          <Route path='/ece' element={<ECEdep/>}/>
          <Route path='/ee' element={<EEdep/>}/>
          <Route path='/manageIt' element={<ManageIT/>}/>
          <Route path='/add1' element={<AddStudentForm/>}/>
          <Route path='/add2' element={<MainPage/>}/>
          <Route path='/addteacher1' element={<AddTeacherForm/>}/>
          <Route path='/addteacher2' element={<MainPage2/>}/>
          <Route path='/pages/ahome' element={<AHome/>}/>
          <Route path='/pages/anavbar' element={<ANavbar/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
        </Routes>
        <Footer/>
      </Router>
      </Provider>

  );
};

export default App;