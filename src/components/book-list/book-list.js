import React from 'react';
import BookListItem from '$c/book-list-item';
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc';
import {booksLoaded} from '$actions';
import {compose} from '$utils';

import styles from './book-list.scss';

class BookList extends React.Component {

  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    const data = bookstoreService.getBooks();

    booksLoaded(data);
  }

  render() {
    const { books } = this.props;

    return (
      <ul>
        {
          books.map((book) => {
            return (
              <li key={book.id}>
                <BookListItem book={book}/>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return{
    books: state.books
  };
}

const mapDispatchToprops = {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToprops)
)(BookList);
