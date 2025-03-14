import React from 'react';

import './App.css';
import useFetch from './hook/useFetch';
import Movie from './component/movie/Movie';
import Paragraph from './component/paragraph';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import { IMovie } from './interface/movie.interface';
import { API_URL, MAIN_TEXT, socialIcons } from './utils';

function App() {
  const { data, loading } = useFetch<IMovie[]>(API_URL);

  return (
    <>
      <Header />
      <main className='Main'>
        {loading && <div style={{ textAlign: 'center' }}>Loading...</div>}
        {!loading && (
          <>
            <Paragraph text={MAIN_TEXT} />
            <Movie movies={data ?? []} />
          </>
        )}
      </main>
      <Footer socialIcons={socialIcons} />
    </>
  );
}

export default App;
