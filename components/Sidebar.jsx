import {
  FaHome,
  FaUsers,
  FaReceipt,
  FaChartPie,
  FaExchangeAlt,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="bg-white rounded-2xl shadow-md p-6 mt-6 h-[calc(100vh-100px)] sticky top-0 overflow-y-auto w-64">
      <ul className="space-y-1">
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-3 rounded-lg text-blue-600 bg-blue-50 font-medium"
          >
            <FaHome className="mr-3 text-lg" />
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-700 font-medium transition-all"
          >
            <FaUsers className="mr-3 text-lg" />
            Groups
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-700 font-medium transition-all"
          >
            <FaReceipt className="mr-3 text-lg" />
            Expenses
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-700 font-medium transition-all"
          >
            <FaChartPie className="mr-3 text-lg" />
            Balances
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-700 font-medium transition-all"
          >
            <FaExchangeAlt className="mr-3 text-lg" />
            Settlements
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-700 font-medium transition-all"
          >
            <FaCog className="mr-3 text-lg" />
            Settings
          </a>
        </li>

        <li>
          <hr className="my-4 border-gray-200" />
        </li>

        <li>
          <a
            href="#"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-700 font-medium transition-all"
          >
            <FaQuestionCircle className="mr-3 text-lg" />
            Help & Support
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-700 font-medium transition-all"
          >
            <FaSignOutAlt className="mr-3 text-lg" />
            Logout
          </a>
        </li>
      </ul>
    </aside>
  );
}



