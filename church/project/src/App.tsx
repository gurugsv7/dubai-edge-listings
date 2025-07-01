import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';
import About from '@/components/About';
import MinistriesIntro from '@/components/MinistriesIntro';
import CoreMinistries from '@/pages/ministries/CoreMinistries';
import OutreachMinistries from '@/pages/ministries/OutreachMinistries';
import SpecialMinistries from '@/pages/ministries/SpecialMinistries';
import TeachingMinistries from '@/pages/ministries/TeachingMinistries';
import SugamMinistries from '@/pages/ministries/SugamMinistries';
import Events from '@/components/Events';
import Sermons from '@/components/Sermons';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import Founders from '@/components/Founders';
import Contact from '@/components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <QuickLinks />
              <About />
              <MinistriesIntro />
              <Events />
              <Sermons />
              <Testimonials />
              <Newsletter />
            </main>
          } />
          <Route path="/founders" element={<Founders />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Ministry Routes */}
          <Route path="/ministries/core" element={<CoreMinistries />} />
          <Route path="/ministries/outreach" element={<OutreachMinistries />} />
          <Route path="/ministries/special" element={<SpecialMinistries />} />
          <Route path="/ministries/teaching" element={<TeachingMinistries />} />
          <Route path="/ministries/sugam" element={<SugamMinistries />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;