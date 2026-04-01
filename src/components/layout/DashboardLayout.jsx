import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-bg-page font-sans">
      <Sidebar />
      <div className="flex-1 ml-[260px] flex flex-col">
        <TopBar />
        <main className="flex-1 container max-w-7xl mx-auto px-6 py-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
