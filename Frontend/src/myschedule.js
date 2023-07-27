import React from 'react';
import './timetable.css';
import Navbar from './navbar';

const Timetable = () => {
  return (
    <div>
    <Navbar/>
    <div className='time-bg'>
    <div className="timetable">
      <h2 className="timetable-title">My Schedules</h2>
      <table className='t1'>
        <thead>
          <tr>
            <th className='th1'>Time</th>
            <th className='th1'>Monday</th>
            <th className='th1'>Tuesday</th>
            <th className='th1'>Wednesday</th>
            <th className='th1'>Thursday</th>
            <th className='th1'>Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='td1'>8:00 AM</td>
            <td className='td1'>Math</td>
            <td className='td1'>Science</td>
            <td className='td1'>English</td>
            <td className='td1'>History</td>
            <td className='td1'>Geography</td>
          </tr>
          <tr>
            <td className='td1'>9:00 AM</td>
            <td className='td1'>Science</td>
            <td className='td1'>English</td>
            <td className='td1'>Math</td>
            <td className='td1'>Geography</td>
            <td className='td1'>History</td>
          </tr>
          <tr>
            <td className='td1'>10:00 AM</td>
            <td className='td1'>English</td>
            <td className='td1'>Math</td>
            <td className='td1'>Science</td>
            <td className='td1'>History</td>
            <td className='td1'>Geography</td>
          </tr>
          <tr>
            <td className='td1'>11:00 AM</td>
            <td className='td1'>History</td>
            <td className='td1'>Geography</td>
            <td className='td1'>English</td>
            <td className='td1'>Math</td>
            <td className='td1'>Science</td>
          </tr>
          <tr>
            <td className='td1'>12:00 PM</td>
            <td className='td1'>Lunch Break</td>
            <td className='td1'>Lunch Break</td>
            <td className='td1'>Lunch Break</td>
            <td className='td1'>Lunch Break</td>
            <td className='td1'>Lunch Break</td>
          </tr>
          <tr>
            <td className='td1'>1:00 PM</td>
            <td className='td1'>Geography</td>
            <td className='td1'>History</td>
            <td className='td1'>Geography</td>
            <td className='td1'>English</td>
            <td className='td1'>Math</td>
          </tr>
          <tr>
            <td className='td1'>2:00 PM</td>
            <td className='td1'>Math</td>
            <td className='td1'>Science</td>
            <td className='td1'>Math</td>
            <td className='td1'>Science</td>
            <td className='td1'>English</td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
};

export default Timetable;
