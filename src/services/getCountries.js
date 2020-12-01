import { API_URL } from './config'

export default function getCountries() {
  return fetch(`${API_URL}/all`)
    .then(res => res.json())
    .then(allCountries => allCountries)
    .catch(error => console.log(error))
}
