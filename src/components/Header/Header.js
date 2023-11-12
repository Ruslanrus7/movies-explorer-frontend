import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import AuthLink from '../AutchLink/AuthLink';
import {Link} from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

export default function Header() {

  const {loggedIn} = React.useContext(CurrentUserContext);


  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  function toggleMenu () {
     setIsMenuOpen(!isMenuOpen);
  }

  return (

    <header className={`header page__header ${isMenuOpen ? "header_menu_open": ' '}`}>
      <Link to="/" className="header__logo"/>
      {loggedIn && <button className='header__burger' type="button" onClick={toggleMenu}/>}
      {loggedIn && <Navigation />}
      {!loggedIn && <AuthLink />}
    </header>
  )
}
