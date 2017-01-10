import getDocumentsFromServer from '../lib/api.js';

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
    });
  }
}


export default getDocuments;
