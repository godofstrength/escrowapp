import React from 'react';
import Sidebar from './Sidebar'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = (props) => {
  return <div>
      <Navbar props= {props}/>
      <Sidebar/>
      <Outlet/>
  </div>;
};

export default Layout;
