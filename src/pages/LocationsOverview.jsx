import { clinics, clinicians } from '../lib/db';
import DataCard from '../components/ui/DataCard';
import { MapPinIcon, UsersIcon, BanknotesIcon, ChartBarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const comparisonData = [
  { name: 'City Centre', appts: 68, util: 84, revenue: 14200 },
  { name: 'Meridian North', appts: 42, util: 71, revenue: 9800 },
  { name: 'Meridian South', appts: 51, util: 78, revenue: 11500 },
  { name: 'Meridian East', appts: 28, util: 62, revenue: 6400 },
];

export default function LocationsOverview() {
  return (
    <div className="flex flex-col space-y-8">
      {/* Header */}
      <div className="py-2">
         <h1 className="text-2xl font-bold font-plus-jakarta text-gray-900">Multi-Location Group Overview</h1>
         <p className="text-sm text-gray-500 mt-1">High-level visibility for Meridian Health Group performance.</p>
      </div>

      {/* Location Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {clinics.map((clinic, idx) => (
            <DataCard key={clinic.id} className="cursor-pointer hover:border-brand-teal transition-all group">
               <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-teal-50 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors">
                     <MapPinIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{clinic.city}</span>
               </div>
               <h3 className="text-base font-bold text-gray-900 group-hover:text-brand-teal transition-colors mb-4">{clinic.name}</h3>
               <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                     <span className="text-gray-500">Appts Today</span>
                     <span className="font-bold text-gray-900">{comparisonData[idx].appts}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                     <span className="text-gray-500">Utilisation</span>
                     <span className="font-bold text-brand-teal">{comparisonData[idx].util}%</span>
                  </div>
                  <div className="pt-2 border-t border-gray-50 flex justify-between items-center">
                     <span className="text-xs text-gray-400 font-medium">REV MTD</span>
                     <span className="text-sm font-bold text-gray-700">€{comparisonData[idx].revenue.toLocaleString()}</span>
                  </div>
               </div>
            </DataCard>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Comparison Table */}
         <div className="lg:col-span-2">
            <DataCard title="Performance Comparison" subtitle="Weekly revenue by location">
               <div className="mt-4 overflow-hidden border border-gray-50 rounded-xl">
                  <table className="min-w-full divide-y divide-gray-100">
                     <thead className="bg-gray-50/50">
                        <tr className="text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                           <th className="px-6 py-4">Location</th>
                           <th className="px-6 py-4">Avg. Daily Appts</th>
                           <th className="px-6 py-4">No-Show Rate</th>
                           <th className="px-6 py-4 text-right">Revenue Efficiency</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-50">
                        {comparisonData.map(l => (
                           <tr key={l.name} className="text-sm">
                              <td className="px-6 py-4 font-bold text-gray-900">{l.name}</td>
                              <td className="px-6 py-4 text-gray-600">{Math.floor(l.appts * 0.9)}</td>
                              <td className="px-6 py-4">
                                 <span className="text-amber-600 font-semibold">{Math.floor(Math.random() * 5 + 3)}%</span>
                              </td>
                              <td className="px-6 py-4 text-right">
                                 <div className="flex items-center justify-end gap-2 text-green-600 font-bold">
                                    <ArrowTrendingUpIcon className="w-4 h-4" />
                                    +{Math.floor(Math.random() * 10 + 5)}%
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </DataCard>
         </div>

         {/* Clinician Leaderboard */}
         <div className="lg:col-span-1">
            <DataCard title="Group Leaderboard" subtitle="Top performing clinicians MTD">
               <div className="space-y-5 mt-4">
                  {clinicians.slice(0, 4).map((c, i) => (
                     <div key={c.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className="relative">
                              <div className="w-10 h-10 rounded-full bg-gray-100" />
                              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-brand-teal text-white flex items-center justify-center text-[10px] font-bold ring-2 ring-white">
                                 {i + 1}
                              </div>
                           </div>
                           <div>
                              <p className="text-sm font-bold text-gray-900">{c.name}</p>
                              <p className="text-xs text-gray-500">{c.specialty}</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-sm font-bold text-brand-teal">98%</p>
                           <p className="text-[10px] text-gray-400 font-medium">Patient Score</p>
                        </div>
                     </div>
                  ))}
               </div>
            </DataCard>
         </div>
      </div>
    </div>
  );
}
