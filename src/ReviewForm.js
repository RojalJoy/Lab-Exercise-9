import React, { useState } from 'react';

function ReviewForm({ book }) {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming the review is successfully "submitted" here
    // You can replace this with your desired logic

    // Show an alert
    alert('Review submitted successfully');

    // Clear the review text after submission
    setReview('');
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
