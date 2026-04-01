import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-bg-soft font-inter">
      {/* Sidebar is fixed 256px (w-64) */}
      <div className="fixed inset-y-0 left-0 w-64">
        <Sidebar />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 pl-64 flex flex-col">
        <TopBar />
        <main className="flex-1 px-8 py-4 overflow-auto">
          <div className="max-w-[1400px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
