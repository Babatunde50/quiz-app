import {combineReducers} from 'redux'

import quizReducer from "./quiz/quiz.reducer";

const rootReducer = combineReducers({
   quizes: quizReducer
})

export default rootReducer;