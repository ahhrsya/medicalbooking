import { patients } from '../lib/db';
import { MagnifyingGlassIcon, PlusIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function PatientDirectory() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2">
        <div>
          <h1 className="text-2xl font-bold font-plus-jakarta text-gray-900">Patient Directory</h1>
          <p className="text-sm text-gray-500 mt-1">Manage all patient records and history.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm">
            Bulk Export
          </button>
          <button className="flex items-center gap-2 bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-teal-dark shadow-sm">
            <PlusIcon className="w-4 h-4" />
            Add Patient
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-lg border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-teal sm:text-sm sm:leading-6 bg-gray-50"
            placeholder="Search patient name, ID, or DOB..."
          />
        </div>
        <div className="flex items-center gap-2">
           <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-teal">
              <option>All Locations</option>
              <option>Meridian City Centre</option>
              <option>Meridian North</option>
           </select>
           <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-teal">
              <option>Any Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>New</option>
           </select>
        </div>
      </div>

      {/* Patient Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Patient Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Visit</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Upcoming</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {patients.map((patient) => (
              <tr 
                key={patient.id} 
                className="hover:bg-teal-50/50 cursor-pointer transition-colors group"
                onClick={() => navigate(`/patients/${patient.id}`)}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-teal-light flex items-center justify-center text-brand-teal font-semibold text-sm">
                      {patient.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-brand-teal transition-colors">
                        {patient.name}
                      </div>
                      <div className="text-[11px] font-mono font-medium text-gray-500 uppercase">
                        ID: {patient.id} &bull; DOB: {patient.dob}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-700 font-medium">
                    {patient.lastVisit}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">
                    -
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    patient.status === 'Active' ? 'bg-green-50 text-green-700' :
                    patient.status === 'New' ? 'bg-blue-50 text-blue-700' :
                    'bg-gray-100 text-gray-500'
                  }`}>
                    {patient.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                   <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <EllipsisHorizontalIcon className="w-5 h-5" />
                   </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination mock */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500 bg-gray-50/30">
           <p>Showing 1 to 5 of 5 patients</p>
           <div className="flex items-center gap-2">
              <button disabled className="px-3 py-1 border border-gray-200 rounded-md bg-white text-gray-300">Previous</button>
              <button disabled className="px-3 py-1 border border-gray-200 rounded-md bg-white text-gray-300">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
}
