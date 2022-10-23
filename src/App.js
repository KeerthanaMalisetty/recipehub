import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
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
