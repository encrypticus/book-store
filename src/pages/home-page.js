import React from 'react';
import BookList from '$c/book-list';

const HomePage = () => {
  return (
    <BookList
      books={
        [
          { author: 'Джон Смит', title: 'Пособие', id: 1 },
          { author: 'Yan Silver', title: 'Экономика и статистика', id: 2 },
        ]
      }
    />
  );
};

export default HomePage;
