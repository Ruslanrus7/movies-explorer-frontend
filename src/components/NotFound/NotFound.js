import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound () {
  return (
    <section className='not-found page__not-found'>
      <div className='not-found__box'>
        <h2 className='not-found__title'>404</h2>
        <p className='not-found__text'>Страница не найдена</p>
        <Link className='not-found__link' to='/'>Назад</Link>
      </div>
    </section>
  )
}
