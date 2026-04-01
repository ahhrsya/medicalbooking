import { clinicians, todayAppointments } from '../lib/db';
import StatusBadge from '../components/ui/StatusBadge';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/24/outline';

const timeSlots = [];
for (let i = 8; i <= 18; i++) {
  timeSlots.push(`${i}:00`);
  timeSlots.push(`${i}:30`);
}

export default function AppointmentCalendar() {
  return (
    <div className="flex flex-col h-full space-y-4">
      {/* Calendar Header */}
      <div className="flex items-center justify-between bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold font-plus-jakarta text-gray-900">April 1, 2026</h2>
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-1">
            <button className="p-1 hover:bg-white rounded hover:shadow-sm"><ChevronLeftIcon className="w-5 h-5 text-gray-600" /></button>
            <button className="px-3 py-1 text-sm font-medium bg-white rounded shadow-sm text-brand-teal">Today</button>
            <button className="p-1 hover:bg-white rounded hover:shadow-sm"><ChevronRightIcon className="w-5 h-5 text-gray-600" /></button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-50 border border-gray-200 rounded-lg p-1">
            <button className="px-3 py-1 text-sm font-medium bg-white rounded shadow-sm">Day</button>
            <button className="px-3 py-1 text-sm font-medium text-gray-500 hover:text-gray-900">Week</button>
            <button className="px-3 py-1 text-sm font-medium text-gray-500 hover:text-gray-900">Month</button>
          </div>
          <button className="flex items-center gap-2 bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-teal-dark shadow-sm">
            <PlusIcon className="w-4 h-4" />
            New Appointment
          </button>
        </div>
      </div>

      {/* Calendar Grid Container */}
      <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
        {/* Clinician Headers */}
        <div className="flex border-b border-gray-100 bg-gray-50/50 ml-20">
          {clinicians.map((clinician) => (
            <div key={clinician.id} className="min-w-[180px] flex-1 px-4 py-3 border-r border-gray-100 text-center">
              <p className={`text-xs font-bold uppercase tracking-wider ${clinician.color}`}>{clinician.name}</p>
              <p className="text-[10px] text-gray-500 font-medium">{clinician.specialty}</p>
            </div>
          ))}
        </div>

        {/* Calendar Body (Time slots + Columns) */}
        <div className="flex-1 overflow-y-auto relative">
          <div className="flex min-h-full">
            {/* Time labels axis */}
            <div className="w-20 flex-shrink-0 bg-gray-50/30 border-r border-gray-100">
              {timeSlots.map((time) => (
                <div key={time} className="h-[48px] border-b border-gray-50 flex items-start justify-center pt-2">
                  <span className="text-[10px] font-mono font-medium text-gray-400">{time}</span>
                </div>
              ))}
            </div>

            {/* Grid Columns */}
            <div className="flex flex-1 relative">
               {/* Vertical Grid Lines */}
               {clinicians.map((clinician) => (
                  <div key={clinician.id} className="min-w-[180px] flex-1 border-r border-gray-100 relative h-full">
                     {/* Horizontal Guide Lines */}
                     {timeSlots.map((time) => (
                        <div key={time} className="h-[48px] border-b border-gray-100/50 w-full" />
                     ))}

                     {/* Appointment Slots for this Clinician */}
                     {todayAppointments
                      .filter(appt => appt.clinician.id === clinician.id)
                      .map((appt) => {
                        // Very rough positioning logic for dummy display
                        const hour = parseInt(appt.time.split(':')[0]);
                        const minute = parseInt(appt.time.split(':')[1]);
                        const offsetSlots = ((hour - 8) * 2) + (minute >= 30 ? 1 : 0);
                        const durationSlots = parseInt(appt.duration.split(' ')[0]) / 30;
                        
                        return (
                          <div 
                            key={appt.id}
                            className={`absolute top-[${offsetSlots * 48}px] left-2 right-2 rounded-lg border-l-4 p-2 transition-all hover:ring-2 hover:shadow-md cursor-pointer z-10 ${clinician.bgOpacity} ${clinician.border}`}
                            style={{ top: `${offsetSlots * 48 + 4}px`, height: `${Math.max(durationSlots * 48 - 8, 40)}px` }}
                          >
                            <div className="flex flex-col h-full justify-between">
                              <div>
                                <p className="text-[11px] font-bold text-gray-900 leading-tight truncate">{appt.patient.name}</p>
                                <p className="text-[10px] text-gray-600 font-medium truncate">{appt.service}</p>
                              </div>
                              <p className="text-[9px] font-mono font-medium text-gray-500 uppercase">{appt.time}</p>
                            </div>
                          </div>
                        )
                      })
                     }
                  </div>
               ))}

               {/* Current Time Indicator (Static mock) */}
               <div className="absolute left-0 right-0 h-0.5 bg-red-400 z-20 pointer-events-none" style={{ top: '120px' }}>
                  <div className="w-2 h-2 rounded-full bg-red-400 absolute -left-1 -top-[3px]" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
