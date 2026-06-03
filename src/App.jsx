import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/About';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="relative w-full">

      {/* Fixed starry background */}
      <div className="fixed inset-0 w-full h-screen -z-1 bg-[radial-gradient(ellipse_at_bottom,_var(--color-dark-800)_0%,_var(--color-dark-900)_100%)]">
        <div className="absolute inset-0 w-full h-full bg-repeat stars-sm" />
        <div className="absolute inset-0 w-full h-full bg-repeat stars-md" />
        <div className="absolute inset-0 w-full h-full bg-repeat stars-lg" />
      </div>

      <Navbar />

      <main className="relative z-2">
        <HomePage />
        <About />
        <Journey />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
