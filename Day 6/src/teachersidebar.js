import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as TiTickIcons from 'react-icons/ti';
import * as TablerIcons from 'react-icons/tb';
import * as IoIcons5 from 'react-icons/io5';
export const SidebarData = [
  {
    title: 'Home',
    path: '/pages/thome',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Mark Attendence',
    path: '/department',
    icon: <TiTickIcons.TiTick/>,
    cName: 'nav-text'
  },
  {
    title: 'Review Leave',
    path: '/pages/tleave',
    icon: < IoIcons.IoIosPaper/>,
    cName: 'nav-text'
  },
  {
    title: 'Generate Reports',
    path: '/pages/tgenerate',
    icon: <TablerIcons.TbReportSearch />,
    cName: 'nav-text'
  }
];