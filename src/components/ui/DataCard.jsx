export default function DataCard({ children, title, subtitle, className = '', headerAction }) {
  return (
    <div className={`bg-white rounded-2xl border border-[#e5e4e7] shadow-sm ${className}`}>
      {(title || subtitle || headerAction) && (
        <div className="px-6 py-5 border-b border-[#e5e4e7] flex items-center justify-between">
          <div>
            {title && <h3 className="text-lg font-semibold text-gray-900 leading-6">{title}</h3>}
            {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
          </div>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
