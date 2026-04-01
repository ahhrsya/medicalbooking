import DataCard from '../components/ui/DataCard';
import StatusBadge from '../components/ui/StatusBadge';
import { BanknotesIcon, PlusIcon, ArrowDownTrayIcon, FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const invoices = [
  { id: 'INV-2026-001', patient: 'Emma Wilson', date: '01 Apr 2026', amount: 85.00, status: 'Paid' },
  { id: 'INV-2026-002', patient: 'Robert Tan', date: '01 Apr 2026', amount: 110.00, status: 'Pending' },
  { id: 'INV-2026-003', patient: 'Sophie Laurent', date: '31 Mar 2026', amount: 120.00, status: 'Paid' },
  { id: 'INV-2026-004', patient: 'Aisha Mohammed', date: '30 Mar 2026', amount: 85.00, status: 'Overdue' },
  { id: 'INV-2026-005', patient: 'David Kowalski', date: '29 Mar 2026', amount: 190.00, status: 'Paid' },
];

export default function Billing() {
  return (
    <div className="flex flex-col space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2">
        <div>
          <h1 className="text-2xl font-bold font-plus-jakarta text-gray-900">Billing & Invoices</h1>
          <p className="text-sm text-gray-500 mt-1">Manage practice revenue and patient billing history.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm transition">
            Export for Accounting
          </button>
          <button className="flex items-center gap-2 bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-teal-dark shadow-sm transition">
            <PlusIcon className="w-4 h-4" />
            Create Invoice
          </button>
        </div>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <DataCard className="bg-brand-teal text-white border-0 shadow-brand-teal/20 shadow-xl">
            <div className="flex items-center justify-between mb-4">
               <span className="text-xs font-bold uppercase tracking-widest text-teal-100">Revenue (MTD)</span>
               <div className="p-2 rounded-lg bg-teal-50/20"><BanknotesIcon className="w-5 h-5" /></div>
            </div>
            <p className="text-3xl font-bold font-plus-jakarta">€41,820</p>
            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-teal-100 bg-white/10 w-fit px-2 py-1 rounded-full">
               <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
               +12.4% vs last month
            </div>
         </DataCard>

         <DataCard className="border-l-4 border-l-amber-400">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Outstanding</p>
            <p className="text-3xl font-bold font-plus-jakarta text-gray-900">€1,340</p>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed font-medium">12 Unpaid Invoices &bull; <span className="text-amber-600 font-bold">Awaiting Action</span></p>
         </DataCard>

         <DataCard className="border-l-4 border-l-green-400">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Insurance Claims</p>
            <p className="text-3xl font-bold font-plus-jakarta text-gray-900">€9,420</p>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed font-medium">8 Pending Claims &bull; <span className="text-green-600 font-bold">Processing</span></p>
         </DataCard>
      </div>

      {/* Invoice Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
         {/* Filter Bar */}
         <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/30">
            <div className="relative flex-1 max-w-sm">
               <input 
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 pl-10 text-sm outline-none focus:ring-1 focus:ring-brand-teal"
                  placeholder="Search invoice or patient..."
               />
               <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>
            <div className="flex gap-2">
               <button className="p-2 border border-gray-200 rounded-lg bg-white shadow-sm hover:bg-gray-50 flex items-center gap-2 text-xs font-bold text-gray-600">
                  <FunnelIcon className="w-4 h-4" /> Filter Status
               </button>
            </div>
         </div>

         {/* Table */}
         <table className="min-w-full divide-y divide-gray-100">
            <thead>
               <tr className="text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white">
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Patient</th>
                  <th className="px-6 py-4">Invoice Date</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
               {invoices.map(inv => (
                  <tr key={inv.id} className="text-sm hover:bg-gray-50/50 transition-colors">
                     <td className="px-6 py-4 font-mono font-medium text-gray-500 uppercase">{inv.id}</td>
                     <td className="px-6 py-4 font-bold text-gray-900">{inv.patient}</td>
                     <td className="px-6 py-4 text-gray-600">{inv.date}</td>
                     <td className="px-6 py-4 font-bold text-gray-900">€{inv.amount.toFixed(2)}</td>
                     <td className="px-6 py-4">
                        <StatusBadge status={inv.status} />
                     </td>
                     <td className="px-6 py-4 text-right">
                        <button className="text-gray-400 hover:text-brand-teal transition-colors" title="Download PDF">
                           <ArrowDownTrayIcon className="w-5 h-5" />
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         <div className="px-6 py-4 text-center border-t border-gray-50">
            <button className="text-sm font-semibold text-brand-teal hover:underline transition">View all historical invoices</button>
         </div>
      </div>
    </div>
  );
}
