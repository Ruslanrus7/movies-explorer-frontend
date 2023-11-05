import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList () {

  let location = window.location.pathname;

  return (
    <section className='movies'>
      <ul className='movies__container'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      {location === '/movies' && <button className='movies__button' type="button">Еще</button>}
    </section>
  )
}
