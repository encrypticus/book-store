const booksLoaded = (newBooks) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: newBooks,
});

const booksRequested = () => ({
  type: 'FETCH_BOOKS_REQUEST'
});

const hasError = () => ({
  type: 'FETCH_BOOKS_FAILURE'
});

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

const subtractItem = (bookId) => {
  return {
    type: 'SUBTRACT_ITEM',
    payload: bookId
  };
};

const bookDeletedFromCart = (bookId) => {
  return {
    type: 'BOOK_DELETED_FROM_CART',
    payload: bookId
  };
};

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested());

  bookstoreService.getToken().then((token) => {
    bookstoreService.getBooks(`https://redux-app-91c13.firebaseio.com/data.json?auth=${token}`)
      .then(data => dispatch(booksLoaded(data)))
      .catch(error => dispatch(hasError()));
  });
};

export {
  fetchBooks,
  bookAddedToCart,
  subtractItem,
  bookDeletedFromCart
};
