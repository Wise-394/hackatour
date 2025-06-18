import { useState } from 'react';
import { Plane, Compass, Info, X, Menu } from 'lucide-react';


//=============HEADER====================
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed z-50 w-full text-white bg-charcoal-gray/80">
      <nav className="container relative flex items-center justify-between p-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Plane className="w-8 h-8" />
          <h1 className="text-2xl font-bold tracking-wide">Hackatour</h1>
        </div>

        {/* Hamburger toggle */}
        <button
          className="z-50 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu toggle"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Nav links */}
        <ul
          className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 
                      bg-charcoal-gray/90 md:bg-transparent 
                      absolute md:static top-full right-0 w-full md:w-auto p-6 md:p-0 
                      transition-all duration-300 ease-in-out 
                      ${open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible md:visible md:translate-y-0 md:opacity-100"}`}
        >
          <li>
            <a href="#" className="flex items-center space-x-1 text-lg font-semibold transition-colors hover:text-optimistic-yellow">
              <Compass className="w-5 h-5" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-1 text-lg font-semibold transition-colors hover:text-optimistic-yellow">
              <Info className="w-5 h-5" />
              <span>Faq</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-5 py-2 space-x-2 font-bold transition-all rounded-full shadow-md bg-cyan-vibrant text-charcoal-gray hover:bg-optimistic-yellow hover:scale-105">
              <Plane className="w-5 h-5" />
              <span>Start Tour</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

//=============HERO====================
const HeroSection = () => (
  <section
    id="hero"
    className="relative flex flex-col items-center justify-center w-full h-screen pt-24 text-center bg-center bg-cover"
    style={{ backgroundImage: "url('/bg.png')" }}
  >
    <div className="absolute inset-0 bg-charcoal-gray opacity-60"></div>
    <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl animate-fade-in-up">
        Explore The Beauty<br />of Pangasinan With Us
      </h1>
      <p className="mt-4 text-base font-light text-white sm:text-lg md:text-xl lg:text-2xl drop-shadow-md opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Your unforgettable journey starts here. Discover unique experiences, earn rewards, and connect with fellow explorers.
      </p>
      <button
        className="px-6 py-3 mt-10 text-base font-bold transition duration-300 transform rounded-full shadow-xl sm:px-8 md:px-10 sm:py-4 sm:text-lg bg-cyan-vibrant text-charcoal-gray hover:bg-optimistic-yellow hover:scale-105 animate-fade-in-up"
        style={{ animationDelay: '0.4s' }}
      >
        Start Exploring
      </button>
    </div>
  </section>
);

//=============PAGE====================
const LandingPage = () => (
  <>
    <Header />
    <HeroSection />
  </>
);

export default LandingPage;
