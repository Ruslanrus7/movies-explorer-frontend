import React from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import FormWithValidation from '../FormWithValidation/FormWithValidation';
import MainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { EmailPattern } from '../../utils/constants';
import ProfilePopup from '../ProfilePopup/ProfilePopup';

export default function Profile ({onEditUserInfo, setLoggedIn}) {

  const navigate = useNavigate();
  const {values, errors, isValid, handleChange, setValues} = FormWithValidation();
  const {currentUser} = React.useContext(CurrentUserContext);
  const [isCheck, SitIsCheck] = React.useState(false);
  const [serverError, setServerError] = React.useState('');
  const [loading, setLoading] = React.useState(false)
  const [popupOpened, setPopupOpened] = React.useState('')

  React.useEffect(()=> {
    setValues({name: currentUser.name, email: currentUser.email});
  }, [currentUser])


  function signOut () {
    localStorage.removeItem('jwt');
    localStorage.removeItem('checkShorts');
    localStorage.removeItem('movies');
    localStorage.removeItem('search');
    setLoggedIn(false)
    navigate('/', {replace: true});
  }


  function handleCheck () {
    SitIsCheck(!isCheck)
  }

  function handleSubmit (e) {
    setLoading(true)
    e.preventDefault();

    MainApi.patchUserInfo(values)
    .then(res => {
      onEditUserInfo(res)
      setServerError('')
      setLoading(false)
      setPopupOpened('popup_opened')
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
      setServerError(
        (err === 'Ошибка: 409' &&  "Пользователь с таким email уже существует") ||
        (err === 'Ошибка: 400' &&  "неправильно введен email") ||
        (err  &&  "При обновлении профиля произошла ошибка")
      )
    })
    .finally(() => {
      setLoading(false)
    })
  }

  function handlePopup () {
    setPopupOpened('')
  }

  return (
    <>
      <Header />
      <main>
        <ProfilePopup popupOpened={popupOpened} handlePopup={handlePopup}/>
        <section className='profile page__profile'>
          <h1 className='profile__title'>{`Привет, ${currentUser.name}`}</h1>
          <form className='profile__form' action='#' name='profile-form'>
            <label className='profile__label'>
              <span className='profile__input-text'>Имя</span>
              <input className='profile__input' type='text' value={values.name || ''} placeholder='Name' name="name" onChange={handleChange} disabled={!isCheck} minLength={2} maxLength={30} required/>
            </label>
            <label className='profile__label'>
              <span className='profile__input-text'>E-mail</span>
              <input className='profile__input' type='email' value={values.email || ''} placeholder='Email' name="email" onChange={handleChange} disabled={!isCheck} required pattern={EmailPattern}/>
            </label>
            {isCheck ?
              <>
                <span className="prifile__error">{errors.name || errors.email || serverError}</span>
                <button className={(isValid && ((currentUser.name !== values.name) || (currentUser.email !== values.email))) ? 'profile__button-submit' : 'profile__button-submit profile__button-submit_disabled'}
                disabled={!(isValid && ((currentUser.name !== values.name) || (currentUser.email !== values.email)))}
                onClick={handleSubmit} type="submit">
                  {loading ? "Сохранить..." : "Сохранить"}
                </button>
              </>
              :
              <>
                <button className='profile__button' onClick={handleCheck} type="button">Редактировать</button>
                <button className='profile__link'  onClick={signOut}>Выйти из аккаунта</button>
              </>
            }
          </form>
        </section>
      </main>
  </>
  )
}
