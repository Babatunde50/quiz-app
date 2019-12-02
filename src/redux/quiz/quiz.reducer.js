import { quizActionTypes } from './quiz.types'

const INITIAL_STATE = {
    quizes: [],
    currentQuestion: null,
    options: {},
    isLoading: false,
    errorMessage: '',
    questionNumber: 0
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
        case quizActionTypes.FETCH_QUIZES_START:
            return {
                ...state,
                isLoading: true
            }
        case quizActionTypes.FETCH_QUIZES_SUCCESS:
            return {
                ...state,
                quizes: action.payload.quizes,
                isLoading: false,
                currentQuestion: action.payload.quizes[0]
            }
        case quizActionTypes.FETCH_QUIZES_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.errorMessage
            }
        case quizActionTypes.NEXT_QUESTION:
            return {
                ...state,
                questionNumber: state.questionNumber + 1,
                currentQuestion: state.quizes[state.questionNumber],
            }
        case quizActionTypes.PREV_QUESTION:
            return {
                ...state,
                questionNumber: state.questionNumber - 1,
                currentQuestion: state.quizes[state.questionNumber]
            }
        default:
            return state;
    }
}

export default quizReducer;