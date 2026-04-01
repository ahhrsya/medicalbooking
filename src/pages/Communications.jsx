import DataCard from '../components/ui/DataCard';
import StatusBadge from '../components/ui/StatusBadge';
import { BellIcon, EnvelopeIcon, ChatBubbleOvalLeftIcon, AdjustmentsHorizontalIcon, PlusIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const reminderRules = [
  { id: 1, trigger: '24h Before', channel: 'Email', status: 'Enabled', template: 'Reminder: Upcoming appointment @ Meridian' },
  { id: 2, trigger: '2h Before', channel: 'SMS', status: 'Enabled', template: 'Hi {name}, see you in 2 hours for your appointment.' },
  { id: 3, trigger: 'Post-Visit (1h)', channel: 'Email', status: 'Disabled', template: 'How was your visit? Please leave a rating.' },
];

const sentLogs = [
  { id: 'L001', patient: 'Emma Wilson', channel: 'SMS', status: 'Delivered', time: 'Today, 07:02 AM' },
  { id: 'L002', patient: 'Robert Tan', channel: 'Email', status: 'Sent', time: 'Today, 08:30 AM' },
  { id: 'L003', patient: 'David Kowalski', channel: 'SMS', status: 'Failed', time: 'Today, 08:15 AM' },
];

export default function Communications() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2">
         <div>
            <h1 className="text-2xl font-bold font-plus-jakarta text-gray-900">Reminders & Communications</h1>
            <p className="text-sm text-gray-500 mt-1">Automated patient notifications and messaging history.</p>
         </div>
         <button className="mt-4 sm:mt-0 flex items-center gap-2 bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-teal-dark shadow-sm">
            <PlusIcon className="w-4 h-4" />
            Create Rule
         </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Rules Management */}
         <div className="lg:col-span-2 space-y-6">
            <DataCard title="Automated Rules" subtitle="Triggers for patient reminders">
               <div className="space-y-4">
                  {reminderRules.map(rule => (
                     <div key={rule.id} className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-4">
                           <div className={`p-2 rounded-lg ${rule.channel === 'Email' ? 'bg-blue-50 text-blue-600' : 'bg-teal-50 text-teal-600'}`}>
                              {rule.channel === 'Email' ? <EnvelopeIcon className="w-5 h-5" /> : <ChatBubbleOvalLeftIcon className="w-5 h-5" />}
                           </div>
                           <div>
                              <p className="text-sm font-bold text-gray-900">{rule.trigger} Reminder</p>
                              <p className="text-xs text-gray-500 max-w-[280px] truncate">{rule.template}</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-6">
                           <div className="flex flex-col items-end">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${rule.status === 'Enabled' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                                 {rule.status}
                              </span>
                           </div>
                           <button className="p-2 text-gray-400 hover:text-brand-teal transition-colors">
                              <AdjustmentsHorizontalIcon className="w-5 h-5" />
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
            </DataCard>

            <DataCard title="Sent Logs" subtitle="Live delivery status for patient messages">
                <table className="min-w-full divide-y divide-gray-100 mt-4">
                   <thead>
                      <tr className="text-left text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-50/50">
                         <th className="px-4 py-3">Patient</th>
                         <th className="px-4 py-3">Channel</th>
                         <th className="px-4 py-3">Status</th>
                         <th className="px-4 py-3 text-right">Time</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-50">
                      {sentLogs.map(log => (
                         <tr key={log.id} className="text-sm">
                            <td className="px-4 py-3 font-bold text-gray-900">{log.patient}</td>
                            <td className="px-4 py-3 text-gray-500 flex items-center gap-2">
                               {log.channel === 'Email' ? <EnvelopeIcon className="w-4 h-4" /> : <ChatBubbleOvalLeftIcon className="w-4 h-4" />}
                               {log.channel}
                            </td>
                            <td className="px-4 py-3">
                               <span className={`flex items-center gap-1.5 font-semibold text-xs ${
                                 log.status === 'Delivered' ? 'text-green-600' : 
                                 log.status === 'Sent' ? 'text-blue-600' : 'text-red-500'
                               }`}>
                                  {log.status === 'Delivered' ? <CheckCircleIcon className="w-3 h-3" /> : 
                                   log.status === 'Sent' ? <CheckCircleIcon className="w-3 h-3" /> : <ExclamationTriangleIcon className="w-3 h-3" />}
                                  {log.status}
                               </span>
                            </td>
                            <td className="px-4 py-3 text-right text-xs font-mono text-gray-400">{log.time}</td>
                         </tr>
                      ))}
                   </tbody>
                </table>
            </DataCard>
         </div>

         {/* Preview Panel */}
         <div className="lg:col-span-1">
            <DataCard title="Template Preview">
               <div className="bg-bg-soft rounded-2xl p-6 border border-brand-teal-light flex flex-col items-center">
                  <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-left">
                     <div className="bg-brand-teal px-4 py-2 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Email Preview</span>
                        <div className="flex gap-1">
                           <div className="w-1.5 h-1.5 rounded-full bg-white opacity-40"></div>
                           <div className="w-1.5 h-1.5 rounded-full bg-white opacity-40"></div>
                           <div className="w-1.5 h-1.5 rounded-full bg-white opacity-40"></div>
                        </div>
                     </div>
                     <div className="p-4 space-y-3">
                        <div className="flex flex-col">
                           <span className="text-[8px] text-gray-400 font-bold uppercase">To:</span>
                           <span className="text-[10px] font-bold text-gray-900">emma.wilson@example.com</span>
                        </div>
                        <div className="h-px bg-gray-50"></div>
                        <div className="space-y-2">
                           <p className="text-xs font-bold text-gray-900 font-plus-jakarta">Reminder: Your Appointment</p>
                           <p className="text-[10px] leading-relaxed text-gray-500">
                              Hi Emma, this is a reminder for your upcoming <strong>GP Consultation</strong> at <strong>Meridian Central</strong> tomorrow at <strong>09:00 AM</strong>.
                           </p>
                           <p className="text-[10px] leading-relaxed text-gray-500">
                              Please remember to bring your insurance card. You can find directions below.
                           </p>
                           <div className="pt-2">
                              <button className="bg-brand-teal text-white px-3 py-1.5 rounded-lg text-[9px] font-bold w-full">Directions to Clinic</button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <p className="mt-4 text-[10px] text-gray-400 text-center px-4 leading-loose">
                     Patients can opt-out of SMS reminders via Profile Settings.
                  </p>
               </div>
            </DataCard>
         </div>
      </div>
    </div>
  );
}
