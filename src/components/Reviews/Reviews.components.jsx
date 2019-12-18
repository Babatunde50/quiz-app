import React from 'react';

import Review from '../../components/Review/Review.components'

export default function Reviews({ quizes }) {
    console.log(quizes)
  return (
    <div className="reviews">
    {
        quizes.map(quiz => (
            <div>
                <Review key={quiz.question} quiz={quiz}  />
            </div>
        ))
    }
    </div>
  );
}
