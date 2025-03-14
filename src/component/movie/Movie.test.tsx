import React from 'react';
import Axios from 'axios';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from '@testing-library/react';

import Movie from './Movie';
import { IMovie } from '../../interface/movie.interface';

jest.mock('axios');
const mockedAxios = Axios as jest.Mocked<typeof Axios>;

const mockMovies: IMovie[] = [
  {
    id: '207856',
    title: '2001: A Space Odyssey',
    image:
      'https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd8H3yW84QBZ7bXkGlzSmeKjpS8gUEV7S_zPN4qVOX7mQ0SNpyHlOkh0WGGlrARjpOZPFlZXyU4t5E8phADO9rq80g.jpg?r=43c',
    synopsis:
      'While investigating the appearance of mysterious monoliths throughout the universe, two astronauts battle their ship&#39;s intelligent computer system.<br><b>New on 2020-06-18</b>',
    rating: '8.3',
    type: 'movie',
    released: '1968',
    runtime: '2h28m',
    largeimage:
      'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbjUFYCF6qVcxBNZXhL_HIGhaNXLosDyYyg6v3WP9H1FLsGMBtJx1uy9R8pEMgz0gGzPLlcF9lgH5WjpB_jl4p6DmlDw.jpg?r=43c',
    unogsdate: '2020-06-18',
    imdbid: 'tt0062622',
    download: '0',
  },
  {
    id: '215318',
    title: 'Ace Ventura: When Nature Calls',
    image:
      'https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd2CXwqVibqQ6X3SBFL7ADm7zczv73tuNxCW2zDwA-4SEW5Nkdfnybwn5MXfVE1fHv4IBxtpYBkjF3EZQoqHKWkHkA.jpg?r=914',
    synopsis:
      'Ace travels to the jungles of Africa to recover a rare white bat. But if he fails, a war with the violent Wachootoo tribe is sure to follow.<br><b>New on 2020-06-18</b>',
    rating: '6.4',
    type: 'movie',
    released: '1995',
    runtime: '1h34m',
    largeimage:
      'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcAF9ZyRlOXNySt7A9ll31tYwgxUVPVtznPAqkz1L_R9iTfkyHQHK1w-3Kz0RKlXfl4KoWtU1nWkIO-dcjz1k-RYFE-6.jpg?r=914',
    unogsdate: '2020-06-18',
    imdbid: 'tt0112281',
    download: '1',
  },
  {
    id: '234365',
    title: 'Against All Odds',
    image:
      'https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQLRgUUEW1ERizQ0QVFwll7ldXWFoWGHUJ0wh3fJkp9URt6FSKMpSyitgnrc5qYufG_SHlL530HaRnxVZsyKL1uiDg.jpg?r=603',
    synopsis:
      'An ex-football player agrees to track down a sleazy nightclub owner&#39;s mistress -- but when he finds the elusive woman in Mexico, he falls in love.<br><b>New on 2020-06-18</b>',
    rating: '5.9',
    type: 'movie',
    released: '1984',
    runtime: '2h1m',
    largeimage:
      'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXIMhbibi12RBdfyOzXCHGhv-M4U5HJZxWy3P8C3b5HO-3yO_Nnpwr8RZP7fwzyMAv2XrMO-a6CXLVKFqi6JZYO9QYJU.jpg?r=603',
    unogsdate: '2020-06-18',
    imdbid: 'tt0086859',
    download: '1',
  },
];

const mockMovieDetail = {
  id: '207856',
  title: '2001: A Space Odyssey',
  image:
    'https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd8H3yW84QBZ7bXkGlzSmeKjpS8gUEV7S_zPN4qVOX7mQ0SNpyHlOkh0WGGlrARjpOZPFlZXyU4t5E8phADO9rq80g.jpg?r=43c',
  synopsis:
    'While investigating the appearance of mysterious monoliths throughout the universe, two astronauts battle their ship&#39;s intelligent computer system.<br><b>New on 2020-06-18</b>',
  rating: '8.3',
  type: 'movie',
  released: '1968',
  runtime: '2h28m',
  largeimage:
    'https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbjUFYCF6qVcxBNZXhL_HIGhaNXLosDyYyg6v3WP9H1FLsGMBtJx1uy9R8pEMgz0gGzPLlcF9lgH5WjpB_jl4p6DmlDw.jpg?r=43c',
  unogsdate: '2020-06-18',
  imdbid: 'tt0062622',
  download: '0',
  director: 'Stanley Kubrick',
  cast: 'Keir Dullea, Gary Lockwood',
  country: 'United States',
  language: 'English',
};

const extendedMockMovies = [...mockMovies];
for (let i = 4; i <= 15; i++) {
  extendedMockMovies.push({
    ...mockMovies[i % 3], // Cycle through the existing movies
    id: `${i}00000`,
    title: `Test Movie ${i}`,
  });
}

