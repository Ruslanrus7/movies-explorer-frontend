import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import {Link} from 'react-router-dom';

export default function Login () {
  return (
    <main>
      <AuthForm title='Рады видеть!' name='login'>
        <label className='auth__label'>
          <span className='auth__input-text'>E-mail</span>
          <input className='auth__input' type='email' placeholder='Email' required/>
          <span className="auth__input-error input-emailuser-error"></span>
        </label>
        <label className='auth__label'>
          <span className='auth__input-text'>Пароль</span>
          <input className='auth__input' type='password' placeholder='Password' minLength={2} maxLength={30} required/>
          <span className="auth__input-error input-password-error"></span>
          </label>
          <button className='auth__form-button auth__form-button_type_login' type="submit">Войти</button>
          <p className='auth__link-text'>Ещё не зарегистрированы? <Link className='auth__link' to="/signup">Регистрация</Link></p>
      </AuthForm>
    </main>
  )
}
