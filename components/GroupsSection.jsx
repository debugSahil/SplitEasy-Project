// "use client";

// import { FaHome, FaUmbrellaBeach, FaUtensils, FaPlus } from "react-icons/fa";

// export default function GroupsSection() {
//   return (
//     <div className="mt-10 px-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-bold">Your Groups</h2>
//         <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
//           <FaPlus />
//           Create Group
//         </button>
//       </div>

//       {/* Groups Grid */}
//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {/* Group 1 */}
//         <div className="bg-white rounded-xl shadow hover:-translate-y-1 transition overflow-hidden">
//           <div className="flex items-center gap-4 p-5 bg-blue-600 text-white">
//             <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center text-lg">
//               <FaHome />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Apartment 42</h3>
//               <p className="text-sm">Roommates</p>
//             </div>
//           </div>
//           <div className="p-5">
//             <div className="flex mb-4">
//               {["JS", "MP", "AK", "+2"].map((initial, index) => (
//                 <div
//                   key={index}
//                   className="w-8 h-8 rounded-full bg-gray-100 text-xs font-semibold flex items-center justify-center -mr-2 border-2 border-white"
//                 >
//                   {initial}
//                 </div>
//               ))}
//             </div>
//             <div className="text-red-500 font-medium mb-2">You owe $42.50</div>
//             <div className="flex justify-between text-sm text-gray-500 border-t pt-3">
//               <span>5 members</span>
//               <span>12 expenses</span>
//             </div>
//           </div>
//         </div>

//         {/* Group 2 */}
//         <div className="bg-white rounded-xl shadow hover:-translate-y-1 transition overflow-hidden">
//           <div className="flex items-center gap-4 p-5" style={{ backgroundColor: "#f72585", color: "white" }}>
//             <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center text-lg">
//               <FaUmbrellaBeach />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Bali Trip</h3>
//               <p className="text-sm">Vacation</p>
//             </div>
//           </div>
//           <div className="p-5">
//             <div className="flex mb-4">
//               {["JS", "SR", "TL"].map((initial, index) => (
//                 <div
//                   key={index}
//                   className="w-8 h-8 rounded-full bg-gray-100 text-xs font-semibold flex items-center justify-center -mr-2 border-2 border-white"
//                 >
//                   {initial}
//                 </div>
//               ))}
//             </div>
//             <div className="text-green-600 font-medium mb-2">You are owed $120.75</div>
//             <div className="flex justify-between text-sm text-gray-500 border-t pt-3">
//               <span>3 members</span>
//               <span>8 expenses</span>
//             </div>
//           </div>
//         </div>

//         {/* Group 3 */}
//         <div className="bg-white rounded-xl shadow hover:-translate-y-1 transition overflow-hidden">
//           <div className="flex items-center gap-4 p-5" style={{ backgroundColor: "#4cc9f0", color: "white" }}>
//             <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center text-lg">
//               <FaUtensils />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Foodies Club</h3>
//               <p className="text-sm">Friends</p>
//             </div>
//           </div>
//           <div className="p-5">
//             <div className="flex mb-4">
//               {["JS", "MP", "AK", "SR", "+3"].map((initial, index) => (
//                 <div
//                   key={index}
//                   className="w-8 h-8 rounded-full bg-gray-100 text-xs font-semibold flex items-center justify-center -mr-2 border-2 border-white"
//                 >
//                   {initial}
//                 </div>
//               ))}
//             </div>
//             <div className="text-red-500 font-medium mb-2">You owe $44.75</div>
//             <div className="flex justify-between text-sm text-gray-500 border-t pt-3">
//               <span>8 members</span>
//               <span>23 expenses</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// components/GroupsSection.jsx

