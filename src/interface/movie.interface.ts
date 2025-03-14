export interface IMovie {
  id: string;
  type: string;
  title: string;
  image: string;
  rating: string;
  imdbid: string;
  runtime: string;
  download: string;
  synopsis: string;
  released: string;
  unogsdate: string;
  largeimage: string;
}

export interface IMoviesProps {
  movies: IMovie[];
}

export interface IMovieProps {
  movie: IMovie;
}
