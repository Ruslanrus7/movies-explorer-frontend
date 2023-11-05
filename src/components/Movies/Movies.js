import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Movies ({loggedIn}) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main className='main-movies page__main-movies'>
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  )
}