import React from "react";
import { Link } from "react-router-dom";
import ai from "../images/ai.png";

const About = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-16 md:py-20">
        <div className="container mx-auto px-1 md:px-0 text-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About GramChecker</h1>
          <p className="text-base md:text-lg max-w-2xl md:max-w-3xl mx-auto text-gray-300">
            Discover how our cutting-edge AI technology is revolutionizing the way people write, edit, and perfect their content.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-1 md:px-0" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-primary">Our Mission</h2>
              <p className="text-base md:text-lg mb-4 md:mb-6 text-gray-600 dark:text-gray-400">
                At GramChecker, we believe that everyone deserves access to powerful writing tools that can help them 
                communicate more effectively. Our mission is to democratize access to advanced AI writing assistance, making 
                it available to writers of all skill levels and backgrounds.
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                We're committed to developing innovative solutions that not only correct errors but also help users become 
                better writers through intelligent suggestions and actionable insights.
              </p>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="bg-gray-800/20 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-xl shadow text-center">
                    <span className="material-icons-outlined text-2xl md:text-3xl text-primary mx-auto mb-3 md:mb-4">lightbulb</span>
                    <h3 className="font-bold text-primary mb-2 text-lg">Innovation</h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Constantly evolving technology</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-xl shadow text-center">
                    <span className="material-icons-outlined text-2xl md:text-3xl text-primary mx-auto mb-3 md:mb-4">group</span>
                    <h3 className="font-bold text-primary mb-2 text-lg">Community</h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Supporting writers worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-1 md:px-0" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <div className="text-center max-w-2xl md:max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">Key Features</h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
              Our comprehensive suite of AI-powered tools is designed to enhance every aspect of your writing process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              icon="edit_note"
              title="Grammar Correction"
              description="Advanced AI algorithms detect and correct grammatical errors, ensuring your writing is polished and professional."
            />
            <FeatureCard
              icon="spellcheck"
              title="Spell Check"
              description="Comprehensive spell-checking capability catches typos and suggests corrections, maintaining the integrity of your text."
            />
            <FeatureCard
              icon="autorenew"
              title="AI-Powered Rephrasing"
              description="Intelligent rephrasing suggestions help you diversify your language and improve clarity and impact."
            />
            <FeatureCard
              icon="analytics"
              title="Writing Analytics"
              description="Gain insights into your writing style and track improvements over time with our detailed analytics."
            />
            <FeatureCard
              icon="lightbulb"
              title="Style Enhancement"
              description="Receive personalized recommendations to improve your writing style and tone for better engagement."
            />
            <FeatureCard
              icon="group"
              title="Collaboration Tools"
              description="Share documents and collaborate with others in real-time, making teamwork seamless and efficient."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero text-white">
        <div className="container mx-auto px-1 md:px-0 py-16 md:py-20 text-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to Transform Your Writing?</h2>
          <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl md:max-w-2xl mx-auto">Join thousands of satisfied users who have elevated their writing with GramChecker.</p>
          <div className="mt-8 md:mt-10">
            <Link 
              to="/write" 
              className="bg-primary text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-base md:text-lg hover:opacity-90 transition-opacity"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-400">
        <div className="container mx-auto px-1 md:px-0 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <div className="text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start space-x-2 text-xl font-bold text-white">
              <span className="material-icons-outlined text-2xl text-primary">edit</span>
              <span>GramChecker</span>
            </Link>
            <p className="mt-2 text-sm">Elevating writing with the power of AI.</p>
          </div>
          <p className="mt-4 md:mt-0 text-sm">© {new Date().getFullYear()} GramChecker</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <span className="material-icons-outlined text-primary text-3xl md:text-4xl">{icon}</span>
    <h3 className="text-lg md:text-xl font-bold mt-4 text-primary">{title}</h3>
    <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">{description}</p>
  </div>
);

const TeamMember = ({ name, role, bio, imageUrl }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
    <div className="mx-auto mb-4 md:mb-6">
      <img 
        src={imageUrl} 
        alt={name}
        className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover mx-auto shadow-lg"
      />
    </div>
    <h3 className="text-xl font-bold text-primary mb-2">{name}</h3>
    <p className="text-primary font-semibold mb-3 md:mb-4 text-sm md:text-base">{role}</p>
    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{bio}</p>
  </div>
);

export default About;