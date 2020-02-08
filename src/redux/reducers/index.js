const initialState = {
  books: [],
  isLoading: true,
  error: false,
  cartItems: [],
  orderTotal: 220
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

      let newItem;

      if (item) {
        newItem = {
          ...item,
          count: item.count + 1,
          total: item.total + book.price
        }
      } else {
        newItem = {
          id: book.id,
          title: book.title,
          count: 1,
          total: book.price
        };
      }

      if (itemIndex < 0) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            newItem
          ]
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIndex),
            newItem,
            ...state.cartItems.slice(itemIndex + 1)
          ]
        }
      }


    default:
      return state;

  }
};

export default reducer;
