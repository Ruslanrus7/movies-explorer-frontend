import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';

export default function MoviesCardList ({movies, serverError, onDeleteMovie, onSaveMovie, savedMovies, loading, isFirstSearch}) {

  const [isCounter, setIsCounter] = React.useState('');
  let {location} = React.useContext(CurrentUserContext);
  const rowMovies = movies.slice(0, isCounter);

  function displayCards() {
    const counter = {cards: 12, result: 3}
    if (window.innerWidth < 1280) {
      counter.cards = 8;
      counter.result = 2;
    }
    if (window.innerWidth < 771) {
      counter.cards = 5;
      counter.result = 2;
    };
    return counter;
  };

  React.useEffect(() => {

    if (location === '/movies') {

      setIsCounter(displayCards().cards)

      function displayCardsResize() {
        if(window.innerWidth >= 1280) {
          setIsCounter(displayCards().cards)
        }
        if (window.innerWidth < 1280) {
          setIsCounter(displayCards().cards)
        }
        if (window.innerWidth < 771) {
          setIsCounter(displayCards().cards)
        }
      };

      window.addEventListener('risize', displayCardsResize);

      return () => {window.removeEventListener('risize', displayCardsResize)};
    };
  }, [location, movies]);

  function clickButtonMore () {
    setIsCounter(isCounter + displayCards().result)
  };


  return (

    <section className='movies'>
        <ul className='movies__container'>
          { loading ? <Preloader /> :
          (location === '/movies' && movies.length !== 0) ?
            rowMovies.map((card) => {
            return <MoviesCard key={card.id} card={card} onSaveMovie={onSaveMovie} savedMovies={savedMovies}/>
          })
          : movies.length !== 0 ?
            movies.map(card => {
              return (<MoviesCard key={card._id} card={card} onDeleteMovie={onDeleteMovie} savedMovies={savedMovies}/>)
            }) : (isFirstSearch || serverError) &&
            <span className='movies__message'>{serverError ? serverError :'Ничего не найдено...'}</span>
          }
        </ul>
      {(location === '/movies' && rowMovies.length !== movies.length) && <button className='movies__button' type="button" onClick={clickButtonMore}>Еще</button>}
    </section>
  )
}
