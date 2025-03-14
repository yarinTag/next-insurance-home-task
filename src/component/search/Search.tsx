import React from 'react';

const Search: React.FC<{
  searchTerm: string;
  callFn: (value: string) => void;
}> = ({ searchTerm, callFn }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    callFn(e.target.value);
  };
  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder='Search by title, rating, or type...'
        value={searchTerm}
        onChange={handleSearchChange}
        className='search-input'
        data-testid='movie-search'
      />
    </div>
  );
};

export default Search;
