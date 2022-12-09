import React from 'react';
import Book from './book';
import Form from './form';

const BooksList = () => {
  const state = {
    bookList: [
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
    ],
  };

  return (
  // const list = bookList.map((books) => <li key={books.id}><Book books={books} /></li>);
    <>
      <ul>
        {state.bookList.map((item) => (
          <Book
            key={item.id}
            bookList={item}
          />
        ))}
      </ul>
      <Form />
    </>
  );

  // const list = bookList.map((item) => (<li key={item.id}><Book item={item} /></li>));
  //   const list = bookList.map((books) => (
  //     <li key={books.id}>
  //       <Book item={item} />
  //     </li>

  //   ));

  //   return (
  //     <>
  //       <ul>
  //         {list}
  //       </ul>
  //       <Form />

//     </>
//   );
};
export default BooksList;
