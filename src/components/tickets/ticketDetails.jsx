import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ticketDetails.css';

const TicketDetails = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  return (
    <div className="td-container">

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
            <div className="nav-item active" onClick={() => navigate('/tickets')}>
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
          <div className="td-breadcrumb">
            <span className="td-breadcrumb__link" onClick={() => navigate('/tickets')}>Ticket History</span>
            <span className="td-breadcrumb__sep">/</span>
            <span className="td-breadcrumb__active">Ticket Details</span>
            <span className="td-breadcrumb__sep">/</span>
            <span className="td-breadcrumb__link" onClick={() => navigate('/new-ticket')}>New Ticket</span>
          </div>

          <h1 className="td-page-title">Ticket Details</h1>

          {/* ── Two-column layout ── */}
          <div className="td-columns">

            {/* LEFT COLUMN */}
            <div className="td-left">

              {/* Original Submission Card */}
              <div className="td-card">
                <h2 className="td-card__title">Original Submission</h2>

                <div className="td-card__meta">
                  <span>OFFICE: <strong>Finance</strong></span>
                  <span className="td-card__date">Created on February 16, 2026</span>
                </div>

                <div className="td-message-box">
                  "Good day! I would like to request assistance regarding my tuition payment issue.
                  May I ask for your help in checking and clarifying my balance/records? Thank you so much."
                </div>

                <div className="td-attachments">
                  <div className="td-file-chip">
                    <div className="td-file-icon" />
                    <span>ORF.pdf</span>
                    <span className="td-download">↓</span>
                  </div>
                  <div className="td-file-chip">
                    <div className="td-file-icon" />
                    <span>ID_Proof.pdf</span>
                    <span className="td-download">↓</span>
                  </div>
                </div>
              </div>

              {/* Follow-up Comment Card */}
              <div className="td-card">
                <div className="td-followup-header">
                  <div className="td-avatar" />
                  <span className="td-followup-title">Add follow-up comment</span>
                </div>

                <textarea
                  className="td-textarea"
                  placeholder="Type your message here...."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />

                <div className="td-followup-footer">
                  <div className="td-attach-btn">
                    <span className="td-attach-icon">⊞</span>
                    Attach documents (Max 5MB)
                  </div>
                  <button className="td-send-btn">Send Message</button>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="td-right">

              {/* Ticket Details Card */}
              <div className="td-card">
                <h2 className="td-card__title">Ticket Details</h2>

                <div className="td-detail-row">
                  <span className="td-detail-label">ESTIMATED COMPLETION</span>
                  <span className="td-detail-value">FEB 18, 2026</span>
                </div>
                <div className="td-divider" />

                <div className="td-detail-row">
                  <span className="td-detail-label">STUDENT ID</span>
                  <span className="td-detail-value">05-2324-000000</span>
                </div>
                <div className="td-divider" />

                <div className="td-detail-row">
                  <span className="td-detail-label">OFFICE CODE</span>
                  <span className="td-detail-value">FIN-TRAN-001</span>
                </div>

                <button className="td-priority-btn">DESIGNATE TO PRIORITY</button>
              </div>

              {/* Status Timeline Card */}
              <div className="td-card">
                <h2 className="td-card__title">Status Timeline</h2>

                <div className="td-timeline">
                  {[
                    { label: 'SUBMITTED',  date: 'February 16, 2026', sub: 'Initial Student Request', done: true  },
                    { label: 'PENDING',    date: 'February 16, 2026', sub: 'Assigned to the Finance',  done: true  },
                    { label: 'PROCESSING', date: 'February 17, 2026', sub: 'Being Processed',          done: true  },
                    { label: 'RESOLVED',   date: '',                   sub: '',                         done: false },
                  ].map(({ label, date, sub, done }) => (
                    <div key={label} className="td-timeline__item">
                      <div className={`td-timeline__dot ${done ? 'td-timeline__dot--done' : ''}`}>
                        {done && <span className="td-timeline__check">✓</span>}
                      </div>
                      <div className="td-timeline__content">
                        <span className="td-timeline__label">{label}</span>
                        <div className="td-timeline__right">
                          <span className="td-timeline__date">{date}</span>
                          <span className="td-timeline__sub">{sub}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TicketDetails;