// 'use client';
// import React from 'react';

// export default function RecentActivity() {
//   return (
//     <div className="w-full p-4">
//       {/* Section Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">Recent Activity</h2>
//         <button className="border border-gray-300 px-3 py-1 rounded hover:bg-gray-100 text-sm">
//           View All
//         </button>
//       </div>

//       {/* Activity List */}
//       <div className="bg-white rounded-lg shadow p-4">
//         <ul className="space-y-4">
//           <li className="flex items-start gap-4">
//             <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-lg">
//               <i className="fas fa-utensils"></i>
//             </div>
//             <div>
//               <h4 className="font-semibold">Dinner at La Piazza</h4>
//               <p className="text-gray-600 text-sm">
//                 You added a new expense of $85.50 to Foodies Club
//               </p>
//               <div className="flex gap-4 text-xs text-gray-500 mt-1">
//                 <span><i className="far fa-clock"></i> 2 hours ago</span>
//                 <span><i className="fas fa-users"></i> Split equally</span>
//               </div>
//             </div>
//           </li>

//           {/* Add more <li> items similarly as needed */}
//         </ul>
//       </div>
//     </div>
//   );
// }

'use client';
import React from 'react';

export default function RecentActivity() {
  const activities = [
    {
      icon: 'fas fa-utensils',
      title: 'Dinner at La Piazza',
      desc: 'You added a new expense of ₹85.50 to Foodies Club',
      time: '2 hours ago',
      detail: 'Split equally',
    },
    {
      icon: 'fas fa-home',
      title: 'Rent Payment',
      desc: 'Mike paid you ₹600 for July rent in Apartment 42',
      time: 'Yesterday',
      detail: 'Settled',
    },
    {
      icon: 'fas fa-plane',
      title: 'Flight Tickets',
      desc: 'You added a new expense of ₹420 to Bali Trip',
      time: '2 days ago',
      detail: 'Split by percentage',
    },
    {
      icon: 'fas fa-bolt',
      title: 'Electricity Bill',
      desc: 'Alex added a new expense of ₹72.30 to Apartment 42',
      time: '3 days ago',
      detail: 'Split unequally',
    },
  ];

  return (
    <div className="w-full p-6 bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
        <button className="text-sm border border-gray-300 px-3 py-1 rounded hover:bg-gray-100">
          View All
        </button>
      </div>

      {/* Activity List */}
      <ul className="divide-y divide-gray-200">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-start gap-4 py-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 text-lg shrink-0">
              <i className={activity.icon}></i>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{activity.title}</h4>
              <p className="text-gray-600 text-sm">{activity.desc}</p>
              <div className="flex gap-4 text-xs text-gray-500 mt-1">
                <span><i className="far fa-clock"></i> {activity.time}</span>
                <span><i className="fas fa-info-circle"></i> {activity.detail}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

