import React from 'react';
import './Portfolio.css';
import Strelka from '../../images/strelka.svg'

export default function Portfolio () {
  return (
    <section className='portfolio page__portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="https://github.com/Ruslanrus7/how-to-learn" target="_blank">
            <p className='portfolio__text'>Статичный сайт</p>
            <img className='portfolio__image' src={Strelka} alt='стрелка'/>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="https://github.com/Ruslanrus7/russian-travel" target="_blank">
            <p className='portfolio__text'>Адаптивный сайт</p>
            <img className='portfolio__image' src={Strelka} alt='стрелка'/>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="https://github.com/Ruslanrus7/react-mesto-api-full-gha" target="_blank">
            <p className='portfolio__text'>Одностраничное приложение</p>
            <img className='portfolio__image' src={Strelka} alt='стрелка'/>
          </a>
        </li>
      </ul>
    </section>
  )
}
