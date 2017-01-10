// The initial state of the App
const initialState = {
  document: null,
  question: null
};

function current(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_DOCUMENT':
      return {
        ...state,
        document: action.document
      };
    case 'SET_CURRENT_QUESTION':
      return {
        ...state,
        question: action.question
      };
    default:
      return state;
  }
}

export default current;
