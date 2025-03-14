import React from 'react';

import './footer.css';
import { IFooterProps } from '../../interface/footer.interface';

const Footer: React.FC<IFooterProps> = ({ socialIcons }) => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div>
          <div className='company-logo'>
            <img
              src='/src/assets/favicon.svg'
              alt='company logo'
              className='icon'
            />
          </div>
          <div className='contact-us'>Contact Us</div>
          <div className='support-text'>
            support@nextmovies.com <br />
            Mon – Fri | 6:00am – 5:00 pm PT
          </div>
        </div>

        <div className='icon-row'>
          {socialIcons.map((icon, index) => (
            <img key={index} src={icon.src} alt={icon.alt} className='icon' />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
