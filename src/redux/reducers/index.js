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

// const updateCartItems = (cartItems, item, index) => {
//
//   if (item.count === 0) {
//     return [
//       ...cartItems.slice(0, index),
//       ...cartItems.slice(index + 1)
//     ];
//   }
//
//   if (index < 0) {
//
//     return [
//       ...cartItems,
//       item
//     ];
//
//   } else {
//
//     return [
//       ...cartItems.slice(0, index),
//       item,
//       ...cartItems.slice(index + 1)
//     ];
//
//   }
// };
//
// const updateCartItem = (book, item, quantity) => {
//   if (item) {
//
//     return {
//       ...item,
//       count: item.count + quantity,
//       total: item.total + quantity * book.price
//     };
//
//   } else {
//
//     return {
//       id: book.id,
//       title: book.title,
//       count: 1,
//       total: book.price
//     };
//
//   }
// };
//
// const updateOrder = (state, bookId, quantity) => {
//   const { books } = state.bookList;
//   const { cartItems } = state.shoppingCart;
//
//   const book = books.find((book) => book.id === bookId);
//   const itemIndex = cartItems.findIndex(item => item.id === bookId);
//   const item = cartItems[itemIndex];
//
//   let newItem = updateCartItem(book, item, quantity);
//
//   return {
//     orderTotal: 0,
//     cartItems: updateCartItems(cartItems, newItem, itemIndex)
//   };
// };
//
// const updatebookList = (state, action) => {
//
//   if (state === undefined) {
//     return {
//       books: [],
//       isLoading: true,
//       error: false
//     };
//   }
//
//   switch (action.type) {
//     case 'FETCH_BOOKS_REQUEST':
//       return {
//         books: [],
//         isLoading: true,
//         error: false
//       };
//
//     case 'FETCH_BOOKS_SUCCESS':
//       return {
//         books: action.payload,
//         isLoading: false,
//         error: false
//       };
//
//     case 'FETCH_BOOKS_FAILURE':
//       return {
//         books: [],
//         isLoading: false,
//         error: true
//       };
//
//     default:
//       return state.bookList;
//   }
// };
//
// const updateShoppingCart = (state, action) => {
//
//   if(state === undefined) {
//     return {
//       cartItems: [],
//       orderTotal: 0
//     }
//   }
//
//   switch (action.type) {
//     case 'BOOK_ADDED_TO_CART':
//       return updateOrder(state, action.payload, 1);
//
//     case 'BOOK_REMOVED_FROM_CART':
//       return updateOrder(state, action.payload, -1);
//
//     case 'ALL_BOOKS_REMOVED_FROM_CART':
//       const item = state.shoppingCart.cartItems.find(cartItem => cartItem.id === action.payload);
//       return updateOrder(state, action.payload, -item.count);
//
//     default:
//       return state.shoppingCart;
//   }
// };

const reducer = (state, action) => {
  return {
    bookList: updatebookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
