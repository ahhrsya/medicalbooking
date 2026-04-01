import { useState } from 'react';
import DataCard from '../components/ui/DataCard';
import StatusBadge from '../components/ui/StatusBadge';
import Button from '../components/ui/Button';
import { IdentificationIcon, BuildingOffice2Icon, ClockIcon, BriefcaseIcon, ShieldCheckIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

const settingsTabs = [
  { id: 'profile', name: 'Clinic Profile', icon: BuildingOffice2Icon },
  { id: 'services', name: 'Services & Pricing', icon: BriefcaseIcon },
  { id: 'hours', name: 'Working Hours', icon: ClockIcon },
  { id: 'security', name: 'Security & Compliance', icon: ShieldCheckIcon },
];

const mockServices = [
  { id: 1, name: 'GP Consultation', duration: '20 min', price: 85, color: '#0d9488' },
  { id: 2, name: 'Physiotherapy Session', duration: '45 min', price: 110, color: '#7c3aed' },
  { id: 3, name: 'Mental Health Consultation', duration: '50 min', price: 140, color: '#ea580c' },
  { id: 4, name: 'Dental Check-up', duration: '30 min', price: 75, color: '#0369a1' },
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="flex flex-col space-y-6">
      {/* Page Header */}
      <div className="py-2">
         <h1 className="text-2xl font-bold font-plus-jakarta text-gray-900">Settings</h1>
         <p className="text-sm text-gray-500 mt-1">Configure clinic profile, management, and operational rules.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
         {/* Sidebar Navigation */}
         <div className="w-full lg:w-64 flex flex-col space-y-1">
            {settingsTabs.map(tab => (
               <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === tab.id 
                      ? 'bg-brand-teal text-white shadow-md shadow-brand-teal/20' 
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                  }`}
               >
                  <tab.icon className="w-5 h-5" />
                  {tab.name}
               </button>
            ))}
         </div>

         {/* Tab Content */}
         <div className="flex-1 min-h-[500px]">
           {activeTab === 'profile' && (
              <DataCard title="Clinic Information" subtitle="Primary identity for external patient booking.">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Clinic Name</label>
                        <input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-brand-teal" defaultValue="Meridian City Centre" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Primary Specialty</label>
                        <input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-brand-teal" defaultValue="Multi-specialty Polyclinic" />
                     </div>
                     <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Business Address</label>
                        <input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-brand-teal" defaultValue="14 Oxford Rd, Westminster, London, UK" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Point of Contact</label>
                        <input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-brand-teal" defaultValue="Sarah Chen (Medical Director)" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Clinic Email</label>
                        <input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-brand-teal" defaultValue="central@meridianhealth.uk" />
                     </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-50 flex justify-end">
                     <Button variant="primary" className="px-10">Save Profile</Button>
                  </div>
              </DataCard>
           )}

           {activeTab === 'services' && (
              <DataCard title="Services & Pricing" subtitle="Managed list of available bookable services." headerAction={
                 <Button variant="primary" className="text-xs scale-90 px-3 py-1 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50">
                    <PlusIcon className="w-3 h-3 mr-1" /> Add Service
                 </Button>
              }>
                 <div className="divide-y divide-gray-50 space-y-4 pt-4">
                    {mockServices.map(s => (
                       <div key={s.id} className="flex items-center justify-between py-4 first:pt-0">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-[10px]" style={{ backgroundColor: s.color }}>{s.id}</div>
                             <div>
                                <p className="text-sm font-bold text-gray-900">{s.name}</p>
                                <p className="text-xs text-gray-500">{s.duration} &bull; <span className="font-bold text-brand-teal">€{s.price}</span></p>
                             </div>
                          </div>
                          <div className="flex items-center gap-3">
                             <button className="p-2 text-gray-400 hover:text-brand-teal transition-colors"><IdentificationIcon className="w-4 h-4" /></button>
                             <button className="p-2 text-gray-400 hover:text-red-500 transition-colors"><TrashIcon className="w-4 h-4" /></button>
                          </div>
                       </div>
                    ))}
                 </div>
              </DataCard>
           )}

           {activeTab === 'hours' && (
              <DataCard title="Standard Working Hours" subtitle="Default availability for clinicians across the week.">
                 <div className="mt-6 space-y-4">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                       <div key={day} className="flex items-center justify-between py-2 border-b border-gray-50">
                          <span className={`text-sm font-bold ${day === 'Sunday' || day === 'Saturday' ? 'text-gray-400' : 'text-gray-900'}`}>{day}</span>
                          <div className="flex items-center gap-4">
                             <div className="flex items-center gap-2">
                                <input type="text" className="w-20 bg-white border border-gray-200 rounded-lg px-2 py-1.5 text-xs text-center font-mono focus:ring-1 focus:ring-brand-teal outline-none" defaultValue={day === 'Sunday' ? 'Closed' : '08:00'} />
                                <span className="text-xs text-gray-400">to</span>
                                <input type="text" className="w-20 bg-white border border-gray-200 rounded-lg px-2 py-1.5 text-xs text-center font-mono focus:ring-1 focus:ring-brand-teal outline-none" defaultValue={day === 'Sunday' ? 'Closed' : '18:00'} />
                             </div>
                             <div className="w-10 flex justify-center">
                                <input type="checkbox" className="rounded text-brand-teal focus:ring-brand-teal w-4 h-4" defaultChecked={day !== 'Sunday'} />
                             </div>
                          </div>
                       </div>
                    ))}
                 </div>
              </DataCard>
           )}
         </div>
      </div>
    </div>
  );
}
