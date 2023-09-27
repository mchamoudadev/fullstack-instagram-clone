import React, { useEffect, useState } from 'react';
import { useGetPostsQuery } from '../features/api/postApiSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../components/layout/Sidebar';
import RightSidebar from '../components/layout/RightsideBar';
import MainContent from '../components/layout/MainContent';

const HomePage = () => {


    return (
        <div className='h-screen bg-gray-50 flex flex-col'>
            <div className="flex flex-grow">

                <div className="flex flex-col bg-gray-50 p-4">
                    <Sidebar />
                </div>

                <div className="flex flex-col flex-grow-3 max-w-3xl bg-white  mx-auto">
                    <MainContent />
                </div>

                <div className="flex flex-col bg-gray-50 p-4">
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
};

export default HomePage;