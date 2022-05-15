import logo from './logo.svg';
import Home from './Components/home/Home';
import TourDetails from './Components/TourDetails/TourDetails';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails />} />
      </Routes>
    </>
  );
}

export default App;
