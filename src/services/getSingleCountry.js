import { API_URL } from './config'

export default function getSingleCountry(capital){
  return fetch(`${API_URL}/capital/${capital}`)
    .then(data => data.json())
    .then(singleCountry => singleCountry)
    .catch(err => console.error(err))
}
