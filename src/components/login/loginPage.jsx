import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginPage.css';
import loader from '../../assets/loader.gif';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulates network delay — replace with real API call later
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="login-page-container">

      {/* ── Fullscreen loader overlay — sits on top, login stays behind ── */}
      {isLoading && (
        <div className="loader-overlay">
          <img src={loader} alt="Loading..." className="loader-gif" />
        </div>
      )}

      <div className="login-card">
        {/* Left Side: Green Banner */}
        <div className="login-side-banner"></div>

        {/* Right Side: Student Login Form */}
        <div className="login-form-area">
          <div className="login-header">
            <h1>Welcome Back</h1>
            <p>Please enter your credentials to access your account.</p>
          </div>

          <div className="form-content">
            <form onSubmit={handleSignIn}>
              <div className="input-group">
                <label className="field-label">Username/ Student ID</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter ID"
                  required
                />
              </div>

              <div className="input-group">
                <div className="label-flex">
                  <label className="field-label">Password</label>
                  <a href="#" className="forgot-link">Forgot Password?</a>
                </div>
                <input
                  type="password"
                  className="form-input"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="checkbox-row">
                <input type="checkbox" id="remember" className="custom-check" />
                <label htmlFor="remember">Remember this device</label>
              </div>

              <button type="submit" className="signin-btn" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>

          {/* Footer */}
          <footer className="login-footer">
            <div className="divider-line"></div>
            <p className="footer-support-text">
              New student? <a href="#" className="contact-link">Contact Admissions</a>
            </p>
            <div className="badge-wrapper">
              <div className="security-pill">
                <svg className="shield-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                Secure-bit Connection Verified
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;