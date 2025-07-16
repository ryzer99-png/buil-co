import './ServicesSection.css';

import React from 'react';

import { texts } from '../../constants/constants';
import CompassIcon from '../../icons/CompassIcon';
import GlobeIcon from '../../icons/GlobeIcon';
import PuzzleIcon from '../../icons/PuzzleIcon';

const Services: React.FC = () => (
  <section id="caracteristicas" className="features-section">
    <div className="features-container">
      <h2 className="features-title">{texts.features.title}</h2>
      <div className="features-grid">
        {/* Característica 1 */}
        <div className="features-card">
          <div className="features-icon">
            <GlobeIcon />
          </div>
          <h3>{texts.features.feature1.title}</h3>
          <p>{texts.features.feature1.description}</p>
        </div>
        {/* Característica 2 */}
        <div className="features-card">
          <div className="features-icon">
            <CompassIcon />
          </div>
          <h3>{texts.features.feature2.title}</h3>
          <p>{texts.features.feature2.description}</p>
        </div>
        {/* Característica 3 */}
        <div className="features-card">
          <div className="features-icon">
            <PuzzleIcon />
          </div>
          <h3>{texts.features.feature3.title}</h3>
          <p>{texts.features.feature3.description}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;