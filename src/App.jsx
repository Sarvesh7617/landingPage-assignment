import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSectoin from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contactus from "./components/ContactUs";
import Particle from "./components/Particle";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Particle/>
        <Routes>
          <Route path="/program" element={<HeroSectoin/>} />
          <Route path="/why-us" element={<Features/>} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/apply" element={<Contactus/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;