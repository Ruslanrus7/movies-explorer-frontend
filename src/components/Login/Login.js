import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import {Link} from 'react-router-dom';

export default function Login () {
  return (
    <main>
      <AuthForm title='Рады видеть!' name='login'>
        <label className='auth__label'>
          <p className='auth__input-text'>E-mail</p>
          <input className='auth__input' type='email' placeholder='Email'/>
          <span className="auth__input-error input-emailuser-error"></span>
        </label>
        <label className='auth__label'>
          <p className='auth__input-text'>Пароль</p>
          <input className='auth__input' type='password' placeholder='Password' minLength={2} maxLength={30}/>
          <span className="auth__input-error input-password-error"></span>
          </label>
          <button className='auth__form-button auth__form-button_type_login' type="submit">Войти</button>
          <p className='auth__link-text'>Ещё не зарегистрированы? <Link className='auth__link' to="/signup">Регистрация</Link></p>
      </AuthForm>
    </main>
  )
}
