import PropTypes from 'prop-types';
import React from 'react';

const Book = (props) => {
  const { title, author } = props;

  return (
    <div>
      <li>
        {title}
        {' '}
        |
        {author}
      </li>

    </div>
  );
};
Book.propTypes = {

  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,

};

export default Book;
