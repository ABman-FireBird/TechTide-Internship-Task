import React from 'react'
import profileImg from '../assets/1.jpeg';

const Profile = () => {

    const name = "Abdullah Farooq";
    const university = "Lahore Garrison University";
    const degree = "BSCS";
    const semester = "7th";
    const intro = "Hi, I am Abdullah, a passionate computer science student. I love to build AI infrastructure, scalable web-solutions, and cloud-based applications.";


    return (
        <div className="flex flex-col items-center text-center gap-3 py-10 px-4 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <img src={profileImg} alt="Profile Image" className="w-40 h-40 rounded-full object-cover" />
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>{university}</p>
            <p>{degree} - {semester} Semester</p>
            <p className="max-w-md text-gray-300">{intro}</p>
            <button className="mt-2 px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition">
                Contact Me
            </button>
        </div>
    );    
};

export default Profile;