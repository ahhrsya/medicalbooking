export const clinics = [
  { id: 1, name: 'Meridian City Centre', city: 'London', clinicians: 6 },
  { id: 2, name: 'Meridian North', city: 'Amsterdam', clinicians: 4 },
  { id: 3, name: 'Meridian South', city: 'Paris', clinicians: 5 },
  { id: 4, name: 'Meridian East', city: 'Berlin', clinicians: 3 },
];

export const clinicians = [
  { id: 1, name: 'Dr. Sarah Chen', specialty: 'General Practice', rating: 4.9, appointmentsToday: 14, color: 'text-brand-teal', colorHex: '#0d9488', bgOpacity: 'bg-[#0d9488]/15', border: 'border-[#0d9488]' },
  { id: 2, name: 'Dr. Marcus Bello', specialty: 'Physiotherapy', rating: 4.8, appointmentsToday: 10, color: 'text-[#7c3aed]', colorHex: '#7c3aed', bgOpacity: 'bg-[#7c3aed]/15', border: 'border-[#7c3aed]' },
  { id: 3, name: 'Dr. Fatima Al-Rashid', specialty: 'Mental Health', rating: 5.0, appointmentsToday: 8, color: 'text-[#ea580c]', colorHex: '#ea580c', bgOpacity: 'bg-[#ea580c]/15', border: 'border-[#ea580c]' },
  { id: 4, name: 'Dr. James Hartley', specialty: 'Cardiology', rating: 4.7, appointmentsToday: 6, color: 'text-[#0369a1]', colorHex: '#0369a1', bgOpacity: 'bg-[#0369a1]/15', border: 'border-[#0369a1]' },
  { id: 5, name: 'Dr. Nina Reyes', specialty: 'Aesthetics', rating: 4.9, appointmentsToday: 12, color: 'text-[#db2777]', colorHex: '#db2777', bgOpacity: 'bg-[#db2777]/15', border: 'border-[#db2777]' },
];

export const todayKPIs = {
  totalAppointments: 68,
  checkedIn: 41,
  noShows: 5,
  utilisationPercent: 84,
  revenueToday: 4820,
};

export const patients = [
  { id: 'P8832', name: 'Emma Wilson', dob: '12 Mar 1985', lastVisit: '14 Jan 2026', status: 'Active', phone: '+44 7700 900077', email: 'e.wilson@example.com', insurance: 'Bupa Health #88219' },
  { id: 'P7211', name: 'Robert Tan', dob: '03 Aug 1972', lastVisit: '02 Feb 2026', status: 'Active', phone: '+44 7700 932112', email: 'robtan@example.com', insurance: 'AXA PPP #3312' },
  { id: 'P9021', name: 'Aisha Mohammed', dob: '27 Nov 1990', lastVisit: 'None', status: 'New', phone: '+44 7700 900121', email: 'aisha.m@example.com', insurance: 'Self-Funded' },
  { id: 'P3321', name: 'David Kowalski', dob: '19 Apr 1965', lastVisit: '10 Dec 2025', status: 'Active', phone: '+44 7700 900321', email: 'dkowalski@example.com', insurance: 'Allianz #1192' },
  { id: 'P4432', name: 'Sophie Laurent', dob: '11 Jun 1992', lastVisit: '22 Feb 2026', status: 'Active', phone: '+44 7700 994432', email: 'sophie.l@example.fr', insurance: 'MGEN #4421' },
];

export const todayAppointments = [
  {
    id: 'A101',
    patient: patients[0],
    time: '09:00',
    duration: '20 min',
    service: 'GP Consultation',
    clinician: clinicians[0],
    status: 'Checked-in',
  },
  {
    id: 'A102',
    patient: patients[1],
    time: '09:30',
    duration: '45 min',
    service: 'Physiotherapy',
    clinician: clinicians[1],
    status: 'Confirmed',
  },
  {
    id: 'A103',
    patient: patients[2],
    time: '10:00',
    duration: '20 min',
    service: 'GP Consultation',
    clinician: clinicians[0],
    status: 'No-Show',
  },
  {
    id: 'A104',
    patient: patients[3],
    time: '10:15',
    duration: '50 min',
    service: 'Wellness Consultation',
    clinician: clinicians[2],
    status: 'Pending',
  },
  {
    id: 'A105',
    patient: patients[4],
    time: '11:00',
    duration: '30 min',
    service: 'Aesthetic Consultation',
    clinician: clinicians[4],
    status: 'Confirmed',
  },
];
