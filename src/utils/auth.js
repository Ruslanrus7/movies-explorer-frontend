// export const BASE_URL = 'http://localhost:3000';
export const BASE_URL = 'https://api.movieworld.nomoredomainsrocks.ru';

const getResponseData = (res) => {
  if(res.ok) {
    return res.json()
  }

  return Promise.reject(`Ошибка: ${res.status}`)
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then( res =>
    getResponseData(res)
  )
  .then(data => {
    if(data.token) {
      localStorage.setItem('jwt', data.token);
      return data;
    }
  })
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then( res =>
    getResponseData(res)
  )
}

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'aplication/json',
      'Authorization': `Bearer ${token}`
    }
  })
  .then( res =>
    getResponseData(res)
  )
}

