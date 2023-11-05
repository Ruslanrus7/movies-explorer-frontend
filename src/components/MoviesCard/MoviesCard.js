import React from 'react';
import './MoviesCard.css';
import movies from "../../images/movies.jpg"

export default function MoviesCard (props) {

  let location = window.location.pathname;

  return (
    <li className="movies__card">
      <img className="movies__card-image" src={movies} alt={props.name}/>
      <div className="movies__card-info">
        <div className="movies__card-info-box">
          <h2 className="movies__card-text">33 слова о дизайне</h2>
          <p className='movies__card-time'>1ч 47м</p>
        </div>
        {location === '/movies' ?  <button className="movies__card-btn" type="button" />: <button className="movies__card-delet" type="button" />}
      </div>
    </li>
  )
}
