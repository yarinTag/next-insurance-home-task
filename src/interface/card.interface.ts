import { IMovie } from './movie.interface';

export interface ICardProps {
  movie: IMovie;
  onClick: (id: string) => void;
}
