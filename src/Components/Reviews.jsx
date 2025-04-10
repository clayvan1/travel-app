import React ,{useEffect}from 'react';
import './Reviews.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
  useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);
  // Sample review data (replace with your actual data)
  const reviewsData = [
    {
      id: 1,
      name: 'Alice Smith',
      rating: 5,
      comment: 'Excellent service! I highly recommend them.',
    },
    {
      id: 2,
      name: 'Bob Johnson',
      rating: 4,
      comment: 'Good experience overall. Will use again.',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      rating: 3,
      comment: 'It was okay, could be better in some areas.',
    },
    {
      id: 4,
      name: 'Diana Lee',
      rating: 5,
      comment: 'Absolutely fantastic! The team was professional and helpful.',
    },
  ];

  return (
    <div className="reviews-container" data-aos="fade-up">
      <h2>Customer Reviews</h2>
      {reviewsData.map((review) => (
        <div key={review.id} className="review-card" data-aos="fade-up">
          <div className="review-header">
            <h3>{review.name}</h3>
            <div className="ratings">
              {Array.from({ length: review.rating }).map((_, index) => (
                <span key={index} className="star filled">★</span>
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, index) => (
                <span key={index} className="star empty">☆</span>
              ))}
            </div>
          </div>
          <p className="comment">{review.comment}</p>
        </div>
      ))}
      {/* You can add a button or form here to allow users to submit their own reviews */}
      {/* <button className="add-review-button">Add Your Review</button> */}
    </div>
  );
};

export default Reviews;