import React from 'react';

import CategoryItem from "../CategoryItem/CategoryItem.componenets";
import "./CategoryItemList.styles.scss";

const categories = [
	'Any Category',
	'General Knowledge',
	'Entertainment: Books',
	'Entertainment: Film',
	'Entertainment: Music',
	'Entertainment: Musicals & Theatres',
	'Entertainment: Television',
	'Entertainment: Video Games',
	'Entertainment: Board Games',
	'Science & Nature',
	'Science: Computers',
	'Science: Mathematics',
	'Mythology',
	'Sports',
	'Geography',
	'History',
	'Politics',
	'Art',
	'Celebrities',
	'Animals',
	'Vehicles',
	'Entertainment: Comics',
	'Science: Gadgets',
	'Entertainment: Japanese Anime & Manga',
	'Entertainment: Cartoon & Animations',
];

export default function componentName( { showModal } ) {
	return (
        <div className="category-item-list">
            {
                categories.map(category => (
                    <div key={category} className="category-item-container">
                        <CategoryItem showModal={showModal} category={category} />
                    </div>
                )  )
            }
        </div>
    ) 
}
