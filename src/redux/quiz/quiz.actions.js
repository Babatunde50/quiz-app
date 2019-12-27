import axios from 'axios';
import { quizActionTypes } from './quiz.types';

export const fetchQuizesStart = () => ({
	type: quizActionTypes.FETCH_QUIZES_START,
});

export const fetchQuizSuccess = quizes => ({
	type: quizActionTypes.FETCH_QUIZES_SUCCESS,
	payload: {
		quizes: quizes.map(quiz => ({
			...quiz,
			selected_answer: '',
		})),
	},
});

export const fetchQuizFailure = errorMessage => ({
	type: quizActionTypes.FETCH_QUIZES_FAILURE,
	payload: {
		errorMessage,
	},
});

export const fetchQuizesStartAsync = quizOptions => {
	const { numOfQuestions, difficulty, type, category } = quizOptions;
	let url = `https://opentdb.com/api.php?amount=${numOfQuestions}`;
	category !== 'any' ? (url += `&category=${category}`) : (url += '');
	difficulty !== 'any' ? (url += `&difficulty=${difficulty}`) : (url += '');
	type !== 'any' ? (url += `&type=${type}`) : (url += '');
	return async dispatch => {
		try {
			dispatch(fetchQuizesStart());
			const response = await axios.get(url);
			dispatch(fetchQuizSuccess(response.data.results));
		} catch (error) {
			console.log(error.message);
			dispatch(fetchQuizFailure(error.message));
		}
	};
};

export const addOptions = options => ({
	type: quizActionTypes.ADD_OPTIONS,
	payload: {
		options,
	},
});

export const nextQuestion = () => ({
	type: quizActionTypes.NEXT_QUESTION,
});

export const prevQuestion = () => ({
	type: quizActionTypes.PREV_QUESTION,
});

export const selectedAnswer = answer => ({
	type: quizActionTypes.SELECTED_ANSWER,
	payload: {
		answer,
	},
});

export const submitQuiz = () => ({
	type: quizActionTypes.SUBMIT_QUIZ,
});

export const resetAll = () => ({
	type: quizActionTypes.RESET_ALL,
});
