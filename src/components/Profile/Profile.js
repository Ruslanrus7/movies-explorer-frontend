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
    <>
      <Header loggedIn={loggedIn} />
      <section className='profile page__profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form' action='#' name='profile-form'>
          <label className='profile__label'>
            <p className='profile__input-text'>Имя</p>
            <input className='profile__input' type='text' placeholder='Виталий' disabled={!isCheck}/>
          </label>
          <label className='profile__label'>
            <p className='profile__input-text'>E-mail</p>
            <input className='profile__input' type='email' placeholder='pochta@yandex.ru' disabled={!isCheck}/>
          </label>
          {isCheck ?
          <>
            <span className="prifile__error"></span>
            <button className='profile__button-submit'>Сохранить</button>
          </>
          :
          <>
            <button className='profile__button' onClick={handleCheck}>Редактировать</button>
            <Link className='profile__link' to='/signin'>Выйти из аккаунта</Link>
          </>
          }
        </form>
      </section>
    </>
  )
}
