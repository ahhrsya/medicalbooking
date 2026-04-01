import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import ClinicHome from './pages/ClinicHome';
import AppointmentCalendar from './pages/AppointmentCalendar';
import PatientDirectory from './pages/PatientDirectory';
import PatientProfile from './pages/PatientProfile';
import ConsultationNotes from './pages/ConsultationNotes';
import BookingFlow from './pages/BookingFlow';
import LocationsOverview from './pages/LocationsOverview';
import Communications from './pages/Communications';
import Billing from './pages/Billing';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<ClinicHome />} />
          <Route path="calendar" element={<AppointmentCalendar />} />
          <Route path="patients" element={<PatientDirectory />} />
          <Route path="patients/:id" element={<PatientProfile />} />
          <Route path="notes" element={<ConsultationNotes />} />
          <Route path="booking" element={<BookingFlow />} />
          <Route path="locations" element={<LocationsOverview />} />
          <Route path="communications" element={<Communications />} />
          <Route path="billing" element={<Billing />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
