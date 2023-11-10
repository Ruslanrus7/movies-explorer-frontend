import React from 'react';
import './AuthForm.css';
import {Link} from 'react-router-dom'

function AuthForm (props) {

  return (
    <section className='auth page__auth'>
      <div className='auth__box'>
        <Link className='auth__link-logo' to="/" />
        <h1 className='auth__title'>{props.title}</h1>
        <form className='auth__form' action='#' name={`${props.name}-form`} onSubmit={props.onSubmit} noValidate>
          {props.children}
        </form>
      </div>
    </section>
  )
}

export default AuthForm;
