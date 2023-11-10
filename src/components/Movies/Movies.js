import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import * as MoviesApi from '../../utils/MoviesApi';

export default function Movies ({onSaveMovie, savedMovies}) {

  const [isFilteredMovies, setIsFilteredMovies] = React.useState([]);
  const [isSearchMovie, setIsSearchMovie] = React.useState('');
  const [loading, SetLoading] = React.useState(false);
  const [isMovies, setIsMovies] = React.useState([]);
  const [serverError, setServerError] = React.useState(false);
  const [isCheck, setIsCheck] = React.useState(false);
  const [isFirstSearch, setIsFirstSearch] = React.useState(false);

  const filterMovies = React.useCallback((search, isCheck, movies) => {
    localStorage.setItem('checkShorts', JSON.stringify(isCheck));
    localStorage.setItem('movies', JSON.stringify(movies));
    localStorage.setItem('search', JSON.stringify(search));
    setIsSearchMovie(search);
    setIsFilteredMovies(movies.filter((movie) => {
      const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
      return isCheck ? (searchName && movie.duration <= 40) : searchName
    }));
  }, []);

  function searchMovies (search) {
    if (isMovies.length === 0) {
      SetLoading(true)
      MoviesApi.getInitialCards()
        .then((movies) => {
          setIsCheck(false);
          setServerError(false);
          setIsFirstSearch(true);
          filterMovies(search, isCheck, movies);
          setIsMovies(movies);
        })
        .catch((err) => {
          setServerError(
            (err && "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз")
          );
          console.log(`Ошибка при поиске фильмов ${err}`)
        })
        .finally(()=> {
          SetLoading(false)
        })
    } else {
      setIsFirstSearch(true)
      filterMovies(search, isCheck, isMovies)
    }
  };

  React.useEffect(() => {

    if (localStorage.search && localStorage.checkShorts &&  localStorage.movies) {
      const search = JSON.parse(localStorage.search);
      const isCheck = JSON.parse(localStorage.checkShorts);
      const movies = JSON.parse(localStorage.movies);
      setServerError(false);
      setIsSearchMovie(search);
      setIsCheck(isCheck);
      setIsMovies(movies);
      filterMovies(search, isCheck, movies);
    }
  }, [filterMovies]);

  function changeCheckShorts () {
    if (isCheck) {
      setIsCheck(false);
      filterMovies(isSearchMovie, false, isMovies);
    } else {
      setIsCheck(true);
      filterMovies(isSearchMovie, true, isMovies);
    }
  };


  return (
    <>
      <Header />
      <main className='main-movies page__main-movies'>
        <SearchForm isCheck={isCheck} searchMovies={searchMovies} savedMovies={savedMovies}  isSearchMovie={isSearchMovie} changeCheckShorts={changeCheckShorts}/>
        <MoviesCardList movies={isFilteredMovies} onSaveMovie={onSaveMovie} savedMovies={savedMovies} loading={loading} serverError={serverError} isFirstSearch={isFirstSearch}/>
      </main>
      <Footer />
    </>
  )
};
