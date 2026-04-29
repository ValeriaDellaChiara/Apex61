import React from 'react';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Courses } from './components/Courses';
import { Instructor } from './components/Instructor';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CookieConsent } from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Intro />
      <Courses />
      <Instructor />
      <Contact />
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
