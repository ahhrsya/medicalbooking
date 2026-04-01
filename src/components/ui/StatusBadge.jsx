export default function StatusBadge({ status }) {
  const getStatusStyles = (s) => {
    const statusLower = s?.toLowerCase();
    
    // Maricare theme mappings
    const config = {
      available: 'bg-green-50 text-green-600 border-green-100 ring-4 ring-green-50/50',
      unavailable: 'bg-rose-50 text-rose-500 border-rose-100 ring-4 ring-rose-50/50',
      confirmed: 'bg-indigo-50 text-brand-indigo border-indigo-100 ring-4 ring-indigo-50/50',
      paid: 'bg-indigo-50 text-brand-indigo border-indigo-100 ring-4 ring-indigo-50/50',
      pending: 'bg-amber-50 text-amber-600 border-amber-100 ring-4 ring-amber-50/50',
      scheduled: 'bg-indigo-50 text-brand-indigo border-indigo-100 ring-4 ring-indigo-50/50',
      completed: 'bg-slate-50 text-slate-500 border-slate-100 ring-4 ring-slate-50/50',
      overdue: 'bg-rose-50 text-rose-500 border-rose-100 ring-4 ring-rose-50/50',
    };

    return config[statusLower] || 'bg-slate-50 text-slate-500 border-slate-100';
  };

  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ${getStatusStyles(status)}`}>
      {status}
    </span>
  );
}
