// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import BookSearch from './components/BookSearch';
import BookList from './components/BookList';
import ReviewForm from './components/ReviewForm';

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);


  useEffect(() => {
    // Fetch data from the New York Times Books API
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=gJUcrGeSRdqBsgnHb7Uky4gGQM7q9Ijq')
      .then((response) => response.json())
      .then((data) => setBooks(data.results.books))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (query) => {
    // Filter books based on the search query
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setSelectedBook(null);
    setBooks(filteredBooks);
  };

  const handleReviewSubmit = (reviewData) => {
    // Add the review to the selected book's reviews
    if (selectedBook) {
      const updatedBook = { ...selectedBook };
      updatedBook.reviews = updatedBook.reviews || [];
      updatedBook.reviews.push(reviewData);
      setSelectedBook(updatedBook);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bookstore App</h1>
      </header>
      <main>
        <BookSearch onSearch={handleSearch} />
        <BookList books={books} onSelectBook={setSelectedBook} />
        {selectedBook && (
          <div>
            <ReviewForm onSubmit={handleReviewSubmit} />
            <BookReviews book={selectedBook} />
          </div>
        )}
      </main>
    </div>
  );
}

function BookReviews({ book }) {
  return (
    <div>
      <h2>Reviews for {book.title}</h2>
      {book.reviews && book.reviews.length > 0 ? (
        <ul>
          {book.reviews.map((review, index) => (
            <li key={index}>
              <p><strong>{review.name}</strong></p>
              <p>Rating: {review.rating}</p>
              <p>{review.review}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}

export default App;
