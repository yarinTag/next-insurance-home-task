import React from 'react';

import './rating.css';
import { StarIconS } from '../../icon/star/Star';

const Rating: React.FC<{ rating: string }> = ({ rating }) => {
  return (
    <div className='star-rating'>
      <StarIconS />
      <span className='rating-number'>{rating}</span>
    </div>
  );
};

export default Rating;
