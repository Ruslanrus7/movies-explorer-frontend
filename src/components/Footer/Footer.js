import React from 'react';
import './Footer.css';

export default function Footer () {

  return(
      <footer className='footer page__footer'>
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__box'>
          <p className='footer__copyright'>&copy;2023</p>
          <ul className='footer__links'>
            <li>
              <a className='footer__link' href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a>
            </li>
            <li>
              <a className='footer__link' href="https://github.com/Ruslanrus7" target="_blank">Github</a>
            </li>
          </ul>
        </div>
      </footer>
    )
}
