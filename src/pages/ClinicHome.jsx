import { useState } from 'react';
import { todayKPIs, todayAppointments } from '../lib/db';
import DataCard from '../components/ui/DataCard';
import StatusBadge from '../components/ui/StatusBadge';
import Button from '../components/ui/Button';

export default function ClinicHome() {
  const [appointments, setAppointments] = useState(todayAppointments);

  const handleCheckIn = (id) => {
    setAppointments(prev => prev.map(appt => 
      appt.id === id ? { ...appt, status: 'Checked-in' } : appt
    ));
  };

  const nextAppt = appointments.find(a => ['Confirmed', 'Pending'].includes(a.status));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2">
        <div>
          <h1 className="text-2xl font-bold font-plus-jakarta text-gray-900">Today at Meridian Central</h1>
          <p className="text-sm text-gray-500 mt-1">Tuesday, April 1, 2026</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Button variant="primary" onClick={() => alert('Booking flow opens here')}>
            New Appointment
          </Button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        <DataCard className="px-5 py-5 pb-6">
          <p className="text-sm font-medium text-gray-500 truncate">Total Appointments</p>
          <p className="mt-2 text-3xl font-bold font-plus-jakarta text-gray-900">{todayKPIs.totalAppointments}</p>
        </DataCard>

        <DataCard className="px-5 py-5 pb-6">
          <p className="text-sm font-medium text-gray-500 truncate">Checked In</p>
          <div className="mt-2 flex items-baseline gap-2">
            <p className="text-3xl font-bold font-plus-jakarta text-[#10b981]">{appointments.filter(a => a.status === 'Checked-in').length + 38}</p>
            <p className="text-sm text-gray-500">/ {todayKPIs.totalAppointments}</p>
          </div>
        </DataCard>

        <DataCard className="px-5 py-5 pb-6 border-l-4 border-l-[#dc2626]">
          <p className="text-sm font-medium text-gray-500 truncate">No-Shows</p>
          <p className="mt-2 text-3xl font-bold font-plus-jakarta text-[#dc2626]">{todayKPIs.noShows}</p>
        </DataCard>

        <DataCard className="px-5 py-5 pb-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500 truncate">Utilisation</p>
            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              On Target
            </span>
          </div>
          <p className="mt-2 text-3xl font-bold font-plus-jakarta text-gray-900">{todayKPIs.utilisationPercent}%</p>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-brand-teal h-1.5 rounded-full" style={{ width: `${todayKPIs.utilisationPercent}%` }}></div>
          </div>
        </DataCard>

        <DataCard className="px-5 py-5 pb-6">
          <p className="text-sm font-medium text-gray-500 truncate">Revenue Today</p>
          <p className="mt-2 text-3xl font-bold font-plus-jakarta text-gray-900">€{todayKPIs.revenueToday.toLocaleString()}</p>
        </DataCard>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Next up quick action panel */}
        <div className="lg:col-span-1 space-y-6">
          <DataCard title="Up Next">
            {nextAppt ? (
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-bold font-plus-jakarta text-gray-900">{nextAppt.patient.name}</h4>
                    <p className="text-sm text-gray-500 font-mono mt-1">ID: {nextAppt.patient.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold font-mono text-brand-teal">{nextAppt.time}</p>
                    <p className="text-sm text-gray-500">{nextAppt.duration}</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Service</span>
                    <span className="font-medium text-gray-900">{nextAppt.service}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Clinician</span>
                    <span className={`font-medium ${nextAppt.clinician.color}`}>{nextAppt.clinician.name}</span>
                  </div>
                </div>

                <Button 
                  className="w-full text-base py-3" 
                  onClick={() => handleCheckIn(nextAppt.id)}
                  variant="primary"
                >
                  Check In Patient
                </Button>
              </div>
            ) : (
              <p className="text-sm text-gray-500 text-center py-6">No more upcoming appointments.</p>
            )}
          </DataCard>
        </div>

        {/* Timeline */}
        <div className="lg:col-span-2">
          <DataCard title="Today's Schedule" subtitle="Next 4 Hours">
            <div className="flow-root mt-4">
              <ul role="list" className="-mb-8">
                {appointments.map((appt, apptIdx) => (
                  <li key={appt.id}>
                    <div className="relative pb-8">
                      {apptIdx !== appointments.length - 1 ? (
                        <span className="absolute left-10 top-14 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                      ) : null}
                      <div className="relative flex items-start space-x-6">
                        <div className="flex-shrink-0 w-20 pt-2 text-right">
                          <span className="text-sm font-medium font-mono text-gray-900 block">{appt.time}</span>
                          <span className="text-xs text-gray-500 font-mono">{appt.duration}</span>
                        </div>
                        <div className="min-w-0 flex-1 bg-white border border-gray-100 shadow-sm rounded-xl p-4 hover:border-teal-300 hover:shadow-md transition cursor-pointer">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-brand-teal-light flex items-center justify-center text-brand-teal font-semibold text-sm">
                                {appt.patient.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <p className="text-base font-semibold text-gray-900">{appt.patient.name}</p>
                                <p className="text-xs text-gray-500">DOB: <span className="font-mono">{appt.patient.dob}</span></p>
                              </div>
                            </div>
                            <StatusBadge status={appt.status} />
                          </div>
                          
                          <div className="ml-13 mt-3 flex items-center gap-4 text-sm">
                            <div className="flex items-center text-gray-500">
                              <span className={`w-2 h-2 rounded-full mr-2 bg-current ${appt.clinician.color}`} />
                              {appt.clinician.name}
                            </div>
                            <div className="text-gray-500">
                              &bull;
                            </div>
                            <div className="text-gray-500">
                              {appt.service}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </DataCard>
        </div>
      </div>
    </div>
  );
}
