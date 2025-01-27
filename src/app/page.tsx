"use client";
import { Route, Routes } from 'react-router-dom';
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Testimonials from "./sections/Testimonials";
import Download from "./sections/Download";
import Footer from "./sections/Footer";

import BusinessesPage from './pages/businesses/page';
import IndividualsPage from './pages/individuals/page';
import LearnPage from './pages/learn/page';
import AboutPage from './pages/about/page';
import Gateway from './pages/gateway/page';
import Custody from './pages/custody/page';
import BuySellCrypto from './pages/bscrypto/page';
import Login from './pages/login/page';
import Signup from './pages/signup/page';
import { BrowserRouter } from 'react-router-dom';


const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
   </>
  );
};

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <BrowserRouter>

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/businesses" Component={BusinessesPage} />
        <Route path="/individuals" Component={IndividualsPage} />
        <Route path="/learn" Component={LearnPage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/gateway" Component={Gateway} />
        <Route path="/custody" Component={Custody} />
        <Route path="/buy-sell" Component={BuySellCrypto} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
      </Routes>
      </BrowserRouter>

      <Footer />
    </main>
  );
};

export default App;