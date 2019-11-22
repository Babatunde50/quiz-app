import React from 'react';

import './CategoryItem.styles.scss';
import Button from '../UI/Button/Button.components';

const CategoryItem = ({ category, showModal }) => {
	return (
		<div className="category-item">
			<div className="background">
				<h3> {category} </h3>
				<Button handleClick={showModal} >
					Play Now <i className="fas fa-arrow-right"></i>
				</Button>
			</div>
		</div>
	);
};

export default CategoryItem;
