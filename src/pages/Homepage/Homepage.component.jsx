import React, { useState } from 'react';
import { connect } from 'react-redux';

import CategoryItemList from '../../components/CategoryItemList/CategoryItemList.components';
import Modal from '../../components/UI/Modal/Modal.components';
import Button from "../../components/UI/Button/Button.components";
import TextInput from "../../components/UI/TextInput/TextInput.components"
import { addOptions, fetchQuizesStartAsync } from '../../redux/quiz/quiz.actions'

const Homepage = ( { addOptions, category, history, fetchQuizesStartAsync } ) => {
  const [ userData , setUserData ] = useState({
    numOfQuestions: '',
    difficulty: 'any',
    type:"any"
  }) 

  const [ showModal, setShowModal ] = useState(false)

  const { numOfQuestions, difficulty, type } = userData;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = () => {
    addOptions(userData)
    fetchQuizesStartAsync({ ...userData, category  })
    history.push('/quiz')
  }

	return (
    <div>
    {
      showModal && (
        <Modal>
				<h1>Quiz Setup</h1>
        <div className="content">
          <TextInput type="number" valid={ !(numOfQuestions > 50 || numOfQuestions < 5)  } validityMessage="can't be less than 5 or greater than 50" id="numOfQuestions" label="Number of Questions:" value={ numOfQuestions} handleChange={handleChange} />
          <TextInput type="select" id="difficulty" label="Select Difficulty:" value={difficulty} handleChange={handleChange}>
            <option value="any"> Any Difficulty</option>
            <option value="easy"> Easy </option>
            <option value="medium"> Medium </option>
            <option value="hard"> Hard </option>
          </TextInput>
          <TextInput type="select" id="type" label="Select Type:" value={type} handleChange={handleChange}>
            <option value="any"> Any Type</option>
            <option value="multiple"> Multiple </option>
            <option value="boolean"> True / False </option>
          </TextInput>
        </div>
				<footer className="footer">
					<Button danger="danger" handleClick={() => setShowModal(false) } > Close </Button>
					<Button handleClick={handleSubmit} outline="outline" disabled={(numOfQuestions > 50 || numOfQuestions < 5) } > Start </Button>
				</footer>
			</Modal>
      )
    }
			<CategoryItemList showModal={() => setShowModal(true) } />
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
  addOptions: categories => dispatch(addOptions(categories)),
  fetchQuizesStartAsync: quizOptions => dispatch(fetchQuizesStartAsync(quizOptions))
})

const mapStateToProps = state => ({
  category: state.quizes.options.category
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);