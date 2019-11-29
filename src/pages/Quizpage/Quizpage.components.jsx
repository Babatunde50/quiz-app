import React from 'react';

import Quiz from '../../components/Quiz/Quiz.components';
import Button from '../../components/UI/Button/Button.components'

import './Quizpage.styles.scss'

const QuizPage = () => {
  return (
    <>
        <Quiz />
        <div className="next-pev-buttons">
          <Button> Prev </Button>
          <Button> Next </Button>
        </div>
    </>
  );
}

export default QuizPage;