import axios from 'axios';

export default function getCity(lat, lng) {
 return axios.get(`https://geo.api.gouv.fr/communes?lat=${lat}&lon=${lng}&fields=nom&format=json&geometry=centre`)
  .then((response) => {
    // handle success
    return response?.data[0].nom
  })
  .catch((error) => {
    // handle error
    return null;
  });
}