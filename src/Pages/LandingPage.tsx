import { useState, useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Plane, Compass, Info, X, Menu, Target, Search, Award, TrendingUp, Shield, Users, PartyPopper } from 'lucide-react';


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
            <a href="#" className="flex items-center space-x-1 text-lg font-semibold transition-colors hover:text-optimistic-yellow">
              <PartyPopper className="w-5 h-5" />
              <span>Events</span>
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
        className="px-6 py-3 mt-10 text-base font-bold transition duration-300 transform rounded-full shadow-xl sm:px-8 md:px-10 sm:py-4 sm:text-lg bg-cyan-vibrant text-charcoal-gray hover:bg-optimistic-yellow hover:scale-105 animate-fade-in-up"
        style={{ animationDelay: '0.4s' }}
      >
        Start Exploring
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
        <h2 className="text-4xl font-bold text-gray-900"> <span className="text-cyan-600">Hackatour</span> Your Future Tour Guide</h2>
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
            className="p-6 text-center transition-all shadow-md bg-gray-50 rounded-2xl hover:shadow-lg"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-100">
              {feature.icon}
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
    icon: <Search className="w-full h-full" />, step: "01",
    title: "Search for Destination",
    description: "Browse through curated destinations across Pangasinan and discover hidden gems waiting to be explored."
  },
  {
    icon: <Plane className="w-full h-full" />, step: "02",
    title: "Travel",
    description: "Embark on your adventure with our guided routes and local recommendations for an authentic experience."
  },
  {
    icon: <Target className="w-full h-full" />, step: "03",
    title: "Complete Mission",
    description: "Engage with interactive challenges, capture moments, and contribute valuable insights to the community."
  },
  {
    icon: <Award className="w-full h-full" />, step: "04",
    title: "Earn NFT",
    description: "Mint unique digital collectibles and souvenirs that commemorate your journey and achievements."
  },
  {
    icon: <TrendingUp className="w-full h-full" />, step: "05",
    title: "Level Up",
    description: "Advance your explorer status, unlock exclusive rewards, and gain access to premium destinations."
  },
]
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
          <span className="text-cyan-600">Hackatour</span> Your Web3 Tour Guide
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
              className="relative flex flex-col items-center w-full max-w-2xl transition-transform duration-500"
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
                className={`z-10 flex items-center justify-center w-14 h-14 mb-4 text-lg font-bold border-4 rounded-full shadow-lg
                  ${inView ? "bg-cyan-600 text-white border-white" : "bg-gray-300 text-gray-500 border-gray-100"}`}
              >
                {step.step}
              </span>

              {/* Step content */}
              <div className="z-10 w-full p-8 bg-white border border-gray-200 shadow-xl rounded-2xl">
                <div className="flex items-center mb-5 space-x-6">
                  <div className="flex items-center justify-center w-16 h-16 text-3xl rounded-full bg-cyan-100 text-cyan-600">
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
  { src: '/landing-page/hidden-gem.jpg', caption: 'Find Hiddem Gems' }
];

const GallerySection = () => (
  <section className="py-16">
    <div className="container px-4 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center">Explore Our Adventures</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {gallery.map((g) => (
          <div key={g.src} className="overflow-hidden rounded-lg shadow-lg">
            <img src={g.src} alt={g.caption} className="object-cover w-full h-48" />
            <p className="p-4 text-center">{g.caption}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============ CTA =============
const CTASection = () => (
  <section className="py-20 bg-cyan-vibrant text-charcoal-gray">
    <div className="container px-4 mx-auto text-center">
      <h2 className="mb-4 text-4xl font-bold">Ready to embark?</h2>
      <p className="mb-8 text-lg">Start your Pangasinan journey with us and create unforgettable memories.</p>
      <button className="px-8 py-4 font-bold transition rounded-full shadow-lg bg-optimistic-yellow text-charcoal-gray hover:scale-105">
        Start Exploring
      </button>
    </div>
  </section>
);

// ============ FOOTER =============
const Footer = () => (
  <footer className="py-8 text-gray-400 bg-charcoal-gray">
    <div className="container px-4 mx-auto text-center">
      <p>© {new Date().getFullYear()} Hackatour. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </footer>
);

// ============ MAIN PAGE ============
const LandingPage = () => (
  <>
    <Header />
    <HeroSection />
    <DescriptionSection />
    <FeaturesSection />
    <JourneySection />
    <GallerySection />
    <CTASection />
    <Footer />
  </>
);

export default LandingPage;
