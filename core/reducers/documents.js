// The initial state of the App
const initialState = {
  loading: false,
  documents: [],
};

function documents(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DOCUMENTS':
      return {
        ...state,
        loading: true
      };
    case 'LOAD_DOCUMENTS':
      return {
        ...state,
        loading: false,
        documents: action.documents
      };
    default:
      return state;
  }
}

export default documents;
