import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Layout
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Main components
import Home from './Components/Home';
import Middle from './Components/Middle';
import Destination from './Components/Destination';
import Portifolio from './Components/portifolio';
import Experience from './Components/Experience';
import Reviews from './Components/Reviews';
import Questions from './Components/Questions';
import Subscribe from './Components/Subscribe';

// Pages
import DianiDetail from './pages/DianiDetail';
import BushPlaneDetail from './pages/BushPlaneDetail';
import NatureDetail from './pages/NatureDetail';
import LakeNakuruDetail from './pages/LakeNakuruDetail';
import CultureDetail from './pages/CultureDetail';
import HotSpringsDetail from './pages/HotSpringsDetail';
import ExperienceDetail from './pages/ExperienceDetails';
import Packages from './pages/Packages';
import Booking from './pages/Booking';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>

      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/travel-app"
          element={
            <>
              <Home />
              <Middle />
              <Destination />
              <Portifolio />
              <Experience />
              <Reviews />
              <Questions />
              <Subscribe />
            </>
          }
        />

        {/* Destination detail routes */}
        <Route path="/destination/diani" element={<DianiDetail />} />
        <Route path="/destination/bush-plane" element={<BushPlaneDetail />} />
        <Route path="/destination/nature" element={<NatureDetail />} />
        <Route path="/destination/lake-nakuru" element={<LakeNakuruDetail />} />
        <Route path="/destination/culture" element={<CultureDetail />} />
        <Route path="/destination/hot-springs" element={<HotSpringsDetail />} />

        {/* Other pages */}
        <Route path="/experiences" element={<ExperienceDetail />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/booking" element={<Booking />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
