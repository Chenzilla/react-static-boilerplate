
function setCurrentDocument(document){
  console.log("SET_CURRENT_DOCUMENT");
  return dispatch => {
    dispatch({
      type: 'SET_CURRENT_DOCUMENT',
      document: document
    });
    if(document.questions.length>0){
      dispatch(setCurrentQuestion(document.questions[0]));
    }
  }
}

function setCurrentQuestion(question){
  return {
    type: 'SET_CURRENT_QUESTION',
    question: question
  };
}

export {setCurrentDocument, setCurrentQuestion};