describe('Movie Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders movie list correctly', () => {
    render(<Movie movies={extendedMockMovies} />);

    expect(screen.getByTestId('movie-container')).toBeInTheDocument();
    expect(screen.getByTestId('movie-list')).toBeInTheDocument();
    expect(screen.getByTestId('movie-search')).toBeInTheDocument();

    expect(screen.getByText('2001: A Space Odyssey')).toBeInTheDocument();
    expect(
      screen.getByText('Ace Ventura: When Nature Calls')
    ).toBeInTheDocument();
    expect(screen.getByText('Test Movie 12')).toBeInTheDocument();
    expect(screen.queryByText('Test Movie 13')).not.toBeInTheDocument();
  });

  test('handles pagination correctly', () => {
    render(<Movie movies={extendedMockMovies} />);

    expect(screen.getByTestId('prev-button')).toBeDisabled();
    expect(screen.getByTestId('next-button')).toBeEnabled();

    fireEvent.click(screen.getByTestId('next-button'));

    expect(screen.getByText('Test Movie 13')).toBeInTheDocument();
    expect(screen.getByText('Test Movie 14')).toBeInTheDocument();
    expect(screen.getByText('Test Movie 15')).toBeInTheDocument();
    expect(screen.getByTestId('prev-button')).toBeEnabled();
    expect(screen.getByTestId('next-button')).toBeDisabled();

    fireEvent.click(screen.getByTestId('prev-button'));
    expect(screen.getByText('2001: A Space Odyssey')).toBeInTheDocument();
    expect(screen.queryByText('Test Movie 13')).not.toBeInTheDocument();
  });

  test('handles direct page number clicks', () => {
    render(<Movie movies={extendedMockMovies} />);

    expect(screen.getByTestId('page-number-1')).toBeInTheDocument();
    expect(screen.getByTestId('page-number-2')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('page-number-2'));

    expect(screen.getByText('Test Movie 13')).toBeInTheDocument();
    expect(screen.queryByText('2001: A Space Odyssey')).not.toBeInTheDocument();

    expect(screen.getByTestId('page-number-2')).toHaveClass('active');
    expect(screen.getByTestId('page-number-1')).not.toHaveClass('active');
  });

  test('filters movies by title search term', async () => {
    render(<Movie movies={extendedMockMovies} />);

    const searchInput = screen.getByTestId('movie-search');
    await userEvent.type(searchInput, 'Ace Ventura');

    expect(
      screen.getByText('Ace Ventura: When Nature Calls')
    ).toBeInTheDocument();
    expect(screen.queryByText('2001: A Space Odyssey')).not.toBeInTheDocument();
    expect(screen.queryByText('Against All Odds')).not.toBeInTheDocument();
  });

  test('filters movies by type', async () => {
    render(<Movie movies={extendedMockMovies} />);

    const searchInput = screen.getByTestId('movie-search');
    await userEvent.type(searchInput, 'movie');

    expect(screen.getByText('2001: A Space Odyssey')).toBeInTheDocument();
    expect(
      screen.getByText('Ace Ventura: When Nature Calls')
    ).toBeInTheDocument();
    expect(screen.getByText('Against All Odds')).toBeInTheDocument();
  });

  test('filters movies by rating', async () => {
    render(<Movie movies={extendedMockMovies} />);

    const searchInput = screen.getByTestId('movie-search');
    await userEvent.type(searchInput, '8.3');

    expect(screen.getByText('2001: A Space Odyssey')).toBeInTheDocument();
    expect(
      screen.queryByText('Ace Ventura: When Nature Calls')
    ).not.toBeInTheDocument();
    expect(screen.queryByText('Against All Odds')).not.toBeInTheDocument();
  });

  test('shows no results message when no movies match search', async () => {
    render(<Movie movies={extendedMockMovies} />);

    const searchInput = screen.getByTestId('movie-search');
    await userEvent.type(searchInput, 'xyzabc123');

    expect(screen.getByTestId('no-results')).toBeInTheDocument();
    expect(screen.queryByTestId('movie-list')).not.toBeInTheDocument();
    expect(screen.queryByTestId('pagination')).not.toBeInTheDocument();
  });

  test('opens movie dialog when clicking on a movie', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: [mockMovieDetail] });

    render(<Movie movies={extendedMockMovies} />);

    fireEvent.click(screen.getByTestId('arrow-right-207856'));

    await waitFor(() => {
      const movieDialog = screen.getByTestId('movie-dialog');
      expect(movieDialog).toBeInTheDocument();
      expect(
        within(movieDialog).getByText('2001: A Space Odyssey')
      ).toBeInTheDocument();
    });

    expect(mockedAxios.get).toHaveBeenCalledWith(
      'http://localhost:3000/movies/207856'
    );
  });
});
