import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

export default function DataCard({ 
  title, 
  subtitle, 
  children, 
  className = '', 
  headerAction 
}) {
  return (
    <div className={`bg-white rounded-[1.25rem] border border-slate-100 shadow-soft p-6 transition-all duration-300 hover:border-slate-200 ${className}`}>
      {(title || headerAction) && (
        <div className="flex items-center justify-between mb-4">
          <div>
            {title && <h3 className="text-base font-bold font-plus-jakarta text-slate-900 tracking-tight">{title}</h3>}
            {subtitle && <p className="text-xs text-slate-400 font-medium mt-0.5">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-2">
            {headerAction || (
              <button className="p-1.5 hover:bg-slate-50 text-slate-400 rounded-lg transition-colors">
                <EllipsisHorizontalIcon className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
