import React from 'react';

import './dialog.css';
import { StarIconB } from '../../icon/star/Star';
import { ArrowLeftIcon } from '../../icon/arrow/Arrow';
import { IMovie } from '../../interface/movie.interface';

interface MovieDialogProps {
  movie: IMovie;
  onClose: () => void;
}

const Dialog: React.FC<MovieDialogProps> = ({ movie, onClose }) => {
  const rating =
    movie.rating === null || movie.rating === '' ? '0' : movie.rating;
  return (
    <div className='dialog-overlay' data-testid='movie-dialog'>
      <div className='dialog-container'>
        <div className='dialog-image'>
          <img src={movie.largeimage} alt={movie.title} />
        </div>
        <div className='dialog-content'>
          <div>
            <h2
              className='dialog-title'
              dangerouslySetInnerHTML={{ __html: movie.title }}
            ></h2>
            <p className='dialog-runtime'> {movie.runtime}</p>
            <p className='dialog-rating'>
              <StarIconB />
              <span className='rating-number'>{rating}/10</span>
            </p>
            <p
              className='dialog-description'
              dangerouslySetInnerHTML={{ __html: movie.synopsis }}
            ></p>
          </div>
          <div className='dialog-back-btn'>
            <button className='arrow-icon' onClick={onClose}>
              <ArrowLeftIcon />
            </button>
            <span className='read-more-text'>Back to List</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
