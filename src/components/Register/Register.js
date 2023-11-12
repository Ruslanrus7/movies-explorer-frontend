import React from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import {Link, useNavigate} from 'react-router-dom';
import * as auth from '../../utils/auth';
import FormWithValidation from '../FormWithValidation/FormWithValidation';
import { EmailPattern } from '../../utils/constants';

export default function Register ({setLoggedIn}) {

  const navigate = useNavigate()
  const {values, errors, isValid, handleChange} = FormWithValidation();
  const [serverError, setServerError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();

    if(!values.email || !values.password) {
      return
    }

    auth.register(values.name, values.email, values.password)
    .then(res => {
      console.log(res)
      setLoading(false)
      setServerError(null)
      navigate('/movies', {replace: true});
      auth.authorize(values.email, values.password)
      .then(data => {
        if (data.token) {
          setLoggedIn(true)
        }})
      .catch(err => {
        setServerError(
          (err  &&  "При авторизации пользователя произошла ошибка")
          )
      })

    })
    .catch(err => {
    console.log(err)
    setLoading(false)
    setServerError(
      (err === 'Ошибка: 409' &&  "Пользователь с таким email уже существует") ||
      (err  &&  "При регистрации пользователя произошла ошибка")
      )
  });
  }


  return (
    <main>
      <AuthForm title='Добро пожаловать!' name='register' onSubmit={handleSubmit}>
        <label className='auth__label'>
          <span className='auth__input-text'>Имя</span>
          <input className='auth__input' value={values.name || ''} onChange={handleChange} type='text' placeholder='Name' name="name" id="name" minLength={2} maxLength={30} required/>
          <span className="auth__input-error input-nameuser-error">{errors.name}</span>
        </label>
        <label className='auth__label'>
          <span className='auth__input-text'>E-mail</span>
          <input className='auth__input' value={values.email || ''} onChange={handleChange} type='email' placeholder='Email' name="email" id="email" required pattern={EmailPattern}/>
          <span className="auth__input-error input-emailuser-error">{errors.email}</span>
        </label>
        <label className='auth__label'>
          <span className='auth__input-text'>Пароль</span>
          <input className='auth__input' value={values.password || ''} onChange={handleChange} type='password' placeholder='Password' name="password" id="password" minLength={8} maxLength={30} required/>
          <span className="auth__input-error input-password-error">{errors.password}</span>
          </label>
          <span className="auth__sever-error input-password-error">{serverError}</span>
          <button className={isValid ? 'auth__form-button': 'auth__form-button auth__form-button_disabled'} type="submit" disabled={!isValid}>{loading ? "Зарегистрироваться..." : "Зарегистрироваться"}</button>
          <p className='auth__link-text'>Уже зарегистрированы? <Link className='auth__link' to='/signin'>Войти</Link></p>
      </AuthForm>
    </main>
  )
}

