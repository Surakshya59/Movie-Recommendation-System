// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, } from './context/AuthContext';
import LandingPage from './Landing/Suru';
import SignupPage from './Signup/Signup';
import LoginPage from './Login/Login';
import Navbar from './Navbar/Nav';
import Contacts from './Navbar/Contact';
import AboutUs from './Navbar/About';
import Feedback from './Navbar/Feedback';
import HomePage from './components/Homepage';
import Watchlist from './components/Watchlist';
import Trending from './components/Trending';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Main />
      </Router>
  
  );
};

const Main = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="relative min-h-screen pl-48 pb-16"> {/* Add padding-left for navbar and padding-bottom for footer */}
      {!hideNavbar && <Navbar />}
      <div className="ml-48 mt-16"> {/* Adjust content margin to avoid overlap with the fixed navbar */}
        <Routes>  
           </AuthProvider>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/watchlist" element={isAuthenticated ? <Watchlist /> : <Navigate to="/login" />} />
          <Route path="/trending" element={isAuthenticated ? <Trending /> : <Navigate to="/login" />} />
        </Routes>
      </div>
      {/* <Footer />  */}
    </div>
  );
};

export default App;
