import React from 'react';

function BookList({ books, selectBook }) {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - <button onClick={() => selectBook(book)}>Review</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
