import { MagnifyingGlassIcon, BellIcon, ChevronDownIcon, CalendarDaysIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';

export default function TopBar() {
  return (
    <div className="h-20 bg-transparent flex items-center justify-between px-8 transition-all duration-300">
      <div className="flex-1">
         <div className="relative max-w-sm">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search here..." 
              className="w-full bg-white border border-slate-100 rounded-2xl py-2.5 pl-10 pr-4 text-sm font-medium focus:ring-2 focus:ring-brand-indigo outline-none shadow-soft"
            />
         </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 bg-white border border-slate-100 px-4 py-2 rounded-2xl text-sm font-bold text-slate-700 shadow-soft hover:bg-slate-50 transition-all">
          <CalendarDaysIcon className="w-5 h-5 text-slate-400" />
          Weekly
          <ChevronDownIcon className="w-4 h-4 text-slate-400" />
        </button>

        <button className="flex items-center gap-2 bg-slate-900 border border-slate-900 px-4 py-2 rounded-2xl text-sm font-bold text-white shadow-soft transition-all hover:bg-slate-800">
          <ArrowUpTrayIcon className="w-5 h-5 text-slate-200" />
          Export
          <ChevronDownIcon className="w-4 h-4 text-slate-200" />
        </button>
      </div>
    </div>
  );
}
