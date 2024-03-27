import Nav from './Comps/Nav';
import LandingPage from './Pages/LandingPage';
import Footer from './Comps/Footer';
import './App.css';
import BookingPage from './Pages/BookingPage';
import AboutPage from './Pages/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router >
        <Nav />
        <Routes>
          <Route path="/Booking" element={<BookingPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
