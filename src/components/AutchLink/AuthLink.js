import React from 'react';
import {Link} from 'react-router-dom';

export default function AuthLink () {
  return (
    <div className="header__profile">
      <Link to='/signup' className='header__profile-register'>Регистрация</Link>
      <Link to='/signin' className='header__frofile-entry'>Войти</Link>
    </div>
  )
}
