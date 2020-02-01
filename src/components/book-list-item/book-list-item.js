import React from 'react';
import styles from './book-list-item.scss';

const BookListItem = (props) => {
  const { author, title } = props.book;
  return (
    <>
      <span>{author}</span>
      <span>{title}</span>
    </>
  );
};

export default BookListItem;
