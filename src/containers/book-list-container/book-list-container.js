import React from 'react';
import {connect} from 'react-redux';
import {withBookstoreService} from '$c/hoc';
import {fetchBooks, bookAddedToCart} from '$actions';
import {compose} from '$utils';
import Spinner from '$c/spinner';
import ErrorIndicator from '$c/error-indicator';
import BookList from '$c/book-list';

class BookListContainer extends React.Component {

  componentDidMount() {
    const { fetchBooks } = this.props;

    fetchBooks();
  }

  render() {
    const { books, isLoading, error, onAddedToCart } = this.props;

    if (isLoading && !error) return <Spinner/>;

    if (error) return <ErrorIndicator/>;

    return <BookList books={books} onAddedToCart={onAddedToCart}/>
  }
}

function mapStateToProps(state) {
  return {
    books: state.bookList.books,
    isLoading: state.bookList.isLoading,
    error: state.bookList.error
  };
}

const mapDispatchToprops = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;

  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  }
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToprops)
)(BookListContainer);
