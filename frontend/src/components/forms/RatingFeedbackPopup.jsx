import React, { useState } from 'react';
import { Star } from '@mui/icons-material';
// We'll keep this file for any custom styles

const RatingFeedbackPopup = ({ isOpen, onClose,completeHandler , service}) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Rating:', rating);
    // console.log('Feedback:', feedback);
    completeHandler(service,rating, feedback)
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Rate Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label key={i} className="cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    className="hidden"
                    onClick={() => setRating(ratingValue)}
                  />
                  <Star
                    className="text-yellow-500"
                    style={{
                      color: ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9',
                    }}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <textarea
            className="w-full h-24 p-2 border rounded mb-4"
            placeholder="Leave your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RatingFeedbackPopup;
