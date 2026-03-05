import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './newTicket.css';

const offices = [
  {
    id: 'finance',
    name: 'Finance',
    desc: 'Manages tuition payments, student balances, billing concerns, and other school-related financial transactions.',
  },
  {
    id: 'library',
    name: 'Library',
    desc: 'Manages book borrowing/returning, library accounts, and student concerns related to library services and resources.',
  },
  {
    id: 'registrar',
    name: 'Registrar',
    desc: 'Handles student records such as enrollment, grades, certificates, transcripts, and other official academic documents.',
  },
  {
    id: 'discipline',
    name: 'Prefix of Discipline',
    desc: 'Handles student behavior concerns, violations, and disciplinary cases to maintain order and safety in school.',
  },
];

const NewTicket = () => {
  const navigate = useNavigate();
  const [selectedOffice, setSelectedOffice] = useState('finance');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]);
  };

  const handleFileInput = (e) => {
    if (e.target.files[0]) setFile(e.target.files[0]);
  };

  return (
    <div className="nt-container">

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

        {/* Main — scrollable */}
        <main className="main-content">

          {/* Breadcrumb */}
          <div className="nt-breadcrumb">
            <span className="nt-breadcrumb__link" onClick={() => navigate('/tickets')}>Ticket History</span>
            <span className="nt-breadcrumb__sep">/</span>
            <span className="nt-breadcrumb__link" onClick={() => navigate('/ticket-details')}>Ticket Details</span>
            <span className="nt-breadcrumb__sep">/</span>
            <span className="nt-breadcrumb__active">New Ticket</span>
          </div>

          <h1 className="nt-page-title">Submit New Ticket</h1>

          {/* ── Form ── */}
          <div className="nt-form">

            {/* Select Office */}
            <section className="nt-section">
              <h2 className="nt-section-title">Select Office</h2>
              <div className="nt-office-grid">
                {offices.map((office) => (
                  <div
                    key={office.id}
                    className={`nt-office-card ${selectedOffice === office.id ? 'nt-office-card--active' : ''}`}
                    onClick={() => setSelectedOffice(office.id)}
                  >
                    <div className={`nt-radio ${selectedOffice === office.id ? 'nt-radio--active' : ''}`}>
                      {selectedOffice === office.id && <div className="nt-radio__dot" />}
                    </div>
                    <div>
                      <div className="nt-office-name">{office.name}</div>
                      <div className="nt-office-desc">{office.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Subject */}
            <section className="nt-section">
              <h2 className="nt-section-title">Subject</h2>
              <input
                className="nt-input"
                type="text"
                placeholder="Briefly describe your issues"
                value={subject}
                onChange={e => setSubject(e.target.value)}
              />
            </section>

            {/* Detailed Description */}
            <section className="nt-section">
              <h2 className="nt-section-title">Detailed Description</h2>
              <textarea
                className="nt-textarea"
                placeholder="Please provide as much detail as possible..."
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </section>

            {/* Attach File */}
            <section className="nt-section">
              <h2 className="nt-section-title">
                Attach File <span className="nt-optional">(Optional)</span>
              </h2>
              <div
                className="nt-dropzone"
                onDrop={handleDrop}
                onDragOver={e => e.preventDefault()}
                onClick={() => document.getElementById('nt-file-input').click()}
              >
                <input
                  id="nt-file-input"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleFileInput}
                />
                <div className="nt-dropzone__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="12" y1="18" x2="12" y2="12"/>
                    <line x1="9" y1="15" x2="15" y2="15"/>
                  </svg>
                </div>
                {file
                  ? <p className="nt-dropzone__text"><strong>{file.name}</strong></p>
                  : <p className="nt-dropzone__text"><span className="nt-dropzone__link">Click to upload</span> or drag and drop</p>
                }
              </div>
            </section>

          </div>

          {/* ── Footer Actions ── */}
          <div className="nt-footer">
            <div className="nt-footer__divider" />
            <div className="nt-footer__actions">
              <button className="nt-cancel-btn" onClick={() => navigate('/tickets')}>Cancel</button>
              <button className="nt-submit-btn">Submit Ticket</button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default NewTicket;