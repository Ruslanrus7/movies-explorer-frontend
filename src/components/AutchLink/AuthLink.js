import React from 'react';
import {Link} from 'react-router-dom';

export default function AuthLink () {
  return (
    <nav className="header__profile">
      <Link to='/signup' className='header__profile-register'>Регистрация</Link>
      <Link to='/signin' className='header__profile-entry'>Войти</Link>
    </nav>
  )
}
