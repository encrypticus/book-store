const updatebookList = (state, action) => {

  if (state === undefined) {
    return {
      books: [],
      isLoading: true,
      error: false
    };
  }

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        books: [],
        isLoading: true,
        error: false
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        books: action.payload,
        isLoading: false,
        error: false
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        books: [],
        isLoading: false,
        error: true
      };

    default:
      return state.bookList;
  }
};

export default updatebookList;
