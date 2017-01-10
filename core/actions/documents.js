import getDocumentsFromServer from '../lib/api.js';
import {setCurrentDocument} from './current.js';

function getDocuments(){
  return dispatch => {
    dispatch({
      type: 'FETCH_DOCUMENTS',
    });
    dispatch(loadDocuments());
  }
}

function loadDocuments(){
  return dispatch => {
    getDocumentsFromServer().then((documents) =>{
      dispatch({
        type: 'LOAD_DOCUMENTS',
        documents: documents
      });
      if(documents.length>0){
        dispatch(setCurrentDocument(documents[0]));
      }
    });
  }
}


export default getDocuments;
