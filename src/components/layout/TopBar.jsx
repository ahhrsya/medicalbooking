import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline';

export default function TopBar() {
  return (
    <header className="h-[64px] bg-white border-b border-[#e5e4e7] flex items-center justify-between px-6 sticky top-0 z-10 w-full">
      <div className="flex-1 flex max-w-xl relative">
        <label htmlFor="search" className="sr-only">Search patients or appointments</label>
        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
          </div>
          <input
            id="search"
            className="block w-full rounded-md border-0 py-2 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-brand-teal sm:text-sm sm:leading-6 bg-gray-50 placeholder:text-gray-400"
            placeholder="Search patients, ID, or phone..."
            type="search"
            name="search"
          />
        </div>
      </div>

      <div className="flex items-center gap-6 ml-6">
        <button type="button" className="relative text-gray-400 hover:text-gray-500">
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-pending"></span>
          </span>
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        <div className="h-8 w-[1px] bg-gray-200" aria-hidden="true" />

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700 hidden lg:block">Dr. Sarah Chen</span>
          <img
            className="h-8 w-8 rounded-full bg-gray-50 object-cover ring-2 ring-white"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}
