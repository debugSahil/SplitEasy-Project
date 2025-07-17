import { FaPlus } from "react-icons/fa";
import DashboardStats from "./DashboardStats";

export default function MainContent() {
  return (
    <main className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md flex items-center gap-2">
          <FaPlus />
          Add Expense
        </button>
      </div>
    <DashboardStats/>
    </main>
    


     
  );
}
