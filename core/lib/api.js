'use strict';

import {FakeServerCall} from './FakeServer';

export default function getDocumentsFromServer(){
  //TODO: actually call an API
  return new Promise(function(resolve, reject) {
    resolve(FakeServerCall());
  });
}
