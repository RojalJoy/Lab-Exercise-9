import React, { useState } from 'react';

function ReviewForm({ book }) {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement a function to submit the review for the selected book
    // You may need to send this data to a server or store it in a state
  };

  return (
    <div>
      <h2>Review for {book.title}</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
