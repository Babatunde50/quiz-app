import React from 'react';
import { Route, Switch, } from "react-router-dom"

import Header from './components/Header/Header.components';
import HomePage from "./pages/Homepage/Homepage.component";
import QuizPage from './pages/Quizpage/Quizpage.components'

import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/quiz" component={QuizPage} />
			</Switch>
		</div>
	);
}

export default App;
