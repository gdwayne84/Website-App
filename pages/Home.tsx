
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white"
        style={{backgroundImage: `url(https://picsum.photos/1600/900?grayscale&blur=2)`}}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Empowering Leaders. <span className="text-amber-400">Building Futures.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300">
            Your central hub for all the tools, resources, and inspiration you need to lead your team to success.
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-slate-800 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/about" className="group block p-8 bg-slate-900 rounded-lg shadow-lg hover:shadow-amber-400/20 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">What is i-Elite?</h3>
              <p className="text-slate-400">Discover the mission, vision, and core values that drive our community of leaders.</p>
            </Link>
            <Link to="/downloads" className="group block p-8 bg-slate-900 rounded-lg shadow-lg hover:shadow-amber-400/20 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">Resource Downloads</h3>
              <p className="text-slate-400">Access and download essential training materials, presentations, and marketing tools.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 sm:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <blockquote className="text-2xl md:text-3xl italic text-slate-300 border-l-4 border-amber-400 pl-6">
            <p>"The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things."</p>
          </blockquote>
          <cite className="block text-right mt-4 text-slate-400 not-italic">— Ronald Reagan</cite>
        </div>
      </section>
    </div>
  );
};

export default Home;
