import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./components/Home";
import RegistrationForm from './components/registrationForm';
import LoginForm from './components/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registrationForm" element={<RegistrationForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
