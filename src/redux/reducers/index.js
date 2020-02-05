const initialState = {
  books: [],
  isLoading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'BOOKS_REQUESTED':
      return {
        books: [],
        isLoading: true,
        error: false
      };

    case 'BOOKS_LOADED':
      return {
        ...state,
        books: action.payload,
        isLoading: false,
      };

    case 'HAS_ERROR':
      return {
        ...state,
        isLoading: false,
        error: true
      };

    default:
      return state;

  }
};

export default reducer;
