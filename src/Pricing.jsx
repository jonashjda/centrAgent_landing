import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function Pricing() {
  const navigate = useNavigate();
  const platformUrl = 'https://centragent.netlify.app';

  const handleLogin = () => {
    window.location.href = `${platformUrl}`;
  };

  const handleAccessRequest = (planType) => {   
    navigate('/request-access', { state: { plan: planType } });
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="landing">
      <header className="landing-header">
        <div className="logo" onClick={handleHome} style={{cursor: 'pointer'}}>
          <i className="fa-solid fa-robot"></i>
          <span>centrAgent</span>
        </div>
        <nav className="nav-links">
          <button className="nav-link active">Pricing</button>
        </nav>
        <div className="auth-buttons">
          <button onClick={handleLogin} className="btn-secondary">
            Login
          </button>
          <button onClick={handleHome} className="btn-primary">
            Back to home
          </button>
        </div>
      </header>

      <main className="landing-content">
        <section className="hero">
          <h1>Early Access Pricing</h1>
          <p className="hero-subtitle">
            Choose between a Personal or a Team account depending on your specific needs.
          </p>
        </section>

        <section className="pricing-container">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Personal</h3>
              <div className="price">$0<span>/mo</span></div>
              <p>Perfect for individuals building their own agents.</p>
            </div>
            <ul className="pricing-features">
              <li><i className="fa-solid fa-check"></i> Unlimited Personal Agents</li>
              <li><i className="fa-solid fa-check"></i> Basic Chat Interface</li>
            </ul>
            <button onClick={() => handleAccessRequest('personal')} className="btn-secondary full-width">
              Request Access
            </button>
          </div>

          <div className="pricing-card featured">
            <div className="pricing-header">
              <h3>Team</h3>
              <div className="price">Get a quote</div>
              <p>For teams collaborating on shared workflows.</p>
            </div>
            <ul className="pricing-features">
              <li><i className="fa-solid fa-check"></i> Everything in Personal</li>
              <li><i className="fa-solid fa-check"></i> Unlimited Team Members</li>
              <li><i className="fa-solid fa-check"></i> Shared Agent Workspaces</li>
              <li><i className="fa-solid fa-check"></i> Role-Based Access Control</li>
            </ul>
            <button onClick={() => handleAccessRequest('team')} className="btn-primary full-width">
              Submit Inquiry
            </button>
          </div>
        </section>

        <footer className="landing-footer">
            <p>&copy; {new Date().getFullYear()} CentrAgent. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
