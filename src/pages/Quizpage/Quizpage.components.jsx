import React from 'react';
import { connect } from 'react-redux'

import Quiz from '../../components/Quiz/Quiz.components';
import Button from '../../components/UI/Button/Button.components'
import Spinner from '../../components/UI/Spinner/Spinner.components'
import { nextQuestion, prevQuestion } from '../../redux/quiz/quiz.actions'

import './Quizpage.styles.scss'

const QuizPage = ({ nextQuestion, prevQuestion, currentQuestion, questionNumber, options }) => {
  let loading = true;
  let disablePrev = false;
  let disableNext = false;
  if(currentQuestion) {
    loading = false;
    +questionNumber === 0 ? disablePrev = true : disablePrev = false;
    +questionNumber + 1 === +options.numOfQuestions ? disableNext = true : disableNext = false;
  }
  return (
    loading ? (
      <Spinner />
    ) : (
      <>
        <Quiz currentQuestion={currentQuestion} questionNumber={questionNumber} />
        <div className="next-pev-buttons">
          <Button disabled={disablePrev} handleClick={prevQuestion}> Prev </Button>
          {
            disableNext ? (
              <Button> Submit </Button> 
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
  prevQuestion: () => dispatch(prevQuestion())
})


const mapStateToProps = state => ({
  currentQuestion: state.quizes.currentQuestion,
  questionNumber: state.quizes.questionNumber,
  options: state.quizes.options
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);