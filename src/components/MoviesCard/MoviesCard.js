import React from 'react';
import './MoviesCard.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import toHoursAndMinutes from '../../utils/toHoursAndMinutes';

export default function MoviesCard ({card, savedMovies, onSaveMovie, onDeleteMovie}) {

  const [isLike, setIsLike] = React.useState(false);
  let {location} = React.useContext(CurrentUserContext);


  React.useEffect(() => {
    (location === '/movies') && setIsLike(savedMovies.some(element => card.id === element.movieId));
  }, [savedMovies, card.id, setIsLike, location])

  function buttonClick () {
    if (savedMovies.some(element => card.id === element.movieId)) {
      setIsLike(true)
      onSaveMovie(card)
    } else {
      onSaveMovie(card)
      setIsLike(false)
    }
  }

  return (
    <li className="movies__card">
      <a className='movies__link' href={card.trailerLink} target="_blank"><img className="movies__card-image" src={(location === '/saved-movies') ? card.image : `https://api.nomoreparties.co/${card.image.url}`} alt={card.nameRU}/></a>
      <div className="movies__card-info">
        <div className="movies__card-info-box">
          <h2 className="movies__card-text">{card.nameRU}</h2>
          <p className='movies__card-time'>{toHoursAndMinutes(card.duration)}</p>
        </div>
        {location === '/movies' ?  <button className={isLike ?"movies__card-btn movies__card-btn_active" : "movies__card-btn"} type="button" onClick={buttonClick} />: <button className="movies__card-delet" type="button" onClick={()=> onDeleteMovie(card._id)}/>}
      </div>
    </li>
  )
}
