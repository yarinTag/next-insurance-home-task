import React from 'react';
import { ISocialIconsProp } from '../interface/footer.interface';

export const MAIN_TEXT = (
  <>
    <span>EXPLORE YOUR NEXT</span> <br />
    <span>MOVIES AND TV SHOWS</span>
  </>
);
export const socialIcons: ISocialIconsProp[] = [
  { src: '/src/assets/facebook-share-icon.svg', alt: 'Facebook' },
  { src: '/src/assets/linkedin-share-icon.svg', alt: 'LinkedIn' },
  { src: '/src/assets/twitter-share-icon.svg', alt: 'Twitter' },
  { src: '/src/assets/instagram-share-icon.svg', alt: 'Instagram' },
  { src: '/src/assets/youtube-share-icon.svg', alt: 'YouTube' },
];
export const API_URL: string = 'http://localhost:3000/movies';
