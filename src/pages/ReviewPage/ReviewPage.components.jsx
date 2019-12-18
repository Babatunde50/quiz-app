import React from 'react';
import { connect }  from 'react-redux'

import Reviews from '../../components/Reviews/Reviews.components'

function ReviewPage({quizes, totalScores}) {
  return (
    <div>
        <h1> {totalScores} </h1>
        <Reviews quizes={quizes} />
    </div>
  );
}


const mapStateToProps = state => ({
  quizes: state.quizes.quizes,
  totalScores: state.quizes.totalScores
})

export default connect(mapStateToProps)(ReviewPage);