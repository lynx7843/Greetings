import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './welcome';
import Request from './get';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/greeting" element={<Request />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
