const booksLoaded = (newBooks) => ({
  type: 'BOOKS_LOADED',
  payload: newBooks,
});

const booksRequested = () => ({
  type: 'BOOKS_REQUESTED'
});

const hasError = () => ({
  type: 'HAS_ERROR'
});

export {
  booksLoaded,
  booksRequested,
  hasError
};
