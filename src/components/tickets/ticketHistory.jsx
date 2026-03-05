import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ticketHistory.css';

const tickets = [
  { id: '#TK-123-654-789', office: 'Finance',              subject: 'Tuition Payment',   date: 'February 16, 2026', status: 'Pending'    },
  { id: '#TK-123-654-789', office: 'Library',              subject: 'Book Distribution', date: 'February 16, 2026', status: 'Pending'    },
  { id: '#TK-123-654-789', office: 'Finance',              subject: 'Grand Total',        date: 'February 16, 2026', status: 'In Process' },
  { id: '#TK-123-654-789', office: 'Prefix of Discipline', subject: 'Late Slip',          date: 'February 16, 2026', status: 'Resolved'   },
  { id: '#TK-123-654-789', office: 'Registrar',            subject: 'Good Morale',        date: 'February 16, 2026', status: 'Resolved'   },
];

const ITEMS_PER_PAGE = 5;
const TOTAL_PAGES = 4;

const statusClass = (status) => {
  if (status === 'Pending')    return 'th-status th-status--pending';
  if (status === 'In Process') return 'th-status th-status--inprocess';
  if (status === 'Resolved')   return 'th-status th-status--resolved';
  return 'th-status';
};

const TicketHistory = () => {
  const navigate = useNavigate();
  const [search, setSearch]       = useState('');
  const [statusFilter, setStatus] = useState('All Status');
  const [officeFilter, setOffice] = useState('All Offices');
  const [currentPage, setPage]    = useState(1);

  const filtered = tickets.filter(t => {
    const matchSearch = t.id.includes(search) || t.subject.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'All Status' || t.status === statusFilter;
    const matchOffice = officeFilter === 'All Offices' || t.office === officeFilter;
    return matchSearch && matchStatus && matchOffice;
  });

  return (
    <div className="th-container">

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
          <div className="nav-menu">
            <div className="nav-item" onClick={() => navigate('/dashboard')}>
              <div className="nav-icon inactive" />
              Dashboard
            </div>
            <div className="nav-item active">
              <div className="nav-icon" />
              My Tickets
            </div>
          </div>
          <div className="support-box">
            <span className="support-title">SUPPORT HOURS</span>
            Mon - Fri: 7:00AM – 7:00PM<br />
            Sat: 9:00AM – 3:00PM
          </div>
        </aside>

        {/* Main */}
        <main className="main-content">

          {/* Breadcrumb */}
          <div className="th-breadcrumb">
            <span className="th-breadcrumb__active">Ticket History</span>
            <span className="th-breadcrumb__sep">/</span>
            <span className="th-breadcrumb__link" onClick={() => navigate('/ticket-details')} style={{ cursor: 'pointer' }}>Ticket Details</span>
            <span className="th-breadcrumb__sep">/</span>
            <span className="th-breadcrumb__link" onClick={() => navigate('/new-ticket')} style={{ cursor: 'pointer' }}>New Ticket</span>
          </div>

          <h1 className="th-page-title">Ticket History</h1>

          {/* Filters */}
          <div className="th-filters">
            <div className="th-search">
              <svg className="th-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                className="th-search__input"
                type="text"
                placeholder="Search by Ticket or Subject"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            <select className="th-select" value={statusFilter} onChange={e => setStatus(e.target.value)}>
              <option>All Status</option>
              <option>Pending</option>
              <option>In Process</option>
              <option>Resolved</option>
            </select>

            <select className="th-select" value={officeFilter} onChange={e => setOffice(e.target.value)}>
              <option>All Offices</option>
              <option>Finance</option>
              <option>Library</option>
              <option>Prefix of Discipline</option>
              <option>Registrar</option>
            </select>

            <button className="th-reset-btn" onClick={() => { setSearch(''); setStatus('All Status'); setOffice('All Offices'); }}>
              Reset Filters
            </button>
          </div>

          {/* Table */}
          <div className="tickets-section">
            <table className="tickets-table">
              <thead>
                <tr>
                  <th>TICKET ID</th>
                  <th>OFFICE</th>
                  <th>SUBJECT</th>
                  <th>DATE SUBMITTED</th>
                  <th>STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((ticket, i) => (
                  <tr key={i} onClick={() => navigate('/ticket-details')} style={{ cursor: 'pointer' }}>
                    <td className="bold-id">{ticket.id}</td>
                    <td>{ticket.office}</td>
                    <td>{ticket.subject}</td>
                    <td>{ticket.date}</td>
                    <td><span className={statusClass(ticket.status)}>{ticket.status}</span></td>
                    <td className="arrow-td">›</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="pagination">
              <button className="page-btn" onClick={() => setPage(p => Math.max(1, p - 1))}>‹</button>
              {[1, 2, 3, 4].map(n => (
                <button
                  key={n}
                  className={`page-btn ${currentPage === n ? 'page-btn--active' : ''}`}
                  onClick={() => setPage(n)}
                >
                  {n}
                </button>
              ))}
              <button className="page-btn" onClick={() => setPage(p => Math.min(TOTAL_PAGES, p + 1))}>›</button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="th-summary-grid">
            {[
              { label: 'TOTAL TICKETS', value: 20 },
              { label: 'ONGOING',       value: 2  },
              { label: 'RESOLVED',      value: 18 },
            ].map(({ label, value }) => (
              <div key={label} className="th-summary-card">
                <div className="th-summary-card__header">
                  <div className="card-icon-box" />
                  <span className="card-label">{label}</span>
                </div>
                <h2 className="stat-number">{value}</h2>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
};

export default TicketHistory;