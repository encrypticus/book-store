const initialState = {
  books: [],
  isLoading: true,
  error: false,
  cartItems: [],
  orderTotal: 220
};

const reducer = (state = initialState, action) => {
  const bookId = action.payload;
  const book = state.books.find((book) => book.id === bookId);
  const index = state.cartItems.findIndex(item => item.id === bookId);

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
      if (index < 0) {
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

        clonedCartItems[index] = {
          ...clonedCartItems[index],
          count: clonedCartItems[index].count + 1
        };

        clonedCartItems[index] = {
          ...clonedCartItems[index],
          total: clonedCartItems[index].count * book.price
        };

        return {
          ...state,
          cartItems: clonedCartItems
        };
      }

    case 'SUBTRACT_ITEM':
      let clonedCartItems = [...state.cartItems];

      clonedCartItems[index] = {
        ...clonedCartItems[index],
        count: clonedCartItems[index].count <= 1 ? 1 : clonedCartItems[index].count - 1
      };

      clonedCartItems[index] = {
        ...clonedCartItems[index],
        total: clonedCartItems[index].count * book.price
      };

      return {
        ...state,
        cartItems: clonedCartItems
      };

    case 'BOOK_DELETED_FROM_CART':
      const cartItems = [...state.cartItems];
      cartItems.splice(index, 1);

      return {
        ...state,
        cartItems
      };

    default:
      return state;

  }
};

export default reducer;
