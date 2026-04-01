import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  CalendarIcon,
  UsersIcon,
  PlusCircleIcon,
  MapIcon,
  BellAlertIcon,
  BanknotesIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
  { name: 'Directory', href: '/patients', icon: UsersIcon },
  { name: 'Book Appt', href: '/booking', icon: PlusCircleIcon },
  { name: 'Locations', href: '/locations', icon: MapIcon },
  { name: 'Communications', href: '/communications', icon: BellAlertIcon },
  { name: 'Billing', href: '/billing', icon: BanknotesIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col w-[260px] bg-white border-r border-[#e5e4e7] h-screen fixed top-0 left-0">
      <div className="flex items-center h-16 px-6 border-b border-[#e5e4e7]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-teal flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <span className="text-xl font-bold font-plus-jakarta text-gray-900 tracking-tight">MediBook</span>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'bg-bg-soft text-brand-teal'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  className={`flex-shrink-0 -ml-1 mr-3 h-5 w-5 transition-colors ${
                    isActive ? 'text-brand-teal' : 'text-gray-400 group-hover:text-gray-500'
                  }`}
                  aria-hidden="true"
                />
                <span className="truncate">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-[#e5e4e7]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-teal-light flex items-center justify-center text-brand-teal font-semibold">
            MH
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Meridian Health</p>
            <p className="text-xs text-gray-500">London Central</p>
          </div>
        </div>
      </div>
    </div>
  );
}
