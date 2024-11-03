import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import Events from './components/Events';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { Gallery } from './components/Gallery';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Music />
      <Events />
      <Contact />
      <Gallery />
      
      <footer className="bg-black py-8 text-center">
        <SocialMedia/>
        <p className="text-gray-400">© 2024 DJ Odiel. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;