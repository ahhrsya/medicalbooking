export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseStyle = 'inline-flex items-center justify-center font-plus-jakarta font-bold text-sm transition-all duration-200 rounded-xl px-5 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95';
  
  const variants = {
    primary: 'bg-brand-indigo text-white shadow-indigo-glow hover:bg-brand-indigo-dark',
    secondary: 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300',
    ghost: 'text-slate-500 hover:bg-brand-indigo-light hover:text-brand-indigo',
    danger: 'bg-rose-500 text-white hover:bg-rose-600',
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
