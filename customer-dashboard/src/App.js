import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CustomerDetails from './components/CustomerDetails';
import CityList from './components/CityList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer/:id" element={<CustomerDetails />} />
        <Route path="/cities" element={<CityList />} />
      </Routes>
    </Router>
  );
}

export default App;
