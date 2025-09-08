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
              A community dedicated to growth, leadership, and shared success.
            </p>
          </header>

          <div className="space-y-16">
            {/* Mission Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-amber-400 mb-4">Our Mission</h2>
                <p className="text-slate-300 leading-relaxed">
                  Our mission is to empower individuals to achieve financial independence and personal growth through a supportive, collaborative network. We provide the tools, training, and mentorship necessary for our leaders to build thriving businesses and inspire their teams to reach new heights.
                </p>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" alt="Team collaborating" className="rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Vision Section */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-amber-400 mb-4">Our Vision</h2>
                <p className="text-slate-300 leading-relaxed">
                  We envision a global community of entrepreneurs who are not only successful in their own right but are also committed to lifting others up. We strive to be the gold standard in the industry, known for our integrity, innovation, and the genuine success stories of our members.
                </p>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop" alt="Global network" className="rounded-lg shadow-lg" />
              </div>
            </div>

            {/* Video Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Experience i-Elite</h2>
              <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto bg-slate-900 rounded-lg shadow-lg flex items-center justify-center">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/XSCzWFunx38?si=n5yvyR8voLOg0c2d"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                 >
                 </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
