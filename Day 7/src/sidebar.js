import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as TiTickIcons from 'react-icons/ti';
import * as TablerIcons from 'react-icons/tb';
import * as IoIcons5 from 'react-icons/io5';
export const SidebarData = [
  {
    title: 'Home',
    path: '/pages/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Manage Attendence',
    path: '/pages/report',
    icon: <TiTickIcons.TiTick/>,
    cName: 'nav-text'
  },
  {
    title: 'Leave Management',
    path: '/pages/leave',
    icon: < IoIcons.IoIosPaper/>,
    cName: 'nav-text'
  },
  {
    title: 'Generate Reports',
    path: '/pages/generate',
    icon: <TablerIcons.TbReportSearch />,
    cName: 'nav-text'
  },
  {
    title: 'My Schedules',
    path: '/myschedule',
    icon: <AiIcons.AiFillSchedule/>,
    cName: 'nav-text'
  }
];