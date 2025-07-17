// components/DashboardStats.jsx
import { FaWallet, FaHandHoldingUsd, FaMoneyCheckAlt } from "react-icons/fa";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {/* Total Balance */}
      <div className="bg-white rounded-xl shadow p-6 hover:-translate-y-1 transition">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Total Balance </h3>
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-xl">
            <FaWallet />
          </div>
        </div>
        <div className="text-2xl font-bold text-green-500 mb-1">+₹243.100</div>
        <p className="text-gray-500 text-sm">You are owed money overall</p>
      </div>

      {/* You Owe */}
      <div className="bg-white rounded-xl shadow p-6 hover:-translate-y-1 transition">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">You Owe</h3>
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-xl">
            <FaHandHoldingUsd />
          </div>
        </div>
        <div className="text-2xl font-bold text-red-500 mb-1">-₹87.25</div>
        <p className="text-gray-500 text-sm">Across 3 groups</p>
      </div>

      {/* You Are Owed */}
      <div className="bg-white rounded-xl shadow p-6 hover:-translate-y-1 transition">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">You Are Owed </h3>
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-xl">
            <FaMoneyCheckAlt />
          </div>
        </div>
        <div className="text-2xl font-bold text-green-500 mb-1">₹330.75</div>
        <p className="text-gray-500 text-sm">From 5 people</p>
      </div>
    </div>
  );
}


// http://localhost:3000/login

// http://localhost:3000/signup