/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Book = (props) => (
  <div>
    <li>
      {props.bookList.title}
      {' '}
      |
      {props.bookList.author}
    </li>

  </div>
);

export default Book;
