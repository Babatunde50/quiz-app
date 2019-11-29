import axios from 'axios';
import { quizActionTypes } from './quiz.types';

export const fetchQuizes = async quizOptions => {
	
		console.log(quizOptions);
		const { numOfQuestions, difficulty, type, category } = quizOptions;
		// const url = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`;
		const url = `https://opentdb.com/api.php?amount=${numOfQuestions}`;
		console.log('Starting', url);
		const response = await axios.get(url);
		console.log(response.data);
	
};

export const addOptions = options => ({
	type: quizActionTypes.ADD_OPTIONS,
	payload: {
		options,
	},
});
