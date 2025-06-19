import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from "framer-motion";
import { Plane, Compass, Info, X, Menu, Target, Search, Award, TrendingUp, Shield, Users, PartyPopper, ArrowUp } from 'lucide-react';
import { useScrollDirection } from '../hooks/UseScrollDirection';
import React from 'react';
import ConnectWalletModal from "./ConnectWalletModal";

//=============HEADER====================
interface HeaderProps {
  onOpenWallet: () => void;
}
const Header = ({ onOpenWallet }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const scrollDir = useScrollDirection();

  return (
    <header
      className={`fixed w-full text-white bg-charcoal-gray/80 z-50 transition-[top] duration-300 ${
        scrollDir === "down" ? "-top-24 md:-top-20" : "top-0"
      }`}
    >
      <nav className="container relative flex items-center justify-between p-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/icon.png" alt="Hackatour logo" className="w-8 h-8" />
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

        {/* Nav Links */}
        <ul
          className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6
            bg-charcoal-gray/90 md:bg-transparent absolute md:static
            top-full right-0 w-full md:w-auto p-6 md:p-0
            transition-all duration-300 ease-in-out
            ${open
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible md:visible md:translate-y-0 md:opacity-100"}`}
        >
          <li>
            <a href="#" className="flex items-center space-x-1 text-lg font-semibold transition-colors hover:text-optimistic-yellow">
              <Compass className="w-5 h-5" /><span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-1 text-lg font-semibold transition-colors hover:text-optimistic-yellow">
              <Info className="w-5 h-5" /><span>Faq</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-1 text-lg font-semibold transition-colors hover:text-optimistic-yellow">
              <PartyPopper className="w-5 h-5" /><span>Events</span>
            </a>
          </li>
          <li>
            <button
              onClick={onOpenWallet}
              className="flex items-center justify-center px-5 py-2 space-x-2 font-bold transition-all rounded-full shadow-md bg-cyan-vibrant text-charcoal-gray hover:bg-optimistic-yellow hover:scale-105"
            >
              <Plane className="w-5 h-5" /><span>Start Tour</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

//=============HERO====================
interface HeroSectionProps {
  onOpenWallet: () => void;
}
const HeroSection = ({ onOpenWallet }: HeroSectionProps) => (
  <section
    id="hero"
    className="relative flex flex-col items-center justify-center w-full h-screen pt-24 text-center bg-center bg-cover"
    style={{ backgroundImage: "url('./landing-page/bg.png')" }}
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
        onClick={onOpenWallet}
        className="relative inline-flex items-center justify-center px-8 py-4 mt-10 font-extrabold transition-all duration-300 ease-in-out transform rounded-full shadow-lg group bg-cyan-vibrant text-charcoal-gray hover:bg-optimistic-yellow hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300 animate-fade-in-up"
        style={{ animationDelay: '0.4s' }}
      >
        <span className="relative z-10 text-lg font-extrabold">Start Exploring</span>
        <span
          className="absolute inset-0 transition-opacity duration-300 ease-in-out bg-white rounded-full opacity-0 group-hover:opacity-10"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  </section>
);

//=============DESCRIPTION====================
const DescriptionSection = () => (
  <section className="py-24 bg-gradient-to-b from-white to-blue-50">
    <div className="container grid items-center gap-12 px-4 mx-auto md:grid-cols-2">
      {/* Left: Image */}
      <div className="relative w-full h-full">
        <div className="overflow-hidden shadow-lg rounded-3xl">
          <img
            src="/landing-page/bolinao.jpg" // Replace with your own image path
            alt="Exploring Pangasinan"
            className="object-cover w-full h-full max-h-[500px] hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* Right: Description Text */}
      <div className="text-left">
        <h2 className="mb-6 text-4xl font-extrabold leading-snug text-gray-900">
          Discover <span className="text-cyan-600">Hackatour</span>: Your Web3-Powered Tour Companion
        </h2>
        <p className="mb-4 text-lg leading-relaxed text-gray-700">
          <strong>Hackatour</strong> is a gamified travel experience that blends traditional tourism with the power of blockchain. Explore breathtaking destinations across <span className="font-semibold text-cyan-600">Pangasinan</span>, complete interactive challenges, and earn digital rewards.
        </p>
        <p className="mb-4 text-lg leading-relaxed text-gray-700">
          With every adventure, you gain unique NFTs that serve as verified memories of your journey. Whether it's hiking coastal cliffs, engaging with local culture, or trying regional delicacies—Hackatour turns each step into an achievement.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          Become a part of a vibrant explorer community, level up your tour profile, and unlock hidden gems around every corner.
        </p>
      </div>
    </div>
  </section>
);

//=============FEATURE====================
const features = [
  {
    icon: <TrendingUp className="w-8 h-8 text-cyan-600" />,
    title: 'AI Itinerary Planner',
    description: 'Let AI craft personalized travel plans based on your location, preferences, making every journey seamless and efficient.'
  },
  {
    icon: <Award className="w-8 h-8 text-cyan-600" />,
    title: 'Gamified Travel',
    description: 'Embark on missions and challenges during your trip to earn digital rewards and collectibles'
  },
  {
    icon: <Shield className="w-8 h-8 text-cyan-600" />,
    title: 'NFT Marketplace',
    description: 'Purchase exclusive NFTs that unlock real-world benefits and support local tourism communities.'
  },
  {
    icon: <Users className="w-8 h-8 text-cyan-600" />,
    title: 'Web3 Community',
    description: 'Connect with fellow explorers in a decentralized community redefining the future of travel.'
  }
];

const FeaturesSection = () => (
  <section className="py-24 bg-white">
    <div className="container px-4 mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          <span className="text-cyan-600">Hackatour</span> Your Future Tour Guide
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Explore a new kind of tourism with blockchain-powered features designed for modern adventurers.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-6 text-center transition-all duration-300 shadow-md cursor-pointer bg-gray-50 rounded-2xl group hover:shadow-xl hover:scale-105 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-colors duration-300 rounded-full bg-cyan-100 group-hover:bg-optimistic-yellow">
              {/* Ensure the icon itself also transitions color if desired */}
              {React.cloneElement(feature.icon, {
                className: `${feature.icon.props.className} transition-colors duration-300 group-hover:text-charcoal-gray`
              })}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

//=============JOURNEY====================
const journeySteps = [
  {
    icon: <Search className="w-full h-full" />,
    step: "01",
    title: "Search for Destination",
    description: "Browse through curated destinations across Pangasinan and discover hidden gems waiting to be explored."
  },
  {
    icon: <Plane className="w-full h-full" />,
    step: "02",
    title: "Travel",
    description: "Embark on your adventure with our guided AI routes and local recommendations for an authentic experience."
  },
  {
    icon: <Target className="w-full h-full" />,
    step: "03",
    title: "Complete Mission",
    description: "Engage with interactive challenges, capture moments, and contribute valuable insights to the community."
  },
  {
    icon: <Award className="w-full h-full" />,
    step: "04",
    title: "Earn NFT",
    description: "Mint unique digital collectibles and souvenirs that commemorate your journey and achievements."
  },
  {
    icon: <TrendingUp className="w-full h-full" />,
    step: "05",
    title: "Level Up",
    description: "Advance your explorer status, unlock exclusive rewards, and gain access to premium destinations."
  },
];

const JourneySection = () => (
  <section className="relative py-28 bg-gradient-to-b from-blue-50 to-white">
    <div className="container px-4 mx-auto">
      {/* Title */}
      <motion.div
        className="flex flex-col items-center mb-24 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-6 text-5xl font-extrabold text-gray-900">
          Start Your Adventure With <span className="text-cyan-600">Hackatour</span>
        </h2>
        <p className="max-w-2xl text-xl text-center text-gray-700">
          Follow the path from discovery to mastery in the world of Web3-powered travel experiences.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative flex flex-col items-center space-y-24">
        {/* Vertical line in center */}
        <span className="absolute top-0 z-0 w-1 h-full transform -translate-x-1/2 bg-gray-200 left-1/2" />

        {journeySteps.map((step, index) => {
          const ref = useRef(null);
          const inView = useInView(ref, { amount: 0.6, once: false });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1.03 } : { opacity: 0.3, y: 50, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col items-center w-full max-w-2xl transition-transform duration-500 group"
            >
              {/* Active part of vertical line */}
              {inView && (
                <motion.span
                  layoutId="active-line"
                  className="absolute top-0 z-10 w-1 h-full transform -translate-x-1/2 bg-cyan-500 left-1/2"
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              )}

              {/* Step circle */}
              <span
                className={`z-10 flex items-center justify-center w-14 h-14 mb-4 text-lg font-bold border-4 rounded-full shadow-lg transition duration-300
                  ${inView
                    ? "bg-cyan-600 text-white border-white group-hover:bg-yellow-400 group-hover:border-yellow-300"
                    : "bg-gray-300 text-gray-500 border-gray-100"
                  }`}
              >
                {step.step}
              </span>

              {/* Step content card (no hover color change) */}
              <div className="z-10 w-full p-8 transition duration-300 bg-white border border-gray-200 shadow-xl rounded-2xl">
                <div className="flex items-center mb-5 space-x-6">
                  <div className="flex items-center justify-center w-16 h-16 text-3xl transition duration-300 rounded-full bg-cyan-100 text-cyan-600 group-hover:bg-yellow-200 group-hover:text-yellow-600">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

// ============ GALLERY =============
const gallery = [
  { src: '/landing-page/dagupan-museum.jpg', caption: 'Dagupan Museum' },
  { src: '/landing-page/boat-trip.jpg', caption: 'Coastal Boat Trip' },
  { src: '/landing-page/bangus-festival.jpg', caption: 'Celebrate Festivals' },
  { src: '/landing-page/hidden-gem.jpg', caption: 'Find Hidden Gems' }
];

const GallerySection = () => (
  <section className="py-16 bg-white">
    <div className="container px-4 mx-auto">
      <h2 className="mb-12 text-4xl font-extrabold text-center text-charcoal-gray">
        Explore Our Adventures
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {gallery.map((g) => (
          <div
            key={g.src}
            className="relative overflow-hidden transition duration-300 transform shadow-lg rounded-xl group"
          >
            <img
              src={g.src}
              alt={g.caption}
              className="object-cover w-full h-56 transition duration-300 ease-in-out group-hover:brightness-110 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-sm font-medium text-white transition-all duration-300 translate-y-full bg-gradient-to-t from-black/70 to-transparent opacity-90 group-hover:translate-y-0 group-hover:opacity-100">
              {g.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============ CTA =============
interface CTASectionProps {
  onOpenWallet: () => void;
}
const CTASection = ({ onOpenWallet }: CTASectionProps) => (
  <section className="py-20 bg-cyan-vibrant text-charcoal-gray">
    <div className="container px-4 mx-auto text-center">
      <h2 className="mb-4 text-4xl font-bold">Ready to embark?</h2>
      <p className="mb-8 text-lg">Start your Pangasinan journey with us and create unforgettable memories.</p>
      <button 
        onClick={onOpenWallet}
        className="px-10 py-5 text-xl font-bold transition-all duration-300 ease-in-out rounded-full shadow-xl bg-optimistic-yellow text-charcoal-gray hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-optimistic-yellow focus:ring-opacity-75"
      >
        <p className="text-xl font-bold ">Start Exploring </p>
      </button>
    </div>
  </section>
);

// ============ FOOTER =============
const Footer = () => (
  <footer className="py-12 text-gray-400 bg-charcoal-gray">
    <div className="container grid grid-cols-1 gap-8 px-6 mx-auto text-center md:grid-cols-2 lg:grid-cols-4 md:text-left">

      {/* Column 1: Logo & Copyright (Always spans full width on small, then 1/2 on MD, 1/4 on LG) */}
      <div className="flex flex-col items-center col-span-full md:col-span-1 lg:col-span-1 md:items-start">
        {/* Replace with your actual logo component or img tag */}
        <div className="mb-2 text-2xl font-bold text-white">Hackatour</div>
        <p className="text-sm">© {new Date().getFullYear()} Hackatour. All rights reserved.</p>
        <p className="mt-1 text-sm">Pangasinan, Philippines</p> {/* Added location */}
      </div>

      {/* Column 2: Legal & About (Starts second on MD screens, 3rd on LG) */}
      <div className="col-span-1">
        <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
        <ul className="space-y-2">
          {/* Changed hover:text-white to hover:text-optimistic-yellow */}
          <li><a href="/about" className="transition-colors duration-200 hover:text-optimistic-yellow">About Us</a></li>
          <li><a href="/privacy-policy" className="transition-colors duration-200 hover:text-optimistic-yellow">Privacy Policy</a></li>
          <li><a href="/terms-of-service" className="transition-colors duration-200 hover:text-optimistic-yellow">Terms of Service</a></li>
        </ul>
      </div>

      {/* Column 3: Support & Contact (Starts third on MD screens, 2nd on LG - for visual balance) */}
      <div className="col-span-1">
        <h3 className="mb-4 text-lg font-semibold text-white">Support</h3>
        <ul className="space-y-2">
          {/* Changed hover:text-white to hover:text-optimistic-yellow */}
          <li><a href="/contact" className="transition-colors duration-200 hover:text-optimistic-yellow">Contact Us</a></li>
          <li><a href="/faq" className="transition-colors duration-200 hover:text-optimistic-yellow">FAQs</a></li>
        </ul>
      </div>

      {/* Column 4: Social Media & Newsletter (Always on its own line on small, 2nd column on MD, last on LG) */}
      <div className="flex flex-col items-center col-span-full md:col-span-2 lg:col-span-1 md:items-start">
        <h3 className="mb-4 text-lg font-semibold text-white">Connect</h3>
        <div className="flex mb-4 space-x-4">
          {/* Changed hover:text-white to hover:text-optimistic-yellow for social icons too */}
          <a href="https://www.facebook.com/share/v/1Ad2fcaVcJ/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors duration-200 hover:text-optimistic-yellow">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h3V2h-3c-3.87 0-7 3.13-7 7v4H6v4h3v9h5v-9z"/></svg>
          </a>
        </div>
      </div>

    </div>
  </footer>
);

// ============ SCROLLTOTOPBUTTON =============
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); 
    return () => window.removeEventListener('scroll', onScroll);
  }, []); 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50 p-3
        bg-cyan-vibrant text-charcoal-gray rounded-full shadow-lg
        transition-all duration-300 ease-in-out
        ${visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}
        hover:bg-optimistic-yellow hover:scale-110 hover:shadow-xl
        focus:outline-none focus:ring-4 focus:ring-optimistic-yellow focus:ring-opacity-75
      `}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

// ============ MAIN PAGE ============
const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  // Function to open connect wallet modal
  const openConnectWalletModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Header onOpenWallet={openConnectWalletModal} />
      <HeroSection onOpenWallet={openConnectWalletModal} />
      <DescriptionSection />
      <FeaturesSection />
      <JourneySection />
      <GallerySection />
      <CTASection onOpenWallet={openConnectWalletModal} />
      <Footer />
      <ScrollToTopButton />
      
      {/* Connect Wallet Modal */}
      <ConnectWalletModal 
        show={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </>
  );
};

export default LandingPage;