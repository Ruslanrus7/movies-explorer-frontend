import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import AuthLink from '../AutchLink/AuthLink';
import {Link} from 'react-router-dom';

export default function Header(props) {

  const [isMenuOpen, SenIsMenuOpen] = React.useState(false)

  function toggleMenu () {
     SenIsMenuOpen(!isMenuOpen);
  }

  return (

    <header className={`header page__header ${isMenuOpen ? "header__menu-open": ' '}`}>
      <Link to="/" className="header__logo"/>
      {props.loggedIn && <button className='header__burger' onClick={toggleMenu}/>}
      {props.loggedIn && <Navigation />}
      {!props.loggedIn && <AuthLink />}
    </header>
  )
}
