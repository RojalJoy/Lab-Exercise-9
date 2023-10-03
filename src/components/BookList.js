// src/components/BookList.js
import React from 'react';

function BookList({ books }) {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.primary_isbn13}>
            <strong>{book.title}</strong> by {book.author}
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
