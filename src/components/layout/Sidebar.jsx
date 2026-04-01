import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  CalendarIcon, 
  UsersIcon, 
  MapPinIcon, 
  ChatBubbleOvalLeftIcon, 
  BellIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  MoonIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/' },
  { name: 'Calendar', icon: CalendarIcon, href: '/calendar' },
  { name: 'Patient Directory', icon: UsersIcon, href: '/patients' },
  { name: 'Book Appt', icon: ClipboardDocumentCheckIcon, href: '/booking' },
  { name: 'Consultation Notes', icon: ClipboardDocumentCheckIcon, href: '/notes' },
  { name: 'Locations', icon: MapPinIcon, href: '/locations' },
  { name: 'Communications', icon: ChatBubbleOvalLeftIcon, href: '/communications' },
  { name: 'Billing', icon: CreditCardIcon, href: '/billing' },
];

const secondaryNavigation = [
  { name: 'Settings', icon: Cog6ToothIcon, href: '/settings' },
];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white border-r border-slate-100 z-50 shadow-sm">
      {/* Brand Logo */}
      <div className="flex items-center gap-3 px-6 h-20">
        <div className="w-10 h-10 rounded-xl bg-brand-indigo flex items-center justify-center text-white shadow-lg shadow-indigo-200 shrink-0">
          <ShieldCheckIcon className="w-6 h-6" />
        </div>
        <span className="text-xl font-bold font-plus-jakarta text-slate-900 tracking-tight truncate">Medibook</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 scrollbar-hide">
        <nav className="flex flex-col gap-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => `
                group flex items-center justify-between px-3 py-2.5 text-sm font-bold rounded-xl transition-all
                ${isActive 
                  ? 'bg-brand-indigo text-white shadow-lg shadow-indigo-100' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
              `}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5 shrink-0" />
                {item.name}
              </div>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="px-4 py-4 border-t border-slate-50 space-y-1">
        {secondaryNavigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-all"
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
        
        <div className="flex items-center justify-between px-3 py-2.5 text-sm font-bold text-slate-500">
           <div className="flex items-center gap-3">
              <MoonIcon className="h-5 w-5" />
              Dark Mode
           </div>
           <div className="w-9 h-5 bg-slate-100 rounded-full relative p-0.5 cursor-pointer">
              <div className="w-4 h-4 bg-white rounded-full shadow-sm ring-1 ring-slate-200" />
           </div>
        </div>

        {/* Profile Card Bottom */}
        <div className="mt-4 p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group cursor-pointer transition-all hover:bg-slate-100">
          <div className="flex items-center gap-3 text-left">
             <div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden shrink-0 ring-2 ring-white">
                <img src="/src/assets/hero.png" alt="Alice Fisher" className="w-full h-full object-cover" />
             </div>
             <div className="min-w-0">
                <p className="text-xs font-bold text-slate-900 leading-tight truncate">Alice Fisher</p>
                <p className="text-[10px] text-slate-400 font-medium leading-tight uppercase tracking-wider">Super Admin</p>
             </div>
          </div>
          <div className="text-slate-400 text-[10px]">↕</div>
        </div>
      </div>
    </aside>
  );
}
