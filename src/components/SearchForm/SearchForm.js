import React from 'react';
import './SearchForm.css';

export default function SearchForm () {
  return (
    <section className='search page__search'>
      <form className='search-form' action='#'>
        <input className='search-form__input' type="text" name="search" placeholder='Фильм'/>
        <button className='search-form__button' type='submit' />
        <label className='checkbox'>
            <input className='checkbox__input' type='checkbox' name="checkbox"/>
            <span className='checkbox__icon'></span>
            <p className='checkbox__text'>Короткометражки</p>
        </label>
      </form>
    </section>
  )
}
