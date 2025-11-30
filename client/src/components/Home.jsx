import React from "react";
import { Link } from "react-router-dom";
import ai from "../images/ai.png";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative gradient-hero text-white">
        <main className="container mx-auto px-1 md:px-0 py-16 md:py-24" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl xs:text-5xl md:text-6xl font-bold leading-tight">Elevate Your Writing with AI</h1>
              <p className="mt-4 text-base md:text-lg text-gray-300 max-w-lg mx-auto md:mx-0">Unleash the power of artificial intelligence to perfect your grammar, eliminate spelling errors, and transform your writing style.</p>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  to="/write" 
                  className="bg-primary text-white px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold hover:opacity-90 transition-opacity text-center"
                >
                  Start Writing Now
                </Link>
                <Link 
                  to="/about" 
                  className="bg-transparent border border-gray-400 text-white px-6 py-3 md:px-8 md:py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className=" max-sm:hidden sm:absolute inset-0 border-2 border-white rounded-2xl md:rounded-3xl transform -rotate-2 md:-rotate-3 scale-105 opacity-50"></div>
              <div className="relative bg-gray-800/20 backdrop-blur-sm p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/20 shadow-2xl">
                <img 
                  alt="Illustration of a person using a laptop with AI grammar correction suggestions." 
                  className="rounded-lg md:rounded-xl w-full h-auto object-contain" 
                  src={ai}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <section className="bg-gray-900 dark:bg-black py-12 md:py-16 text-white">
        <div className="container mx-auto px-1 md:px-0" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold">10K+</p>
              <p className="text-gray-400 mt-2 text-sm md:text-base">Active Users</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">1M+</p>
              <p className="text-gray-400 mt-2 text-sm md:text-base">Documents Processed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">99%</p>
              <p className="text-gray-400 mt-2 text-sm md:text-base">Accuracy Rate</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold">24/7</p>
              <p className="text-gray-400 mt-2 text-sm md:text-base">Availability</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-1 md:px-0 text-center" style={{ paddingLeft: '5px', paddingRight: '5px' }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">Powerful Features at Your Fingertips</h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl md:max-w-3xl mx-auto">Our AI-powered tools are designed to enhance your writing experience with cutting-edge technology.</p>
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-left">
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <span className="material-icons-outlined text-primary text-3xl md:text-4xl">edit_note</span>
              <h3 className="text-lg md:text-xl font-bold mt-4 text-primary">Smart Grammar Correction</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">Advanced AI algorithms detect and correct grammatical errors, ensuring your writing is polished and professional.</p>
              <Link className="inline-flex items-center mt-4 md:mt-6 font-semibold text-primary hover:underline text-sm md:text-base" to="/write">
                Learn more
                <span className="material-icons-outlined text-base md:text-lg ml-1">chevron_right</span>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <span className="material-icons-outlined text-primary text-3xl md:text-4xl">spellcheck</span>
              <h3 className="text-lg md:text-xl font-bold mt-4 text-primary">Advanced Spell Checker</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">Catch even the most elusive spelling errors with our comprehensive dictionary and context-aware spell check.</p>
              <Link className="inline-flex items-center mt-4 md:mt-6 font-semibold text-primary hover:underline text-sm md:text-base" to="/write">
                Learn more
                <span className="material-icons-outlined text-base md:text-lg ml-1">chevron_right</span>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <span className="material-icons-outlined text-primary text-3xl md:text-4xl">autorenew</span>
              <h3 className="text-lg md:text-xl font-bold mt-4 text-primary">Intelligent Rephrasing</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">Transform your sentences for clarity and impact, tailored to your desired tone and style.</p>
              <Link className="inline-flex items-center mt-4 md:mt-6 font-semibold text-primary hover:underline text-sm md:text-base" to="/write">
                Learn more
                <span className="material-icons-outlined text-base md:text-lg ml-1">chevron_right</span>
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <span className="material-icons-outlined text-primary text-3xl md:text-4xl">analytics</span>
              <h3 className="text-lg md:text-xl font-bold mt-4 text-primary">Writing Analytics</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">Gain insights into your writing style and track improvements over time with our detailed analytics.</p>
              <Link className="inline-flex items-center mt-4 md:mt-6 font-semibold text-primary hover:underline text-sm md:text-base" to="/write">
                Learn more
                <span className="material-icons-outlined text-base md:text-lg ml-1">chevron_right</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
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

export default Home;