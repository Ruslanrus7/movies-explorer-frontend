import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList () {

  let location = window.location.pathname;

  return (
    <section className='movies'>
      <div className='movies__container'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      {location === '/movies' && <button className='movies__button' type="button">Еще</button>}
    </section>
  )
}
