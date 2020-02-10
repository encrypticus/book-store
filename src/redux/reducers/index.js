import updatebookList from './book-list-reducer';
import updateShoppingCart from './shopping-cart-reducer';

const initialState = {
  bookList: {
    books: [],
    isLoading: true,
    error: false
  },

  shoppingCart: {
    cartItems: [],
    orderTotal: 0
  }
};

const reducer = (state, action) => {
  return {
    bookList: updatebookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
