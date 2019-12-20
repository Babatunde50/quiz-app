import React from 'react';

import './Review.styles.scss';

export default function Review({ quiz }) {
    const { selected_answer, correct_answer, question } = quiz
  return (
    <div className="review">
        <div className="question">
            <h3> { question } </h3>
        </div>
        <hr />
        <div className="answer">
             <h3> { selected_answer } </h3>
             <p> 
                <strong> { correct_answer } </strong>  
                { selected_answer.trim() === correct_answer.trim() ? <i class="far fa-check-circle"></i> : <i class="fas fa-times"></i> } 
             </p>
        </div>
    </div>
  );
}
