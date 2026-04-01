export default function StatusBadge({ status }) {
  const normalizedStatus = status.toLowerCase();
  
  let styles = '';
  let label = status;

  switch (normalizedStatus) {
    case 'confirmed':
      styles = 'bg-[#ccfbf1] text-[#0d9488]';
      label = 'Confirmed';
      break;
    case 'pending':
      styles = 'bg-amber-50 text-amber-700';
      label = 'Pending';
      break;
    case 'completed':
      styles = 'bg-gray-100 text-gray-700';
      label = 'Completed';
      break;
    case 'cancelled':
      styles = 'bg-red-50 text-red-700';
      label = 'Cancelled';
      break;
    case 'no-show':
      styles = 'bg-[#fef2f2] text-[#dc2626]';
      label = 'No-Show';
      break;
    case 'checked-in':
      styles = 'bg-[#d1fae5] text-[#10b981]';
      label = 'Checked In';
      break;
    default:
      styles = 'bg-gray-100 text-gray-500';
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles}`}>
      {label}
    </span>
  );
}
