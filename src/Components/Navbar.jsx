import React from 'react';
import { Link } from 'react-router-dom';

import 'tailwindcss/tailwind.css';
import ListingPage from '../Pages/ListingPage';

const Navbar = () => {


  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap  items-center justify-between mx-auto p-4">
       
       
          
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 justify-center">
            <li>
              <Link to="/" className={`block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 }`}>Home</Link>
            </li>
          <li>
          <Link to="/ListingPage" className={`block py-2 px-3 text-{location.pathname === '/'? 'white' : 'gray-900'} bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 }`}>Add Listing</Link>
          </li>
 
    
         
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;