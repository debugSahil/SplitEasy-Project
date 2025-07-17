

//app/login/page.jsx
import Header from "@/components/Header"; 
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import GroupsSection from "@/components/GroupsSection";
import RecentActivity from "@/components/RecentActivity";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to SplitEasy</h1>
          <MainContent />
          <GroupsSection />
          <div className="p-6">
           <RecentActivity />
          </div>
        </main>
      </div>
    </div>
  );
}








