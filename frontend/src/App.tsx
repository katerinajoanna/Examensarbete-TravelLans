import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import ContinentPage from './pages/ContinentPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MyPage from './pages/MyPage';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/continent" element={<ContinentPage />} />
        {/* <Route path="/continent/:continentId" element={<ContinentPage />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>

  )
}

export default App;
