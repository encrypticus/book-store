import React from 'react';
import BookListItem from '$c/book-list-item';

import './book-list.scss';

const BookList = (props) => {
  const { books, onAddedToCart } = props;

  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

export default BookList;
