import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosHome, IoMdPeople, IoMdAnalytics, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

interface AdminProps {
  toggleSidebar: () => void;
}

const Admin: React.FC<AdminProps> = ({ toggleSidebar }) => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
    toggleSidebar(); 
  };

  return (
    <>
      {/* <button
        onClick={toggleDrawer}
        className="absolute top-0 left-0 p-2 bg-gray-200 rounded-r-md focus:outline-none z-10  dark:bg-gray-800"
      >
        {open ? <IoIosArrowBack className="h-6 w-6 dark:bg-gray-300" /> : <IoIosArrowForward className="h-6 w-6 dark:bg-gray-300" />}
      </button> */}

    
      <div className={` inset-y-0 left-0 z-20 bg-white w-64 transition-transform duration-300 overflow-y-auto border-r border-gray-200  dark:bg-gray-800 ${open ? '' : '-translate-x-full'}`}>
        <div className="flex items-center justify-end p-2  dark:bg-gray-800">
          {/* <button onClick={toggleDrawer} className="focus:outline-none  dark:bg-gray-800">
            {!open ? <IoIosArrowBack className="h-6 w-6 dark:bg-gray-300 dark:rounded-full" /> : <IoIosArrowForward className="h-6 w-6 dark:bg-gray-300  dark:rounded-full" />}
          </button> */}
          
        </div>
        <div className="mt-2 ">
          <NavLink to="/admin/home" className="block px-4 ml-4 rounded-md mr-4 py-3  text-sm font-medium  dark:bg-gray-800 text-gray-700 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black hover:bg-gray-100 hover:text-gray-900">
            <IoIosHome className="h-7 w-7 mr-2 ml-12 " />
            <p className='ml-10 text-base'>Home</p>
          </NavLink>
          <NavLink to="/admin/about" 
className="block px-4 ml-4 rounded-md mr-4 py-3  text-sm font-medium  dark:bg-gray-800 text-gray-700 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black hover:bg-gray-100 hover:text-gray-900">            <IoMdPeople className="h-7 w-7 mr-2 ml-12" />
            <p className='ml-10 text-base'> Users</p> 
          </NavLink>
          <NavLink to="/admin/analytics" 
className="block px-4 ml-4 rounded-md mr-4 py-3  text-sm font-medium  dark:bg-gray-800 text-gray-700 dark:text-white dark:hover:bg-gray-100 dark:hover:text-black hover:bg-gray-100 hover:text-gray-900">            <IoMdAnalytics className="h-7 w-7 mr-2 ml-12" />
            <p className='ml-10 text-base'> Analytics</p> 
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Admin;
