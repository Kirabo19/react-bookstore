import React from 'react';
import { useSelector, useDispatch } from 'react-redux/';
import Book from './book';
import Form from './form';
import { removeBook } from '../redux/books/books';

const BooksList = () => {
  const dispatch = useDispatch();

  const bookList = useSelector((state) => state.booksReducer);

  const click = (e) => {
    dispatch(removeBook(e.target.id));
  };

  // const bookList = [
  //   {
  //     id: 1,
  //     title: 'The way of Kings',
  //     author: 'Brandon',
  //     category: 'Kings'
  //   },
  //   {
  //     id: 2,
  //     title: 'The dragon reborn',
  //     author: 'Marcus Rufus',
  //     category: 'Romans'
  //   },
  // ];
  const list = bookList.map((books) => (
    <li key={books.id}>
      <Book
        id={books.id}
        click={click}
        title={books.title}
        author={books.author}
        category={books.category}
      />
    </li>
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
