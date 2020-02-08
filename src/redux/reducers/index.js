const initialState = {
  books: [],
  isLoading: true,
  error: false,
  cartItems: [],
  orderTotal: 220
};

const updateCartItems = (cartItems, item, index) => {
  if (index < 0) {

    return [
      ...cartItems,
      item
    ];

  } else {

    return [
      ...cartItems.slice(0, index),
      item,
      ...cartItems.slice(index + 1)
    ];

  }
};

const updateCartItem = (book, item) => {
  if (item) {

    return {
      ...item,
      count: item.count + 1,
      total: item.total + book.price
    };

  } else {

    return {
      id: book.id,
      title: book.title,
      count: 1,
      total: book.price
    };

  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        isLoading: true,
        error: false
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        isLoading: false,
        error: false
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: true
      };

    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload;
      const book = state.books.find((book) => book.id === bookId);
      const itemIndex = state.cartItems.findIndex(item => item.id === bookId);
      const item = state.cartItems[itemIndex];

      let newItem = updateCartItem(book, item);

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
      };


    default:
      return state;

  }
};

export default reducer;
