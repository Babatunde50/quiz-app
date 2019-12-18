import React, { useState} from 'react';
import { connect } from 'react-redux'

import Quiz from '../../components/Quiz/Quiz.components';
import Button from '../../components/UI/Button/Button.components'
import Spinner from '../../components/UI/Spinner/Spinner.components'
import Modal from '../../components/UI/Modal/Modal.components'
import { nextQuestion, prevQuestion, submitQuiz } from '../../redux/quiz/quiz.actions'
import { shuffle } from '../../utils/helper'

import './Quizpage.styles.scss'

const QuizPage = ({ nextQuestion, prevQuestion, currentQuestion, questionNumber, options, totalQuestionsAnswered, submitQuiz, history }) => {
  const [ showModal, setShowModal ] = useState(false)
  const handleSubmit = () => {
    submitQuiz()
    setShowModal(true)
    // history.push('/reviews')
  }
  let loading = true;
  let disablePrev = false;
  let disableNext = false;
  let shuffledOptions
  if(currentQuestion) {
    loading = false;
    +questionNumber === 0 ? disablePrev = true : disablePrev = false;
    +questionNumber + 1 === +options.numOfQuestions ? disableNext = true : disableNext = false;
    shuffledOptions = shuffle([ currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]);
  } 
  return (
    loading ? (
      <Spinner />
    ) : (
      <>
      { showModal && 
          <Modal> 
            <p> You have answered {totalQuestionsAnswered} out of {options.numOfQuestions} </p> 
            <hr></hr>
            <p>Do you really want to continue with your submision? </p>
            <Button handleClick={() => history.push('/reviews')}> Yes</Button> 
            <Button handleClick={() => setShowModal(false)} > No</Button> 

          </Modal> }
        <Quiz currentQuestion={currentQuestion} options={shuffledOptions} questionNumber={questionNumber} />
        <div className="next-pev-buttons">
          <Button disabled={disablePrev} handleClick={prevQuestion}> Prev </Button>
          {
            disableNext ? (
              <Button handleClick={handleSubmit} > Submit </Button> 
            ) : (
              <Button disabled={disableNext} handleClick={nextQuestion}> Next </Button> 
            ) 
          }
        </div>
      </>
    )
  );
}

const mapDispatchToProps = dispatch => ({
  nextQuestion: () => dispatch(nextQuestion()),
  prevQuestion: () => dispatch(prevQuestion()),
  submitQuiz: () => dispatch(submitQuiz())
})


const mapStateToProps = state => ({
  currentQuestion: state.quizes.currentQuestion,
  questionNumber: state.quizes.questionNumber,
  options: state.quizes.options,
  totalQuestionsAnswered: state.quizes.totalQuestionsAnswered
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);