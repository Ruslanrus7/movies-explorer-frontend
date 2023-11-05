import React from 'react';
import './Profile.css';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';

export default function Profile ({loggedIn}) {

const  [isCheck, SitIsCheck] = React.useState(false);

  function handleCheck () {
    SitIsCheck(!isCheck)
  }

  return (
    <main>
      <Header loggedIn={loggedIn} />
      <section className='profile page__profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form' action='#' name='profile-form'>
          <label className='profile__label'>
            <p className='profile__input-text'>Имя</p>
            <input className='profile__input' type='text' placeholder='Name' disabled={!isCheck} minLength={2} maxLength={30}/>
          </label>
          <label className='profile__label'>
            <p className='profile__input-text'>E-mail</p>
            <input className='profile__input' type='email' placeholder='Email' disabled={!isCheck}/>
          </label>
          {isCheck ?
          <>
            <span className="prifile__error"></span>
            <button className='profile__button-submit' type="submit">Сохранить</button>
          </>
          :
          <>
            <button className='profile__button' onClick={handleCheck} type="button">Редактировать</button>
            <Link className='profile__link' to='/'>Выйти из аккаунта</Link>
          </>
          }
        </form>
      </section>
    </main>
  )
}
