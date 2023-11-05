import React from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import {Link} from 'react-router-dom';

export default function Register () {
  return (
    <AuthForm title='Добро пожаловать!' name='register'>
      <label className='auth__label'>
        <p className='auth__input-text'>Имя</p>
        <input className='auth__input' type='text' />
        <span className="auth__input-error input-nameuser-error"></span>
      </label>
      <label className='auth__label'>
        <p className='auth__input-text'>E-mail</p>
        <input className='auth__input' type='email' />
        <span className="auth__input-error input-emailuser-error"></span>
      </label>
      <label className='auth__label'>
        <p className='auth__input-text register__input-text_indent'>Пароль</p>
        <input className='auth__input' type='password' />
        <span className="auth__input-error input-password-error"></span>
        </label>
        <button className='auth__form-button'>Зарегистрироваться</button>
        <p className='auth__link-text'>Уже зарегистрированы? <Link className='auth__link' to='/signin'>Войти</Link></p>
    </AuthForm>
  )
}
