// import { quizActionTypes } from './quiz.types'

const INITIAL_STATE = {
    quizes: [],
    isLoading: false,
    errorMessage: ''
}

const quizReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default quizReducer;