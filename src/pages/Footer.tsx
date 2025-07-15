import React from 'react';
import { texts } from '../constants/constants';

const Footer: React.FC = () => (
  <footer className="bg-dark-blue-900 text-gray-400 py-10">
    <div className="container mx-auto px-4 text-center flex flex-col items-center">
      <div className="mb-4 md:mb-0">
        <p>{texts.footer.copyright}</p>
      </div>
      <div className="flex justify-center space-x-6">
        <a href="#" className="hover:text-white transition duration-300 rounded-md px-2 py-1">{texts.footer.privacy}</a>
        <a href="#" className="hover:text-white transition duration-300 rounded-md px-2 py-1">{texts.footer.terms}</a>
      </div>
    </div>
  </footer>
);

export default Footer;
