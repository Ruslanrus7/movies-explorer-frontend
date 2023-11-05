import React from 'react';
import './AuthForm.css';

function AuthForm (props) {

  return (
    <section className='auth page__auth'>
      <div className='auth__box'>
        <a className='auth__link-logo' href="/" />
        <h1 className='auth__title'>{props.title}</h1>
        <form className='auth__form' action='#' name={`${props.name}-form`} onSubmit={props.onSubmit}>
          {props.children}
        </form>
      </div>
    </section>
  )
}

export default AuthForm;
