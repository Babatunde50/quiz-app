import React from 'react';
import { connect } from 'react-redux'

import Quiz from '../../components/Quiz/Quiz.components';
import Button from '../../components/UI/Button/Button.components'
import { nextQuestion, prevQuestion } from '../../redux/quiz/quiz.actions'

import './Quizpage.styles.scss'

const QuizPage = ({ nextQuestion, prevQuestion }) => {
  return (
    <>
        <Quiz />
        <div className="next-pev-buttons">
          <Button handleClick={prevQuestion}> Prev </Button>
          <Button handleClick={nextQuestion}> Next </Button>
        </div>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  nextQuestion: () => dispatch(nextQuestion()),
  prevQuestion: () => dispatch(prevQuestion())
})

export default connect(null, mapDispatchToProps)(QuizPage);