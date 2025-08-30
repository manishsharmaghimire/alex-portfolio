import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [dark, setDark] = useState(false);

  // Optional: persist dark mode in localStorage
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div>
      <Navbar dark={dark} setDark={setDark} />
      <Landing dark={dark} />
      <About dark={dark} />
      <Skills dark={dark} />
      <Services dark={dark} />
      <Contact dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}
