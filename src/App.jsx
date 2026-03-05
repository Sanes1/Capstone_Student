import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login/loginPage.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import TicketHistory from './components/tickets/ticketHistory.jsx';
import TicketDetails from './components/tickets/ticketDetails.jsx';
import NewTicket from './components/tickets/newTicket.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"               element={<LoginPage />} />
        <Route path="/dashboard"      element={<Dashboard />} />
        <Route path="/tickets"        element={<TicketHistory />} />
        <Route path="/ticket-details" element={<TicketDetails />} />
        <Route path="/new-ticket"     element={<NewTicket />} />
      </Routes>
    </Router>
  );
}

export default App;