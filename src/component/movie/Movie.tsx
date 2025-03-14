import React from 'react';
import Axios from 'axios';

import './movie.css';
import MovieCard from './MovieCard';
import { API_URL } from '../../utils';
import Search from '../search/Search';
import MovieDialog from './MovieDialog';
import { IMovie, IMoviesProps } from '../../interface/movie.interface';

const Movie: React.FC<IMoviesProps> = ({ movies }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedMovie, setSelectedMovie] = React.useState<IMovie | null>(null);

  const filteredMovies = React.useMemo(() => {
    if (searchTerm.trim() === '') {
      return movies;
    }

    const term = searchTerm.toLowerCase();
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(term) ||
        movie.rating.toString().includes(term) ||
        (movie.type && movie.type.toLowerCase().includes(term))
    );
  }, [searchTerm, movies]);

  const indexOfLastMovie = currentPage * 12;
  const indexOfFirstMovie = indexOfLastMovie - 12;
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredMovies.length / 12);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const getMovieById = async (id: string) => {
    const movie = await Axios.get(`${API_URL}/${id}`);
    return movie.data[0];
  };

  const handleMovieClick = async (id: string) => {
    const movie = await getMovieById(id);
    if (movie) {
      const img = new Image();
      img.src = movie.posterUrl;

      img.onload = () => {
        setSelectedMovie(movie);
      };

      img.onerror = () => {
        console.error('Error loading image');
        setSelectedMovie(movie);
      };
    }
  };

  return (
    <div className='movie-container' data-testid='movie-container'>
      <Search callFn={handleSearchChange} searchTerm={searchTerm} />
      {currentMovies.length > 0 ? (
        <>
          <div className='movie-list' data-testid='movie-list'>
            {currentMovies.map((movie: IMovie) => (
              <div
                key={movie.id}
                className='movie-item'
                data-testid={`movie-item-${movie.id}`}
              >
                <MovieCard movie={movie} onClick={handleMovieClick} />
              </div>
            ))}
          </div>
          <div className='pagination' data-testid='pagination'>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className='pagination-button'
              data-testid='prev-button'
            >
              Previous
            </button>

            <div className='page-numbers' data-testid='page-numbers'>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`page-number ${
                    currentPage === i + 1 ? 'active' : ''
                  }`}
                  data-testid={`page-number-${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className='pagination-button'
              data-testid='next-button'
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className='no-results' data-testid='no-results'>
          No movies found
        </div>
      )}
      {selectedMovie && (
        <MovieDialog
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Movie;
