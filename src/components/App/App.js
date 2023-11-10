import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import * as auth from '../../utils/auth';
import MainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRout/ProtectedRout';


function App() {
  let location = window.location.pathname;
  const [isCheckRegister, setIsCheckRegister] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const navigate = useNavigate();


  React.useEffect(() => {
    handleTokenCheck();
  }, []);

  React.useEffect(()=> {

    if (loggedIn) {

    Promise.all([MainApi.getUserInfo(), MainApi.getMovies()])
      .then(([dataUserInfo, dataInitialMovies]) => {
        setCurrentUser(dataUserInfo);
        setSavedMovies(dataInitialMovies.reverse());
        }
      )
      .catch(err => {
        console.log(`Ошибка: при загрузки данных ${err}`);
      })}
    }, [loggedIn]);



  function handleTokenCheck () {
    if(localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      auth.checkToken(jwt)
      .then(data => {
        setLoggedIn(true)
        setIsCheckRegister(false)
      }
      )
      .catch(err => {
        console.log(`Ошибка: ${err}`);
        setIsCheckRegister(false)
      })
    } else {
      setIsCheckRegister(false)
    }
  };

  function editUserInfo(userInfo) {
    setCurrentUser(userInfo)
  };

  function handleDeletMovie(movieId) {
    MainApi.deleteMovie(movieId)
      .then(() => {
        setSavedMovies(savedMovies.filter(movie => {return movie._id !== movieId}))
      })
      .catch((err) => {console.log(`Ошибка: при удалении ${err}`)})
  };

  function handleSaveMovie(card) {
    const addMovie = savedMovies.find(movie => card.id === movie.movieId)
    const filterSelectedMovie = savedMovies.filter((movie) => {
      return movie.movieId === card.id
    })
    if (addMovie) {
      handleDeletMovie(filterSelectedMovie[0]._id)
    } else {
      MainApi.addMovie(card)
        .then(res => {
          setSavedMovies([res, ...savedMovies])
        })
        .catch((err) => console.log(`Ошибка: при установке лайка ${err}`))
    }
  };


  return (
    <div className='page'>
      {isCheckRegister ? <Preloader /> :
      <CurrentUserContext.Provider value={{currentUser, loggedIn, location}}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<ProtectedRoute element={Movies} savedMovies={savedMovies} onSaveMovie={handleSaveMovie} loggedIn={loggedIn} />} />
          <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies} savedMovies={savedMovies} onDeleteMovie={handleDeletMovie} loggedIn={loggedIn}/>} />
          <Route path='/profile' element={<ProtectedRoute element={Profile} onEditUserInfo={editUserInfo} setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />
          <Route path='/signup' element={<Register setLoggedIn={setLoggedIn}/>} />
          <Route path='/signin' element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
      }
    </div>
  );
}

export default App;
