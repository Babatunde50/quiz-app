import axios from 'axios';
import {quizActionTypes } from './quiz.types'

export const fetchQuizes = (quizOptions) => {
    console.log(quizOptions)
    return async(dispatch) => {

    }
}


export const addOptions = (options) => ({
    type: quizActionTypes.ADD_OPTIONS,
    payload: {
        options
    }
})