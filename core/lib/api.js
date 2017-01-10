'use strict';

export default function getDocumentsFromServer(){
  //TODO: actually call an API
  return new Promise(function(resolve, reject) {
    resolve([{
      id:1,
      text:"Test test test",
      questions:[]
    }]);
  });
}
