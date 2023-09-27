import React, { useState } from 'react';
import { FaHome, FaSearch, FaPlusSquare, FaHeart, FaUser } from 'react-icons/fa';
import AddPost from '../post/AddPost';


const Sidebar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>

            <div className="w-64 py-6 px-4 flex flex-col items-start bg-gray-50">
                <div className="flex items-center mb-12">
                    <img src="./instagram.svg" alt="Instagram Logo" className="w-32 h-auto" />
                </div>

                <div className="w-full flex flex-col items-start">
                    <NavItem icon={<FaHome />} label="Home" />
                    <NavItem icon={<FaSearch />} label="Search" />
                    <NavItem isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} icon={<FaPlusSquare />} label="Add" />
                    <NavItem icon={<FaHeart />} label="Activity" />
                    <NavItem icon={<FaUser />} label="Profile" />
                </div>
            </div>
            <AddPost isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    );
};

export default Sidebar;


const NavItem = ({ icon, label, isModalOpen, setIsModalOpen }) => {
    return (
        <div
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="flex items-center space-x-4 mb-8 cursor-pointer hover:bg-gray-100 py-2 px-4 rounded-md w-full">
            <span className="text-gray-900">{icon}</span>
            <span className="text-sm font-medium text-gray-900">{label}</span>
        </div>
    );
};