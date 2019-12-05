import React from 'react';

import { shuffle } from '../../utils/helper';
import './Quiz.styles.scss';

const Quiz = ({ currentQuestion, questionNumber }) => {
	const { question, correct_answer, incorrect_answers } = currentQuestion;
	const options = shuffle([correct_answer, ...incorrect_answers]);
	return (
		<>
			(
			<div className="quiz">
				<div className="quiz__question">
					<p>Question { +questionNumber + 1}</p>
					<h3>{question}</h3>
				</div>
				<ul className="quiz__options">
					{options.map(option => (
						<li className="options__item"> {option} </li>
					))}
				</ul>
			</div>
			)
		</>
	);
};

export default Quiz;
