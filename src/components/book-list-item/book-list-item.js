import React from 'react';
import './book-list-item.scss';

const BookListItem = (props) => {
  const { author, title, price, coverImage } = props.book;
  const { onAddedToCart } = props;

  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover"/>
      </div>

      <div className="book-details">
        <span href="#" className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">{price}</div>
        <button
          className="btn btn-info add-to-cart"
          onClick={onAddedToCart}>
          Add to cart
        </button>
      </div>

    </div>
  );
};

export default BookListItem;
