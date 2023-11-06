import React from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import {Link} from 'react-router-dom';

export default function Register () {
  return (
    <main>
      <AuthForm title='Добро пожаловать!' name='register'>
        <label className='auth__label'>
          <span className='auth__input-text'>Имя</span>
          <input className='auth__input' type='text' placeholder='Name' minLength={2} maxLength={30} required/>
          <span className="auth__input-error input-nameuser-error"></span>
        </label>
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
          <button className='auth__form-button' type="submit">Зарегистрироваться</button>
          <p className='auth__link-text'>Уже зарегистрированы? <Link className='auth__link' to='/signin'>Войти</Link></p>
      </AuthForm>
    </main>
  )
}
