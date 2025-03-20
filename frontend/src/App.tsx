import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import ContinentPage from './pages/ContinentPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginRegister from './pages/LoginRegister';
import FavoritesPage from './pages/FavoritesPage';
import SearchResultsPage from './pages/SearchResultsPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/favorite" element={<FavoritesPage />} />
        <Route path="/continent/:continentName" element={<ContinentPage />} />
        <Route path='/login' element={<LoginRegister />} />
        <Route path="/places/:continentName/:category" element={<SearchResultsPage />} />
      </Routes>
    </Router>

  )
}

export default App;
