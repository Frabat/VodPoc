import React, {useState} from 'react';
import { STRIP_ENDPOINT, QUERY_ENDPOINT } from '../constants/Constants';

export default class Services {
getConfig() {

  return fetch(STRIP_ENDPOINT)
  .then(response => response.json())
  // .then(responseJson => { 
    
  //   //     console.log("Hey")
  //   //   console.log(responseJson.id);
  //   //   console.log(responseJson.content[0].layers.configuration.config[0].sectionName)
  //   return responseJson;
  // })
  
  .catch(error => {
    console.log('ERRORE');
    console.error(error);
  });
}

getElements(stripQuery){
  return fetch(QUERY_ENDPOINT+stripQuery).then(response=>response.json())
  .catch(error => {
    console.error(error)
  })
}

}

