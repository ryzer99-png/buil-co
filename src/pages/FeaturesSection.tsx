import React from 'react';
import { texts } from '../constants/constants';

const Features: React.FC = () => (
  <section id="caracteristicas" className="features-section py-16 md:py-24 bg-light-gray-100">
    <div className="features-container container mx-auto px-4">
      <h2 className="features-title text-3xl md:text-4xl font-bold text-center mb-12">{texts.features.title}</h2>
      <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Característica 1 */}
        <div className="features-card bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
          <div className="features-icon text-accent-blue mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9.75 14.25M12 14.25L12 17M14.25 14.25L14.25 17M12 9.75L12 12M14.25 9.75L14.25 12M9.75 9.75L9.75 12M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">{texts.features.feature1.title}</h3>
          <p className="text-gray-700">{texts.features.feature1.description}</p>
        </div>
        {/* Característica 2 */}
        <div className="features-card bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
          <div className="features-icon text-accent-blue mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">{texts.features.feature2.title}</h3>
          <p className="text-gray-700">{texts.features.feature2.description}</p>
        </div>
        {/* Característica 3 */}
        <div className="features-card bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
          <div className="features-icon text-accent-blue mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">{texts.features.feature3.title}</h3>
          <p className="text-gray-700">{texts.features.feature3.description}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
