import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Quiz from '../../components/Quiz/Quiz.components';
import Button from '../../components/UI/Button/Button.components';
import Spinner from '../../components/UI/Spinner/Spinner.components';
import Modal from '../../components/UI/Modal/Modal.components';
import { nextQuestion, prevQuestion, submitQuiz } from '../../redux/quiz/quiz.actions';
// import { shuffle } from '../../utils/helper';

import './Quizpage.styles.scss';

const QuizPage = ({
	nextQuestion,
	prevQuestion,
	currentQuestion,
	questionNumber,
	options,
	totalQuestionsAnswered,
	submitQuiz,
	history,
}) => {
	const [showModal, setShowModal] = useState(false);
	const [timeLeft, setTimeLeft] = useState({});
	const [totalTime] = useState(Date.now() + options.numOfQuestions * 30 * 1000);
	const calculateTimeLeft = totalTime => {
		const difference = totalTime - Date.now();
		let timeLeft = {};
		if (difference > 0) {
			timeLeft = {
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		} else {
			timeLeft = null;
		}
		return timeLeft;
	};
	const handleSubmit = () => {
		submitQuiz();
		setShowModal(true);
	};
	useEffect(() => {
		if (!options.numOfQuestions) {
			return history.push('/');
		}
	}, []);
	useEffect(() => {
		if(timeLeft === null) {
			handleSubmit();
			setTimeout(() => {
				return history.push('/reviews');
			}, 1000);
			return;
		}
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft(totalTime));
		}, 1000);
	}, [timeLeft]);
	
	let loading = true;
	let disablePrev = false;
	let disableNext = false;
	let shuffledOptions;
	if (currentQuestion) {
		loading = false;
		+questionNumber === 0 ? (disablePrev = true) : (disablePrev = false);
		+questionNumber + 1 === +options.numOfQuestions ? (disableNext = true) : (disableNext = false);
		if (!shuffledOptions) {
			shuffledOptions = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers];
		}
	}
	return loading ? (
		<div className="quiz-page">
			<Spinner />
		</div>
	) : (
		<div className="quiz-page">
			{showModal && (
				<Modal>
					<p>
						{' '}
						You have answered {totalQuestionsAnswered} out of {options.numOfQuestions}{' '}
					</p>
					<hr></hr>
					<p>Do you really want to continue with your submision? </p>
					<Button handleClick={() => history.push('/reviews')}> Yes</Button>
					<Button handleClick={() => setShowModal(false)}> No</Button>
				</Modal>
			)}
			<div className="quiz-container">
				<h1 className="quiz-timer">
					{' '}
					{timeLeft && timeLeft.minutes} : {timeLeft && timeLeft.seconds}{' '}
				</h1>
				<Quiz currentQuestion={currentQuestion} options={shuffledOptions} questionNumber={questionNumber} />
				<div className="next-pev-buttons">
					<Button disabled={disablePrev} handleClick={prevQuestion}>
						{' '}
						<i class="fas fa-angle-left"></i> Prev{' '}
					</Button>
					{disableNext ? 
						<Button handleClick={handleSubmit}> Submit </Button>
					 : 
						<Button disabled={disableNext} handleClick={nextQuestion}>
							{' '}
							Next <i class="fas fa-angle-right"></i>{' '}
						</Button>
					}
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	nextQuestion: () => dispatch(nextQuestion()),
	prevQuestion: () => dispatch(prevQuestion()),
	submitQuiz: () => dispatch(submitQuiz()),
});

const mapStateToProps = state => ({
	currentQuestion: state.quizes.currentQuestion,
	questionNumber: state.quizes.questionNumber,
	options: state.quizes.options,
	totalQuestionsAnswered: state.quizes.totalQuestionsAnswered,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
