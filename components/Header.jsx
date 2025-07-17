// import React from 'react'




//   const Header = () => {
//   return (
//    <div>
//     <p>Sahil kUam</p>
//    </div>



//   )
// }

// export default Header 

import React from 'react';
import { FaMoneyBillWave, FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white px-6 py-4 shadow-md sticky top-0 z-50 flex justify-between items-center">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <FaMoneyBillWave className="text-blue-600 text-2xl" />
        <h1 className="text-xl font-bold text-blue-600">SplitEasy</h1>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-xl mx-6">
        <input
          type="text"
          placeholder="Search groups, expenses, friends..."
          className="w-full py-2 px-4 rounded-full border border-gray-300 bg-gray-100 text-sm focus:outline-none focus:border-blue-600 focus:bg-white focus:shadow-md transition"
        />
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-6">
        
        {/* Notification */}
        <div className="relative cursor-pointer">
          <FaBell className="text-gray-600 text-xl" />
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
            JS
          </div>
          <div>
            <h3 className="text-sm font-semibold">John Smith</h3>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
