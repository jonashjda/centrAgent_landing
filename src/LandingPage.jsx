import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

export default function LandingPage() {
  const navigate = useNavigate();
  // TODO: Update this URL to your platform's subdomain
  const platformUrl = 'https://centragent.netlify.app';

  const handleLogin = () => {
    window.location.href = `${platformUrl}`;
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
        <nav className="nav-links">
          <button onClick={() => navigate('/pricing')} className="nav-link">Pricing</button>
        </nav>
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
          <h1>One chat platform for all your AI Agents</h1>
          <p className="hero-subtitle">
            Build complex logic in n8n and instantly deploy it to a professional chat interface without writing a single line of frontend code. 
          </p>
          <p className='hero-subtitle'>
            Share your agents with all your teammates to quickly deploy and utilize your fleet of chat-based AI agents.
          </p>
          <button onClick={handleAccessRequest} className="btn-hero">
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </button>
        </section>

        <section className="features">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-comments"></i>
            </div>
            <h3>Unified Chat Interface</h3>
            <p>Rich text support with Markdown, tables, and code syntax highlighting. Automatically saves chat history.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-robot"></i>
            </div>
            <h3>Agent Management</h3>
            <p>Bring your own backend. Simply paste your n8n Webhook URLs to create an agent with dual-webhook architecture.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-users"></i>
            </div>
            <h3>Team Collaboration</h3>
            <p>Organize with team workspaces. Share agents with granular permissions and role-based access control.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Security & Architecture</h3>
            <p>Built-in SSRF protection, data isolation, and secure JWT-based authentication.</p>
          </div>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Build in n8n</h3>
              <p>Create a workflow in n8n (e.g., a customer support bot).</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Connect</h3>
              <p>Log in to CentrAgent, click "New Agent," and paste the n8n Webhook URL.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Interact</h3>
              <p>Start chatting immediately. CentrAgent handles the UI, history, and formatting.</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Share</h3>
              <p>Toggle permissions to let your team members chat with the same agent.</p>
            </div>
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
            <p>&copy; {new Date().getFullYear()} CentrAgent. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
