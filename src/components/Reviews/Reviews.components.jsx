import React from 'react';

import Review from '../../components/Review/Review.components'

import './Reviews.styles.scss'

export default function Reviews({ quizes }) {
  return (
    <div className="reviews">
    {
        quizes.map(quiz => (
            <div className="review">
                <Review key={quiz.question} quiz={quiz}  />
            </div>
        ))
    }
    </div>
  );
}
