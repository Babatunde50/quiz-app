import React from 'react'

import './Quiz.styles.scss';

const Quiz = () => {
    return (
        <div className="quiz">
            <div className="quiz__question">
                <p>Question 1</p>
                <h3>What is the name of the person that built this app?</h3>
            </div>
            <ul className="quiz__options">
                <li className="options__item selected"> Bruce Lee</li>
                <li className="options__item"> Jet Li</li>
                <li className="options__item"> Commando</li>
                <li className="options__item"> Atarodo</li>
            </ul>
        </div>
    )
}


export default Quiz;