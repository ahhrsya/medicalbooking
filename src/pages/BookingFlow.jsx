import { useState } from 'react';
import { clinicians, patients } from '../lib/db';
import Button from '../components/ui/Button';
import { ChevronRightIcon, ChevronLeftIcon, UserIcon, CalendarIcon, IdentificationIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const steps = [
  { id: 1, name: 'Patient Search', icon: IdentificationIcon },
  { id: 2, name: 'Service & Clinician', icon: UserIcon },
  { id: 3, name: 'Date & Time Selection', icon: CalendarIcon },
  { id: 4, name: 'Review & Confirm', icon: CheckCircleIcon },
];

const morningSlots = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];
const afternoonSlots = ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];

export default function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedClinician, setSelectedClinician] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleNext = () => currentStep < 4 && setCurrentStep(currentStep + 1);
  const handleBack = () => currentStep > 1 && setCurrentStep(currentStep - 1);

  return (
    <div className="flex flex-col space-y-8">
      {/* Header */}
      <div className="py-2">
         <h1 className="text-2xl font-bold font-plus-jakarta text-gray-900">New Appointment Booking</h1>
         <p className="text-sm text-gray-500 mt-1">Guided workflow for staff-side scheduling.</p>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-between px-10 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
        {steps.map((step) => (
           <div key={step.id} className="relative z-10 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${
                currentStep >= step.id 
                  ? 'bg-brand-teal border-brand-teal text-white shadow-md' 
                  : 'bg-white border-gray-200 text-gray-400'
              }`}>
                 <step.icon className="w-5 h-5" />
              </div>
              <p className={`mt-3 text-xs font-bold font-plus-jakarta uppercase tracking-wider ${
                currentStep >= step.id ? 'text-brand-teal' : 'text-gray-400'
              }`}>{step.name}</p>
           </div>
        ))}
      </div>

      {/* Wizard Content */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 min-h-[450px] flex flex-col">
         {currentStep === 1 && (
            <div className="space-y-6 flex-1">
               <h3 className="text-lg font-bold text-gray-900">Identify Patient</h3>
               <div className="max-w-xl space-y-4">
                  <div className="relative">
                     <input 
                       className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 placeholder:text-gray-400 focus:ring-1 focus:ring-brand-teal outline-none"
                       placeholder="Search by name, DOB, or ID..."
                     />
                  </div>
                  <div className="space-y-2">
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Results</p>
                     {patients.slice(0, 3).map(p => (
                        <div 
                           key={p.id}
                           onClick={() => setSelectedPatient(p)}
                           className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                             selectedPatient?.id === p.id 
                               ? 'border-brand-teal bg-brand-teal-light/20 ring-1 ring-brand-teal shadow-sm' 
                               : 'border-gray-100 hover:border-teal-200 hover:bg-gray-50'
                           }`}
                        >
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-brand-teal-light flex items-center justify-center text-brand-teal font-bold text-xs">{p.name[0]}</div>
                              <div>
                                 <p className="text-sm font-bold text-gray-900">{p.name}</p>
                                 <p className="text-xs text-gray-500 font-mono">ID: {p.id}</p>
                              </div>
                           </div>
                           {selectedPatient?.id === p.id && <CheckCircleIcon className="w-5 h-5 text-brand-teal" />}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         )}

         {currentStep === 2 && (
            <div className="space-y-6 flex-1">
                <h3 className="text-lg font-bold text-gray-900">Service Selection</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-4">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select Specialty & Service</p>
                      <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-brand-teal">
                         <option>General Practice Consultation (20 min) - €85</option>
                         <option>Physiotherapy Session (45 min) - €110</option>
                         <option>Mental Health Consultation (50 min) - €140</option>
                      </select>
                   </div>
                   <div className="space-y-4">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Prefered Clinician</p>
                      <div className="grid grid-cols-2 gap-3">
                         {clinicians.map((c) => (
                            <div 
                              key={c.id} 
                              onClick={() => setSelectedClinician(c)}
                              className={`p-3 rounded-lg border flex items-center gap-3 cursor-pointer transition-all ${
                                selectedClinician?.id === c.id 
                                  ? 'border-brand-teal bg-brand-teal-light/20 ring-1 ring-brand-teal' 
                                  : 'border-gray-100 hover:border-brand-teal-light hover:bg-gray-50'
                              }`}
                            >
                               <div className="w-8 h-8 rounded-full bg-gray-200" />
                               <div>
                                  <p className="text-xs font-bold text-gray-900 leading-tight">{c.name.split(' ')[1]}</p>
                                  <p className="text-[10px] text-gray-400 truncate">{c.specialty}</p>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
            </div>
         )}

         {currentStep === 3 && (
            <div className="space-y-6 flex-1">
               <h3 className="text-lg font-bold text-gray-900">DateTime Selection</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 border border-gray-100 p-4 rounded-xl bg-gray-50/50">
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Calendar</p>
                     <div className="text-center py-10 opacity-40">
                        Calendar Mock
                     </div>
                  </div>
                  <div className="md:col-span-2 space-y-6">
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Available Slots - Apr 02, 2026</p>
                     
                     <div className="space-y-4">
                        <p className="text-xs font-medium text-gray-500">Morning</p>
                        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                           {morningSlots.map(t => (
                              <button 
                                 key={t}
                                 onClick={() => setSelectedTime(t)}
                                 className={`px-3 py-2 rounded-lg text-xs font-bold border transition-all ${
                                   selectedTime === t 
                                     ? 'bg-brand-teal border-brand-teal text-white shadow-sm' 
                                     : 'bg-white border-gray-100 text-gray-600 hover:border-brand-teal-light hover:text-brand-teal'
                                 }`}
                              >
                                 {t}
                              </button>
                           ))}
                        </div>
                     </div>

                     <div className="space-y-4 pt-4">
                        <p className="text-xs font-medium text-gray-500">Afternoon</p>
                        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                           {afternoonSlots.map(t => (
                              <button 
                                 key={t}
                                 onClick={() => setSelectedTime(t)}
                                 className={`px-3 py-2 rounded-lg text-xs font-bold border transition-all ${
                                   selectedTime === t 
                                     ? 'bg-brand-teal border-brand-teal text-white shadow-sm' 
                                     : 'bg-white border-gray-100 text-gray-600 hover:border-brand-teal-light hover:text-brand-teal'
                                 }`}
                              >
                                 {t}
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}

         {currentStep === 4 && (
            <div className="space-y-10 flex-1 flex flex-col items-center justify-center max-w-lg mx-auto text-center">
               <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-2 ring-8 ring-green-50/50">
                  <CheckCircleIcon className="w-10 h-10" />
               </div>
               <div>
                  <h3 className="text-2xl font-bold font-plus-jakarta text-gray-900">Review Appointment</h3>
                  <p className="text-sm text-gray-500 mt-2">Please double check clinical details before final booking confirmation.</p>
               </div>

               <div className="w-full bg-gray-50 rounded-2xl p-6 border border-gray-100 text-left space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                     <span className="text-sm text-gray-500">Patient</span>
                     <span className="text-sm font-bold text-gray-900">{selectedPatient?.name || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                     <span className="text-sm text-gray-500">Clinician</span>
                     <span className="text-sm font-bold text-gray-900">{selectedClinician?.name || 'Any Available'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                     <span className="text-sm text-gray-500">DateTime</span>
                     <span className="text-sm font-bold text-brand-teal">Thursday, Apr 02 @ {selectedTime || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                     <span className="text-sm text-gray-500">Appointment Fee</span>
                     <span className="text-sm font-bold text-gray-900">€85.00</span>
                  </div>
               </div>
            </div>
         )}

         {/* Navigation Buttons */}
         <div className="mt-auto pt-10 flex justify-between border-t border-gray-100">
            <Button variant="secondary" onClick={handleBack} disabled={currentStep === 1}>
               <ChevronLeftIcon className="w-4 h-4 mr-2" />
               Back
            </Button>
            <div className="flex gap-4">
               {currentStep < 4 ? (
                 <Button variant="primary" onClick={handleNext}>
                   Continue
                   <ChevronRightIcon className="w-4 h-4 ml-2" />
                 </Button>
               ) : (
                 <Button variant="primary" className="bg-[#059669] hover:bg-[#047857]" onClick={() => alert('Booking Confirmed!')}>
                    Confirm & Complete Booking
                 </Button>
               )}
            </div>
         </div>
      </div>
    </div>
  );
}
