import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='bg-gradient-to-r from-[#232732] to-[#212428] shadow-inner'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;