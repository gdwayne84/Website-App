import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-slate-800 py-16 sm:py-24 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              What is <span className="text-amber-400">i-Elite?</span>
            </h1>
            <p className="mt-4 text-lg text-slate-400">
              A community dedicated to growth, leadership, and shared success — a network marketing ecosystem designed to empower. Together, we achieve the extraordinary.
            </p>
          </header>

          <div className="space-y-16">
            {/* Mission Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-amber-400 mb-4">I. System Core Philosophy:</h2>
                <p className="text-slate-300 leading-relaxed">
                The i-Elite System is founded on the principle of <strong>"A Business of Love, Benefiting Others and Oneself."</strong> It is dedicated to building a Network Marketing ecosystem platform rooted in humanitarian care and driven by professional growth. We believe that true success stems from the unity of personal and social value, empowering every partner to achieve the dual goals of wealth growth and spiritual elevation.
                </p>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" alt="Team collaborating" className="rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Vision Section */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-amber-400 mb-4">II. System Core Values</h2>
                <p className="text-slate-300 leading-relaxed">
                1. <strong>Industry Benchmark</strong> – Building an outstanding brand in the Network Marketing field, leading the industry's standardized development.<br>
                2. <strong>Global Vision</strong> – Cultivating world-class Network Marketing teams, empowering members to step onto the international stage.<br>
                3. <strong>Wealth Code</strong> – Replicating actionable millionaire success models, enabling ordinary people to achieve the extraordinary.<br>
                4. <strong>Mindset Upgrade</strong> – Building a positive mindset and resilient attitude, breaking through self-imposed limitations.<br>
                5. <strong>Quality Life</strong> – Reshaping a holistic lifestyle encompassing health, wealth, and freedom.
                </p>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop" alt="Global network" className="rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Video Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Experience i-Elite</h2>

              <div className="relative aspect-video max-w-4xl mx-auto bg-slate-900 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/XSCzWFunx38?si=n5yvyR8voLOg0c2d"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
