import React from 'react';
import {connect} from 'react-redux';
import {withBookstoreService} from '$c/hoc';
import {booksLoaded, booksRequested, hasError} from '$actions';
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
    const { books, isLoading, error } = this.props;

    if (isLoading && !error) return <Spinner/>;

    if (error) return <ErrorIndicator/>;

    return <BookList books={books}/>
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
    isLoading: state.isLoading,
    error: state.error
  };
}

const mapDispatchToprops = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;

  return {
    fetchBooks: () => {
      dispatch(booksRequested());

      bookstoreService.getToken().then((token) => {
        bookstoreService.getBooks(`https://redux-app-91c13.firebaseio.com/data.json?auth=${token}`)
          .then(data => dispatch(booksLoaded(data)))
          .catch(error => dispatch(hasError()));
      });
    }
  }
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToprops)
)(BookListContainer);
