import React, { useState } from 'react';
import { connect } from 'react-redux';

import { selectedAnswer } from '../../redux/quiz/quiz.actions';
import './Quiz.styles.scss';

const Quiz = ({ currentQuestion, questionNumber, selectedAnswer, options }) => {
	const [ answer, setAnswer] = useState(null)

	const { question, selected_answer } = currentQuestion;
	
	const handleClick = answer => {
		selectedAnswer(answer);
		setAnswer(answer)
	};
	return (
		<>
			(
			<div className="quiz">
				<div className="quiz__question">
					<p>Question {+questionNumber + 1}</p>
					<h3>{question}</h3>
				</div>
				<ul className="quiz__options">
					{options.map(option => (
						<li
							onClick={() => handleClick(option)}
							key={option}
							className={`options__item ${ option === answer && 'selected'} ${ option === selected_answer && 'selected' } `}
						>
							{' '}
							{option}{' '}
						</li>
					))}
				</ul>
			</div>
			)
		</>
	);
};

const mapDispatchToProps = dispatch => ({
	selectedAnswer: answer => dispatch(selectedAnswer(answer)),
});

export default connect(null, mapDispatchToProps)(Quiz);
