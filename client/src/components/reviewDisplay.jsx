import React from 'react';
import ReviewDisplayItem from './reviewDisplayItem.jsx'

const ReviewDisplay = (props) => {
  console.log("Rendering ReviewDisplay ", props.reviews)

  return (
      <div>
        {props.reviews.map((review) => <ReviewDisplayItem review={review} fulldata={props.fulldata}/> )}
      </div>
  )
}

export default ReviewDisplay;