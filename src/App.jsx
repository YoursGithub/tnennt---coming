import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Comingsoon from './pages/Comingsoon';
import Legals from './pages/Legals';
import Privacy from './pages/Privacy';
import Deleteacc from './pages/Deleteacc';
import Refundpolicy from './pages/Refundpolicy';
import Contactus from './pages/Contactus';
import Tnc from './pages/Tnc';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Comingsoon />} />
        <Route path="/legals" element={<Legals />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund&cancellation" element={<Refundpolicy />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/termsandconditions" element={<Tnc />} />
        <Route path="/deleteacc" element={<Deleteacc />} />
      </Routes>
    </Router>
  );
}

export default App;