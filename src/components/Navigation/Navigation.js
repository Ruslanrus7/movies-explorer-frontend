import React from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation (props) {

  let location = window.location.pathname;

  return (
    <nav className='header__nav'>
      <ul className="header__nav-movies">
        <li className='header__nav-link-display'>
          <NavLink to="/" className={({isActive}) => `header__nav-link ${isActive ? "header__nav-link_active" : ""}`}>Главная</NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={({isActive}) => `header__nav-link ${isActive ? "header__nav-link_active" : ""}`}>Фильмы</NavLink>
        </li>
        <li>
          <NavLink to="/saved-movies" className={({isActive}) => `header__nav-link ${isActive ? "header__nav-link_active" : ""}`}>Сохранённые фильмы</NavLink>
        </li>
      </ul>
      <Link to='/profile' className={location === '/' ? 'header__profile-account header__profile-account_color' : 'header__profile-account'}><p className='header__profile-account-text'>Аккаунт</p></Link>
    </nav>
  )
}
