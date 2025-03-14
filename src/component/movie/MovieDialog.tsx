import React from 'react';

import Dialog from '../dialog/Dialog';
import { IMovie } from '../../interface/movie.interface';

interface MovieDialogProps {
  movie: IMovie;
  onClose: () => void;
}

const MovieDialog: React.FC<MovieDialogProps> = ({ movie, onClose }) => {
  return (
    <>
      <Dialog movie={movie} onClose={onClose} />
    </>
  );
};

export default MovieDialog;
