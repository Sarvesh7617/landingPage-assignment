import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contactus from "./components/ContactUs";
import Particle from "./components/Particle";
import {ThemeContextProvider} from "./components/UseContext";
import { useEffect, useState } from "react";

function App() {

  const [themeMode,setTheme]=useState('light');

    const darkMode=()=>{
        setTheme('dark')
    }

    const lightMode=()=>{
        setTheme('light')
    }

    useEffect(()=>{
        document.querySelector('html').classList.remove('light','dark')
        document.querySelector('html').classList.add(themeMode)
    },[themeMode])

  return (
    <ThemeContextProvider value={{themeMode,darkMode,lightMode}}>
    <BrowserRouter>
      <Navbar />
      <main>
        <Particle/>
        <Routes>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/why-us" element={<Features/>} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/apply" element={<Contactus/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
     </ThemeContextProvider>
  );
}

export default App;