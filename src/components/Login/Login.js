import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import * as auth from '../../utils/auth';
import {Link, useNavigate} from 'react-router-dom';
import FormWithValidation from '../FormWithValidation/FormWithValidation';
import { EmailPattern } from '../../utils/constants';

export default function Login ({setLoggedIn}) {


  const navigate = useNavigate();
  const {values, errors, isValid, handleChange, resetForm, setValues} = FormWithValidation();
  const [serverError, setServerError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    auth.authorize(values.email, values.password)
      .then(data => {
        if (data.token) {
          setLoading(false)
          setValues({email: '', password: ''})
          setLoggedIn(true)
          navigate('/movies', {replace: true});
        }
      })
      .catch(err => {
        console.log(err)
        setLoggedIn(false)
        setLoading(false)
        setServerError(
          (err === 'Ошибка: 401' &&  "Вы ввели неправильный логин или пароль") ||
          (err  &&  "При авторизации пользователя произошла ошибка")
        )
      })
      .finally(() => {setLoading(false)})
  }

  return (
    <main>
      <AuthForm title='Рады видеть!' name='login' onSubmit={handleSubmit}>
        <label className='auth__label'>
          <span className='auth__input-text'>E-mail</span>
          <input className='auth__input' value={values.email || ''} onChange={handleChange} name="email" id="email" type='email' placeholder='Email' required pattern={EmailPattern}/>
          <span className="auth__input-error input-emailuser-error">{errors.email}</span>
        </label>
        <label className='auth__label'>
          <span className='auth__input-text'>Пароль</span>
          <input className='auth__input' value={values.password || ''} onChange={handleChange} name="password" id="password" type='password' placeholder='Password' minLength={8} maxLength={30} required/>
          <span className="auth__input-error input-password-error">{errors.password}</span>
          </label>
          <span className="auth__sever-error input-password-error">{serverError}</span>
          <button className={isValid ? 'auth__form-button': 'auth__form-button auth__form-button_disabled'} type="submit" disabled={!isValid}>{loading ? "Войти..." : "Войти"}</button>
          <p className='auth__link-text'>Ещё не зарегистрированы? <Link className='auth__link' to="/signup">Регистрация</Link></p>
      </AuthForm>
    </main>
  )
}


