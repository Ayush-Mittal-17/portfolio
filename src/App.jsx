import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import WhatIBuild from './components/sections/WhatIBuild';
import Projects from './components/sections/Projects';
import HowIWork from './components/sections/HowIWork';
import Contact from './components/sections/Contact';
import CursorGlow from './components/ui/CursorGlow';

function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <WhatIBuild />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
