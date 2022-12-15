import React from 'react';
import Book from './book';
import Form from './form';

const BooksList = () => {
  const bookList = [
    {
      id: 1,
      title: 'The way of Kings',
      author: 'Brandon',
    },
    {
      id: 2,
      title: 'The dragon reborn',
      author: 'Marcus Rufus',
    },
  ];
  const list = bookList.map((books) => (

    <Book
      key={books.id}
      title={books.title}
      author={books.author}
    />
  ));

  return (
    <div>
      <ul>
        { list }
      </ul>
      <Form />
    </div>
  );
};
export default BooksList;