export default function GroupsSection() {
  return (
    <div>
      <div className="section-header flex justify-between items-center my-10">
        <h2 className="text-xl font-bold">Your Groups</h2>
        <button className="btn btn-outline flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-sm">
          <i className="fas fa-plus" /> Create Group
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Apartment 42 */}
        <div className="bg-white shadow rounded-lg overflow-hidden hover:-translate-y-1 transition">
          <div className="p-4 bg-blue-600 text-white flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-xl">
              <i className="fas fa-home" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Apartment 42</h3>
              <p className="text-sm opacity-90">Roommates</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex mb-3 -space-x-2">
              <div className="member-avatar">JS</div>
              <div className="member-avatar">MP</div>
              <div className="member-avatar">AK</div>
              <div className="member-avatar">+2</div>
            </div>
            <div className="text-sm text-red-500 font-medium mb-2">You owe $42.50</div>
            <div className="flex justify-between text-xs text-gray-500 border-t pt-2">
              <span>5 members</span>
              <span>12 expenses</span>
            </div>
          </div>
        </div>

        {/* Bali Trip */}
        <div className="bg-white shadow rounded-lg overflow-hidden hover:-translate-y-1 transition">
          <div className="p-4 bg-pink-600 text-white flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-xl">
              <i className="fas fa-umbrella-beach" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Bali Trip</h3>
              <p className="text-sm opacity-90">Vacation</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex mb-3 -space-x-2">
              <div className="member-avatar">JS</div>
              <div className="member-avatar">SR</div>
              <div className="member-avatar">TL</div>
            </div>
            <div className="text-sm text-green-600 font-medium mb-2">You are owed $120.75</div>
            <div className="flex justify-between text-xs text-gray-500 border-t pt-2">
              <span>3 members</span>
              <span>8 expenses</span>
            </div>
          </div>
        </div>

        {/* Foodies Club */}
        <div className="bg-white shadow rounded-lg overflow-hidden hover:-translate-y-1 transition">
          <div className="p-4 bg-sky-400 text-white flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-xl">
              <i className="fas fa-utensils" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Foodies Club</h3>
              <p className="text-sm opacity-90">Friends</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex mb-3 -space-x-2">
              <div className="member-avatar">JS</div>
              <div className="member-avatar">MP</div>
              <div className="member-avatar">AK</div>
              <div className="member-avatar">SR</div>
              <div className="member-avatar">+3</div>
            </div>
            <div className="text-sm text-red-500 font-medium mb-2">You owe $44.75</div>
            <div className="flex justify-between text-xs text-gray-500 border-t pt-2">
              <span>8 members</span>
              <span>23 expenses</span>
            </div>
          </div>
        </div>

        {/* Wedding Expenditure */}
        <div className="bg-white shadow rounded-lg overflow-hidden hover:-translate-y-1 transition">
          <div className="p-4 bg-purple-600 text-white flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-xl">
              <i className="fas fa-ring" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Wedding Expenses</h3>
              <p className="text-sm opacity-90">Family Event</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex mb-3 -space-x-2">
              <div className="member-avatar">PK</div>
              <div className="member-avatar">RS</div>
              <div className="member-avatar">+5</div>
            </div>
            <div className="text-sm text-green-600 font-medium mb-2">You are owed $250.00</div>
            <div className="flex justify-between text-xs text-gray-500 border-t pt-2">
              <span>7 members</span>
              <span>18 expenses</span>
            </div>
          </div>
        </div>

        {/* Party */}
        <div className="bg-white shadow rounded-lg overflow-hidden hover:-translate-y-1 transition">
          <div className="p-4 bg-yellow-500 text-white flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-xl">
              <i className="fas fa-glass-cheers" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Party</h3>
              <p className="text-sm opacity-90">Birthday Bash</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex mb-3 -space-x-2">
              <div className="member-avatar">MP</div>
              <div className="member-avatar">SR</div>
              <div className="member-avatar">+4</div>
            </div>
            <div className="text-sm text-red-500 font-medium mb-2">You owe $87.25</div>
            <div className="flex justify-between text-xs text-gray-500 border-t pt-2">
              <span>6 members</span>
              <span>15 expenses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


