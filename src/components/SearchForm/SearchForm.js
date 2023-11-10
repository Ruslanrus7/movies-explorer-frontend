import React from 'react';
import './SearchForm.css';
import FormWithValidation from '../FormWithValidation/FormWithValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';


export default function SearchForm ({isCheck, changeCheckShorts, searchMovies, isSearchMovie, savedMovies}) {

  const {location} = React.useContext(CurrentUserContext)
  const {values, errors, handleChange, resetForm, setErrors} = FormWithValidation();


  React.useEffect(() => {
    if ((location === '/saved-movies' && savedMovies.length === 0)) {
      resetForm({search: ''})
    } else {
      resetForm({search: isSearchMovie})
    }

  }, [isSearchMovie, resetForm, location, savedMovies])



  function onSubmit(e) {
    e.preventDefault()
    if (e.target.search.value) {
      searchMovies(e.target.search.value)
    } else {
      setErrors({search: 'Нужно ввести ключевое слово'})
    }
  }

  return (
    <section className='search page__search'>
      <form className='search-form' action='#' onSubmit={onSubmit} noValidate>
        <input className='search-form__input' type="text" name="search" placeholder='Фильм' required value={values.search || ''} onChange={handleChange} />
        <span className="search__error">{errors.search}</span>
        <button className='search-form__button' type='submit' />
        <label className='checkbox'>
            <input className={isCheck ? 'checkbox__input checkbox__input_active' : 'checkbox__input'} type='checkbox' name="checkbox" onChange={changeCheckShorts}/>
            <span className='checkbox__icon'></span>
            <span className='checkbox__text'>Короткометражки</span>
        </label>
      </form>
    </section>
  )
}
