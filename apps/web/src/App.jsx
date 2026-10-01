import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import Tome1Page from './pages/Tome1Page';
import Tome2Page from './pages/Tome2Page';
import UniversPage from './pages/UniversPage';
import BoiteImagesPage from './pages/BoiteImagesPage';
import BoiteLettresPage from './pages/BoiteLettresPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tome-1" element={<Tome1Page />} />
                <Route path="/tome-2" element={<Tome2Page />} />
                <Route path="/univers" element={<UniversPage />} />
                <Route path="/boite-a-images" element={<BoiteImagesPage />} />
                <Route path="/boite-aux-lettres" element={<BoiteLettresPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;
