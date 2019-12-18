import React from 'react';

import './Review.styles.scss';

export default function Review({ quiz }) {
    const { selected_answer, correct_answer, question } = quiz
  return (
    <div className="review">
        <div className="question">
            <p> { question } </p>
        </div>
        <hr />
        <div className="answer">
             <p> { selected_answer } </p>
             <p> { correct_answer } </p>
             <p> { selected_answer.trim() === correct_answer.trim() ? 'Right' : 'Wrong' } </p>
        </div>
    </div>
  );
}
