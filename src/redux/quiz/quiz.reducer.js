import { quizActionTypes } from './quiz.types';

const INITIAL_STATE = {
	quizes: [],
	currentQuestion: null,
	options: {},
	isLoading: false,
	errorMessage: '',
	questionNumber: 0,
	totalScores: null,
	totalQuestionsAnswered: null,
};

const getTotalQuestionAnswered = quizes => {
	return quizes.filter(quiz => !!quiz.selected_answer).length;
};

const getScores = quizes => {
	return quizes.filter(quiz => quiz.selected_answer.trim() === quiz.correct_answer.trim()).length;
};

const quizReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case quizActionTypes.ADD_OPTIONS:
			return {
				...state,
				options: {
					...state.options,
					...action.payload.options,
				},
			};
		case quizActionTypes.FETCH_QUIZES_START:
			return {
				...state,
				isLoading: true,
			};
		case quizActionTypes.FETCH_QUIZES_SUCCESS:
			return {
				...state,
				quizes: action.payload.quizes,
				isLoading: false,
				currentQuestion: action.payload.quizes[0],
			};
		case quizActionTypes.FETCH_QUIZES_FAILURE:
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload.errorMessage,
			};
		case quizActionTypes.NEXT_QUESTION:
			return {
				...state,
				currentQuestion: state.quizes[state.questionNumber + 1],
				questionNumber: state.questionNumber + 1,
			};
		case quizActionTypes.SELECTED_ANSWER:
			return {
				...state,
				quizes: state.quizes.map((quiz, index) => {
					if (index === state.questionNumber) {
						return {
							...quiz,
							selected_answer: action.payload.answer,
						};
					}
					return quiz;
				}),
			};
		case quizActionTypes.PREV_QUESTION:
			return {
				...state,
				currentQuestion: state.quizes[state.questionNumber - 1],
				questionNumber: state.questionNumber - 1,
			};
		case quizActionTypes.SUBMIT_QUIZ:
			return {
				...state,
				totalScores: getScores(state.quizes),
				totalQuestionsAnswered: getTotalQuestionAnswered(state.quizes),
			};
		case quizActionTypes.RESET_ALL:
			return {
				...state,
				quizes: [],
				currentQuestion: null,
				options: {},
				isLoading: false,
				errorMessage: '',
				questionNumber: 0,
				totalScores: null,
				totalQuestionsAnswered: null,
			};
		default:
			return state;
	}
};

export default quizReducer;
