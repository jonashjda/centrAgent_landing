import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import RequestAccess from './RequestAccess';
import Pricing from './Pricing';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/request-access" element={<RequestAccess />} />
      </Routes>
    </Router>
  );
}
