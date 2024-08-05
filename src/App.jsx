import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Comingsoon from './pages/Comingsoon';
import Legals from './pages/Legals';
import Privacy from './pages/Privacy';
import Deleteacc from './pages/Deleteacc';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Comingsoon />} />
        <Route path="/legals" element={<Legals />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/deleteacc" element={<Deleteacc />} />
      </Routes>
    </Router>
  );
}

export default App;