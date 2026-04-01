import { useParams, useNavigate } from 'react-router-dom';
import { patients, clinicians, todayAppointments } from '../lib/db';
import { useState } from 'react';
import DataCard from '../components/ui/DataCard';
import StatusBadge from '../components/ui/StatusBadge';
import { ChevronLeftIcon, PhoneIcon, EnvelopeIcon, DocumentPlusIcon, PencilSquareIcon, IdentificationIcon } from '@heroicons/react/24/outline';

const tabs = [
  { id: 'overview', name: 'Overview' },
  { id: 'appointments', name: 'Appointments' },
  { id: 'notes', name: 'Consultation Notes' },
  { id: 'documents', name: 'Documents' },
  { id: 'billing', name: 'Billing' },
];

export default function PatientProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const patient = patients.find(p => p.id === id);

  if (!patient) return <div className="text-center py-12">Patient not found</div>;

  const patientAppts = todayAppointments.filter(a => a.patient.id === id);

  return (
    <div className="flex flex-col space-y-6">
      {/* Page Navigation */}
      <button 
        onClick={() => navigate('/patients')}
        className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-teal transition-colors w-fit"
      >
        <ChevronLeftIcon className="w-4 h-4" />
        Back to Directory
      </button>

      {/* Profile Header */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-brand-teal-light flex items-center justify-center text-brand-teal font-bold text-2xl">
              {patient.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold font-plus-jakarta text-gray-900">{patient.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                <span className="flex items-center gap-1.5"><IdentificationIcon className="w-4 h-4" /> {patient.id}</span>
                <span>&bull;</span>
                <span>DOB: <span className="font-mono text-gray-900">{patient.dob}</span></span>
                <span>&bull;</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${patient.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'}`}>
                  {patient.status} Patient
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm transition">
               <PencilSquareIcon className="w-4 h-4" /> Edit Profile
            </button>
            <button className="flex items-center gap-2 bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-teal-dark shadow-sm transition">
               Book Appointment
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-gray-50">
           <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gray-50"><PhoneIcon className="w-5 h-5 text-gray-400" /></div>
              <div>
                 <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Phone</p>
                 <p className="text-sm font-semibold text-gray-900">{patient.phone}</p>
              </div>
           </div>
           <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gray-50"><EnvelopeIcon className="w-5 h-5 text-gray-400" /></div>
              <div>
                 <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Email</p>
                 <p className="text-sm font-semibold text-gray-900">{patient.email}</p>
              </div>
           </div>
           <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gray-50"><DocumentPlusIcon className="w-5 h-5 text-gray-400" /></div>
              <div>
                 <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Insurance</p>
                 <p className="text-sm font-semibold text-gray-900">{patient.insurance}</p>
              </div>
           </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 text-sm font-semibold border-b-2 transition-all ${
              activeTab === tab.id
                ? 'border-brand-teal text-brand-teal'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content for Tabs */}
      <div className="min-h-[400px]">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
               <DataCard title="Medical Overview" subtitle="Key clinical highlights">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Allergies</h4>
                        <div className="flex flex-wrap gap-2">
                           <span className="px-3 py-1 bg-red-50 text-red-700 rounded-md text-xs font-bold ring-1 ring-inset ring-red-600/10">Penicillin</span>
                           <span className="px-3 py-1 bg-red-50 text-red-700 rounded-md text-xs font-bold ring-1 ring-inset ring-red-600/10">Shellfish</span>
                        </div>
                     </div>
                     <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Active Conditions</h4>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                           <li>Type 2 Diabetes (Managed)</li>
                           <li>Hypertension</li>
                        </ul>
                     </div>
                  </div>
               </DataCard>

               <DataCard title="Last Consultation Recap" subtitle={`Dated: ${patient.lastVisit}`}>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                     Patient presented for a follow-up on their diabetes management. Blood sugar levels are stable. Advised minor adjustments to dietary intake to manage morning spikes. Next review in 3 months.
                  </p>
                  <button className="text-brand-teal font-semibold text-sm hover:underline">View full SOAP note</button>
               </DataCard>
            </div>
            
            <div className="lg:col-span-1 space-y-6">
               <DataCard title="Quick Metrics">
                  <div className="space-y-4">
                     <div className="flex justify-between items-center py-2 border-b border-gray-50">
                        <span className="text-sm text-gray-500">Waitlist Status</span>
                        <span className="text-sm font-semibold text-gray-900">None</span>
                     </div>
                     <div className="flex justify-between items-center py-2 border-b border-gray-50">
                        <span className="text-sm text-gray-500">Last Weight</span>
                        <span className="text-sm font-semibold text-gray-900">68 kg <span className="text-xs text-gray-400">(Jan 14)</span></span>
                     </div>
                     <div className="flex justify-between items-center py-2 border-b border-gray-50">
                        <span className="text-sm text-gray-500">Blood Pressure</span>
                        <span className="text-sm font-semibold text-gray-900">120/80</span>
                     </div>
                  </div>
               </DataCard>
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
           <DataCard title="Visit History">
              <div className="divide-y divide-gray-100">
                {patientAppts.length > 0 ? patientAppts.map(appt => (
                   <div key={appt.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 first:pt-0 last:pb-0">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-gray-50 rounded-lg flex flex-col items-center justify-center">
                            <span className="text-[10px] font-bold uppercase text-gray-400">Apr</span>
                            <span className="text-lg font-bold text-gray-900 leading-none">01</span>
                         </div>
                         <div>
                            <p className="text-sm font-bold text-gray-900">{appt.service}</p>
                            <p className={`text-xs font-medium ${appt.clinician.color}`}>{appt.clinician.name}</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <StatusBadge status={appt.status} />
                         <span className="text-sm font-mono text-gray-500">{appt.time}</span>
                         <button className="text-sm font-semibold text-brand-teal hover:underline transition">View Details</button>
                      </div>
                   </div>
                )) : <p className="text-center text-sm text-gray-500 py-6">No appointment history found for this period.</p>}
              </div>
           </DataCard>
        )}

        {activeTab === 'notes' && (
           <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 text-center">
              <PencilSquareIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">Clinical Notes</h3>
              <p className="text-sm text-gray-500 mb-6">Create and manage consultation records using SOAP templates.</p>
              <button className="bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-teal-dark shadow-sm">
                Create New Note
              </button>
           </div>
        )}
      </div>
    </div>
  );
}
