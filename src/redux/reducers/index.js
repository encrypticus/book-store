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
      const item = state.cartItems.findIndex(item => item.id === bookId);

      if (item < 0) {
        const newItem = {
          id: book.id,
          name: book.title,
          count: 1,
          total: book.price
        };

        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            newItem
          ]
        };
      } else {
        let clonedCartItems = [...state.cartItems];

        clonedCartItems[item] = {
          ...clonedCartItems[item],
          count: clonedCartItems[item].count + 1
        };

        clonedCartItems[item] = {
          ...clonedCartItems[item],
          total: clonedCartItems[item].count * book.price
        };

        return {
          ...state,
          cartItems: clonedCartItems
        };
      }

    default:
      return state;

  }
};

export default reducer;
