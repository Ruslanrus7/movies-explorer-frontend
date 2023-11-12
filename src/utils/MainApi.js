class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _getResponseData (res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // загрузка карточек с сервера
  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(this._getResponseData)
  }

  // загрузка информации о пользователе
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(this._getResponseData)
  }

  //редактирование профиля
  patchUserInfo(userInfo) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo),
      method: 'PATCH',
    })
    .then(this._getResponseData)
  }

  deleteMovie (cardId) {
    return fetch(`${this._baseUrl}/movies/${cardId}`, {
      headers:  {
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      method: 'DELETE',
    })
    .then(this._getResponseData)
  }

  addMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers:  {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        director: data.director,
        duration: data.duration,
        year: data.year,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${data.image.formats.thumbnail.url}`,
        nameEN: data.nameEN,
        movieId: data.id,
        nameRU: data.nameRU,
        image: `https://api.nomoreparties.co/${data.image.url}`,
        country: data.country,
        description: data.description,
      })
    })
    .then(this._getResponseData)
}
}


const api = new MainApi({
  baseUrl: 'https://api.movieworld.nomoredomainsrocks.ru',
});

export default api;
