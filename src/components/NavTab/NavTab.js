import React from 'react';
import './NavTab.css';

export default function NavTab () {
  return (
    <nav className='nav-tab page__nav-tab'>
      <ul className='nav-tab__links'>
        <li>
          <a href="#project" className='nav-tab__link'>О проекте</a>
        </li>
        <li>
          <a href="#techs" className='nav-tab__link'>Технологии</a>
        </li>
        <li>
          <a href="#about-me" className='nav-tab__link'>Студент</a>
        </li>
      </ul>
    </nav>
  )
}
