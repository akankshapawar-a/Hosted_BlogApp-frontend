import React,{useState} from 'react';
import Admin from '../components/Create/Admin';
import Users from './User/User';
import {Link} from 'react-router-dom';

const About1: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
};
  return (
    <>
    <div className="flex ss:hidden xs:hidden xxs:hidden">
      <Admin toggleSidebar={toggleSidebar} />

      <main className={`flex-grow p-3  dark:bg-gray-800   `}>
        <Users />
      </main>
    </div>
    <Link to="/home" className="fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 sm:hidden text-white ">
          <div className="bg-black p-4 rounded-lg shadow-lg">
            <p>The Size Of Device is too Small</p>
          </div>
          <br/>
        
        </Link>
    </>
  );
};

export default About1;
