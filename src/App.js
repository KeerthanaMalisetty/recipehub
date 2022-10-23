
import './App.css';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import { Home } from './Components/Home/Home'
import { Categories } from './Components/Categories/Categories'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>


    </div>
  );
}

export default App;
