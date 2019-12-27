import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header/Header.components';
import HomePage from './pages/Homepage/Homepage.component';
import QuizPage from './pages/Quizpage/Quizpage.components';
import ReviewPage from './pages/ReviewPage/ReviewPage.components';
import { resetAll } from './redux/quiz/quiz.actions';

import './App.css';

function App({ resetAll }) {
	useEffect(() => {
		resetAll();
		console.log('RESET')
	});
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/quiz" component={QuizPage} />
				<Route exact path="/reviews" component={ReviewPage} />
			</Switch>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	resetAll: () => dispatch(resetAll()),
});

export default connect(null, mapDispatchToProps)(App);
