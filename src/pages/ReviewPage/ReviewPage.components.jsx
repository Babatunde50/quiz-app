import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Reviews from '../../components/Reviews/Reviews.components';

import './ReviewPage.styles.scss';

function ReviewPage({ quizes, totalScores, totalQuestions }) {
	return (
		<div className="review-page">
			<h3 className="review__title">
				{' '}
				Total Scores : {totalScores} / {totalQuestions}{' '}
			</h3>

			<Reviews quizes={quizes} />

			<div className="link">
				<Link to="/" className="back">
					{' '}
					Back to Home{' '}
				</Link>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	quizes: state.quizes.quizes,
	totalScores: state.quizes.totalScores,
	totalQuestions: state.quizes.options.numOfQuestions,
});

export default connect(mapStateToProps)(ReviewPage);
