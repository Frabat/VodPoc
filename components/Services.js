import { QUERY_ENDPOINT, STRIP_ENDPOINT, VIDEO_ENDPOINT } from '../constants/Constants';

export default class Services {
  //chiamata al JSON principale (master- 244)
  getConfig() {
    return fetch(STRIP_ENDPOINT)
      .then(response => response.json())

      .catch(error => {
        console.error(error);
      });
  }
 //chiamata al JSON necessario per recuperare le categorie
  getElements(stripQuery) {
    return fetch(QUERY_ENDPOINT + stripQuery)
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
  }
  
  //chiamata che mostra il singolo titolo
  getTitle(videoId) {
    return fetch (VIDEO_ENDPOINT + videoId)
    .then(response => response.json())
    .catch (error => 
      console.error(error)
      )
  }
}
