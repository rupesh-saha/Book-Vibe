import React from 'react';
import NavBar from '../../Components/shared/NavBar/NavBar';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className="md:max-w-[85%] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;