import { QUERY_ENDPOINT, STRIP_ENDPOINT } from '../constants/Constants';

export default class Services {
  getConfig() {
    return fetch(STRIP_ENDPOINT)
      .then(response => response.json())

      .catch(error => {
        console.error(error);
      });
  }

  getElements(stripQuery) {
    return fetch(QUERY_ENDPOINT + stripQuery)
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
  }
}
