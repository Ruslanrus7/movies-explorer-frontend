export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const getResponseData = (res) => {
  if(res.ok) {
    return res.json()
  }

  return Promise.reject(`Ошибка: ${res.status}`)
}

export const getInitialCards = () => {
  return fetch(`${BASE_URL}`)
  .then(getResponseData)
}
