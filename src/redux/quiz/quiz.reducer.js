import { quizActionTypes } from './quiz.types'

const INITIAL_STATE = {
    quizes: [],
    options: {},
    isLoading: false,
    errorMessage: ''
}

const quizReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case quizActionTypes.ADD_OPTIONS:
            return {
                ...state,
                options: {
                    ...state.options,
                    ...action.payload.options
                }
            }
        default:
            return state;
    }
}

export default quizReducer;