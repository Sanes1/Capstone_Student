import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const tickets = [
    { id: '#TK-123-654-789', office: 'Finance',              subject: 'Tuition Payment',   date: 'February 16, 2026' },
    { id: '#TK-123-654-789', office: 'Library',              subject: 'Book Distribution', date: 'February 16, 2026' },
    { id: '#TK-123-654-789', office: 'Finance',              subject: 'Grand Total',        date: 'February 16, 2026' },
    { id: '#TK-123-654-789', office: 'Prefix of Discipline', subject: 'Late Slip',          date: 'February 16, 2026' },
    { id: '#TK-123-654-789', office: 'Registrar',            subject: 'Good Morale',        date: 'February 16, 2026' },
  ];

  return (
    <div className="dashboard-container">

      {/* ── Top Bar ── */}
      <div className="top-bar">
        <div className="logo-area">
          <div className="logo-icon" />
          <div className="logo-bar" />
        </div>
        <div className="top-bar-user">
          <div className="user-info">
            <span className="user-name">Dorothy May Gerolaga</span>
            <span className="user-id">Student ID: 05-2324-000000</span>
          </div>
          <div className="user-avatar" />
        </div>
      </div>

      {/* ── Body ── */}
      <div className="dashboard-body">

        {/* Sidebar */}
        <aside className="sidebar">

          {/* Nav items — takes up all available space */}
          <div className="nav-menu">
            <div className="nav-item active" onClick={() => navigate('/dashboard')}>
              <div className="nav-icon" />
              Dashboard
            </div>
            <div className="nav-item" onClick={() => navigate('/tickets')}>
              <div className="nav-icon inactive" />
              My Tickets
            </div>
          </div>

          {/* Support box — always pinned to bottom */}
          <div className="support-box">
            <span className="support-title">SUPPORT HOURS</span>
            Mon - Fri: 7:00AM – 7:00PM<br />
            Sat: 9:00AM – 3:00PM
          </div>

        </aside>

        {/* Main Content */}
        <main className="main-content">

          {/* Welcome Row */}
          <div className="welcome-row">
            <h1 className="welcome-title">Welcome back, Dorothy</h1>
            <button className="create-btn">
              <span className="plus-circle">+</span>
              CREATE NEW TICKET
            </button>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {[
              { label: 'STATUS',   desc: 'Pending Request', value: 2  },
              { label: 'ACTIVE',   desc: 'In Progress',     value: 1  },
              { label: 'COMPLETE', desc: 'Resolved',        value: 10 },
            ].map(({ label, desc, value }) => (
              <div key={label} className="stat-card">
                <div className="card-header-row">
                  <div className="card-icon-box" />
                  <span className="card-label">{label}</span>
                </div>
                <p className="stat-description">{desc}</p>
                <h2 className="stat-number">{value}</h2>
              </div>
            ))}
          </div>

          {/* Recent Tickets */}
          <div className="tickets-section">
            <div className="tickets-header">
              <h3 className="tickets-title">Recent Tickets</h3>
              <a onClick={() => navigate('/tickets')} className="view-all" style={{ cursor: 'pointer' }}>
                View all tickets →
              </a>
            </div>

            <table className="tickets-table">
              <thead>
                <tr>
                  <th>TICKET ID</th>
                  <th>OFFICE</th>
                  <th>SUBJECT</th>
                  <th>DATE SUBMITTED</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket, i) => (
                  <tr key={i}>
                    <td className="bold-id">{ticket.id}</td>
                    <td>{ticket.office}</td>
                    <td>{ticket.subject}</td>
                    <td>{ticket.date}</td>
                    <td className="arrow-td">›</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <button className="page-btn">‹</button>
              <button className="page-btn">›</button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;