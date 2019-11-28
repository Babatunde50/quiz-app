import React from 'react';
import { connect } from 'react-redux';

import './CategoryItem.styles.scss';
import Button from '../UI/Button/Button.components';
import { addOptions } from '../../redux/quiz/quiz.actions'

const CategoryItem = ({ category, showModal, addCategory }) => {

	const clickHandler = () => {
		showModal();
		addCategory({ category })
	}

	return (
		<div className="category-item">
			<div className="background">
				<h3> {category} </h3>
				<Button handleClick={clickHandler} >
					Play Now <i className="fas fa-arrow-right"></i>
				</Button>
			</div>
		</div>
	);
};


const mapDispatchToProps = dispatch => ({
	addCategory: (category) => dispatch(addOptions(category))
})

export default connect(null, mapDispatchToProps)(CategoryItem);
