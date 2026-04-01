import { useState } from 'react';
import { patients, clinicians } from '../lib/db';
import Button from '../components/ui/Button';
import { IdentificationIcon, MicrophoneIcon, ShieldCheckIcon, DocumentTextIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const soapSections = [
  { id: 'S', title: 'Subjective', placeholder: 'Reported symptoms, patient history, current concerns...' },
  { id: 'O', title: 'Objective', placeholder: 'Vital signs, physical exam findings, test results...' },
  { id: 'A', title: 'Assessment', placeholder: 'Diagnosis, clinical impression, medical reasoning...' },
  { id: 'P', title: 'Plan', placeholder: 'Treatment, prescriptions, follow-up, referrals...' },
];

export default function ConsultationNotes() {
  const [locked, setLocked] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2">
        <div className="flex items-center gap-4">
           <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-lg"><ChevronLeftIcon className="w-5 h-5 text-gray-500" /></button>
           <div>
              <h1 className="text-2xl font-bold font-plus-jakarta text-gray-900">Consultation Notes</h1>
              <p className="text-sm text-gray-500 mt-1">Meridian Central &bull; <span className="font-mono text-gray-700">Ref: #CN-2026-0041</span></p>
           </div>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
           <span className="inline-flex items-center text-xs font-medium text-green-600">
             <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
             Auto-saving...
           </span>
           <Button variant="primary" onClick={() => setLocked(true)} disabled={locked}>
             <ShieldCheckIcon className="w-4 h-4 mr-2" />
             Sign & Lock Note
           </Button>
        </div>
      </div>

      {/* Patient Mini-Header */}
      <div className="bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-teal-light flex items-center justify-center text-brand-teal font-bold text-sm">EW</div>
            <div>
               <p className="text-sm font-bold text-gray-900">{patients[0].name}</p>
               <p className="text-xs text-gray-500 font-mono">ID: {patients[0].id} &bull; DOB: {patients[0].dob}</p>
            </div>
         </div>
         <div className="h-8 w-px bg-gray-100" />
         <div className="text-right">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Clinician</p>
            <p className="text-sm font-bold text-brand-teal">{clinicians[0].name}</p>
         </div>
      </div>

      {/* Editor Body */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
         <div className="w-full md:w-64 bg-gray-50/50 border-r border-gray-100 p-4 space-y-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">SOAP Sections</h3>
            <nav className="space-y-1">
               {soapSections.map(s => (
                  <button key={s.id} className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors flex items-center justify-between">
                     <span>{s.id}. {s.title}</span>
                     <DocumentTextIcon className="w-4 h-4 text-gray-300" />
                  </button>
               ))}
            </nav>
            <div className="pt-6 border-t border-gray-200">
               <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Templates</h3>
               <select className="w-full bg-white border border-gray-200 rounded-lg p-2 text-sm text-gray-700 outline-none focus:ring-1 focus:ring-brand-teal">
                  <option>General Follow-up</option>
                  <option>Initial Intake</option>
                  <option>Diagnostic Review</option>
               </select>
            </div>
         </div>

         <div className="flex-1 p-8 space-y-10 bg-white">
            {soapSections.map((section) => (
               <div key={section.id} className="relative group">
                  <div className="absolute -left-12 top-1 w-8 h-8 rounded-full bg-brand-teal-light text-brand-teal font-bold flex items-center justify-center text-sm ring-4 ring-white">
                     {section.id}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                     <h3 className="text-sm font-bold text-gray-900 tracking-tight">{section.title}</h3>
                     <button className="p-1.5 text-gray-400 hover:text-brand-teal transition-colors" title="Voice to text">
                        <MicrophoneIcon className="w-4 h-4" />
                     </button>
                  </div>
                  <textarea 
                    className={`w-full border-0 p-0 text-sm leading-relaxed text-gray-700 placeholder:text-gray-300 focus:ring-0 resize-none min-h-[80px] ${locked ? 'bg-gray-50 px-3 py-2 rounded-lg' : ''}`}
                    placeholder={section.placeholder}
                    readOnly={locked}
                  />
                  {!locked && <div className="h-px bg-gray-100 w-full mt-2" />}
               </div>
            ))}

            {locked && (
              <div className="mt-12 p-6 rounded-xl border border-green-100 bg-green-50/30 flex items-center gap-4">
                 <ShieldCheckIcon className="w-10 h-10 text-green-500" />
                 <div>
                    <p className="text-sm font-bold text-gray-900">Electronically Signed and Locked</p>
                    <p className="text-xs text-gray-500 font-mono">By Dr. Sarah Chen (GMC 443219) on 01 Apr 2026, 09:42:11 London Time</p>
                 </div>
              </div>
            )}
         </div>
      </div>
    </div>
  );
}
