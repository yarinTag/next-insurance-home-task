import React from 'react';

import './card.css';
import Rating from '../rating/Rating';
import { ArrowIcon } from '../../icon/arrow/Arrow';
import { ICardProps } from '../../interface/card.interface';

const Card: React.FC<ICardProps> = ({ movie, onClick }) => {
  const rating =
    movie.rating === null || movie.rating === '' ? '0' : movie.rating;

  return (
    <div className='card-container'>
      <div className='card-image-container'>
        <img src={movie.image} alt={movie.title} className='card-image' />
      </div>
      <h3
        className='card-title'
        dangerouslySetInnerHTML={{ __html: movie.title }}
      ></h3>
      <div className='card-rating'>
        <Rating rating={rating} />
      </div>
      <div className='read-more'>
        <span className='read-more-text'>Read more</span>
        <button
          className='arrow-icon'
          data-testid={`arrow-right-${movie.id}`}
          onClick={() => onClick(movie.id)}
        >
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default Card;
