import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function SavedMovies ({savedMovies, onDeleteMovie}) {

  const [isSearchMovie, setIsSearchMovie] = React.useState('');
  const [isCheck, setIsCheck] = React.useState(false);
  const [isFilteredMovies, setIsFilteredMovies] = React.useState(savedMovies);

  const filterMovies = React.useCallback((search, isCheck, movies) => {
    setIsSearchMovie(search);
    setIsFilteredMovies(movies.filter((movie) => {
      const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase());
      return isCheck ? (searchName && movie.duration <= 40) : searchName;
    }));
  }, []);

  React.useEffect(() => {
    filterMovies(isSearchMovie, isCheck, savedMovies);
  }, [filterMovies, savedMovies, isCheck, isSearchMovie]);

  function searchMovies(search) {
    filterMovies(search, isCheck, savedMovies);
  };

  function changeCheckShorts () {
    if (isCheck) {
      setIsCheck(false);
      filterMovies(isSearchMovie, false, savedMovies);
    } else {
      setIsCheck(true);
      filterMovies(isSearchMovie, true, savedMovies);
    }
  };

  return (
    <>
      <Header />
      <main className='main-saved-movies page__main-saved-movies'>
        <SearchForm isCheck={isCheck} searchMovies={searchMovies} isSearchMovie={isSearchMovie} savedMovies={savedMovies} changeCheckShorts={changeCheckShorts}/>
        <MoviesCardList movies={isFilteredMovies} onDeleteMovie={onDeleteMovie} savedMovies={savedMovies} />
      </main>
      <Footer />
    </>
  )
}
