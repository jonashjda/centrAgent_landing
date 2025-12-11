import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Reusing the main CSS for consistency

export default function RequestAccess() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reason: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="landing">
      <header className="landing-header">
        <div className="logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
          <i className="fa-solid fa-robot"></i>
          <span>n8n Chat</span>
        </div>
        <div className="auth-buttons">
          <button onClick={() => navigate('/')} className="btn-secondary">
            Back to Home
          </button>
        </div>
      </header>

      <main className="landing-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <div className="feature-card" style={{ maxWidth: '600px', width: '100%', padding: '2rem', textAlign: 'left' }}>
          {!submitted ? (
            <>
              <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Request Access</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                  />
                </div>

                <div>
                  <label htmlFor="company" style={{ display: 'block', marginBottom: '0.5rem' }}>Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                  />
                </div>

                <div>
                  <label htmlFor="reason" style={{ display: 'block', marginBottom: '0.5rem' }}>How do you plan to use n8n Chat?</label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    rows="4"
                    required
                    style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                  Submit Request
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <i className="fa-solid fa-check-circle" style={{ fontSize: '3rem', color: '#4CAF50', marginBottom: '1rem' }}></i>
              <h3>Request Received!</h3>
              <p>Thanks for your interest. We'll be in touch shortly.</p>
              <button onClick={() => navigate('/')} className="btn-primary" style={{ marginTop: '1.5rem' }}>
                Return Home
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
