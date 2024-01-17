import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/register';
import Charts from './pages/charts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </Router>
  );
}

export default App;
