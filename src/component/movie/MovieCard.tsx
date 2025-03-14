import React from 'react';

import Card from '../card/Card';
import { ICardProps } from '../../interface/card.interface';

const MovieCard: React.FC<ICardProps> = ({ movie, onClick }) => {
  return (
    <div>
      <Card movie={movie} onClick={onClick} />
    </div>
  );
};

export default MovieCard;
