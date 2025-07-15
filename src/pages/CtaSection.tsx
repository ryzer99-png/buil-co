import React from 'react';
import { IonButton } from '@ionic/react';
import { texts } from '../constants/constants';

const CTA: React.FC = () => (
  <section id="cta" className="bg-accent-blue text-white py-16 md:py-20 text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{texts.cta.title}</h2>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-light-gray-200">
        {texts.cta.subtitle}
      </p>
      <IonButton
        href="https://docs.google.com/forms/d/e/1FAIpQLSdSDKnqWue_okq5cmwKBiZ23AAx-3KBpcruY2GUzwaWZZkgOg/viewform"
        target="_blank"
        rel="noopener noreferrer"
        color="light"
        className="px-8 py-4 rounded-lg shadow-lg hover:bg-light-gray-200 transition duration-300 text-lg font-semibold"
      >
        {texts.cta.button}
      </IonButton>
    </div>
  </section>
);

export default CTA;
