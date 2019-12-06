import React, {useState} from 'react';
import {STRIP_ENDPOINT, QUERY_ENDPOINT} from '../constants/Constants';

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
