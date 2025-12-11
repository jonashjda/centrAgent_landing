import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function LandingPage() {
  const navigate = useNavigate();
  // TODO: Update this URL to your platform's subdomain
  const platformUrl = 'http://localhost:5173';

  const handleLogin = () => {
    window.location.href = `${platformUrl}/login`;
  };

  const handleAccessRequest = () => {
    navigate('/request-access');
  };

  return (
    <div className="landing">
      <header className="landing-header">
        <div className="logo">
          <i className="fa-solid fa-robot"></i>
          <span>centrAgent</span>
        </div>
        <div className="auth-buttons">
          <button onClick={handleLogin} className="btn-secondary">
            Login
          </button>
          <button onClick={handleAccessRequest} className="btn-primary">
            Request Access
          </button>
        </div>
      </header>

      <main className="landing-content">
        <section className="hero">
          <h1>Your Custom AI Agents, Powered by n8n</h1>
          <p className="hero-subtitle">
            One unified chat platform for all your custom-made AI agents.
          </p>
          <button onClick={handleAccessRequest} className="btn-hero">
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </button>
        </section>

        <section className="features">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-robot"></i>
            </div>
            <h3>Multi-Agent Management</h3>
            <p>Manage the use of multiple AI agents, each powered by your own n8n workflows. Switch between agents instantly.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-comments"></i>
            </div>
            <h3>Beautiful Chat Interface</h3>
            <p>Enjoy a modern, responsive chat experience with session persistence and real-time messaging.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-screwdriver-wrench"></i>
            </div>
            <h3>Tool Discovery</h3>
            <p>Automatically fetch and display your agent's available tools and capabilities from n8n metadata webhooks.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Secure & Private</h3>
            <p>Your data stays safe with JWT authentication and built-in SSRF protection. No API keys needed.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-plug"></i>
            </div>
            <h3>Easy Integration</h3>
            <p>Simply provide your n8n webhook URLs. No complex setup or configuration required.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <h3>Fast & Responsive</h3>
            <p>Built with React and modern web technologies for a smooth, lightning-fast experience.</p>
          </div>
        </section>

        <section className="cta">
          <h2>Ready to get started?</h2>
          <p>Create your account and start building your AI agent platform today.</p>
          <button onClick={handleAccessRequest} className="btn-hero">
            Create Free Account <i className="fa-solid fa-arrow-right"></i>
          </button>
        </section>
        
        <footer className="landing-footer">
            <p>&copy; {new Date().getFullYear()} n8n Chat. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
