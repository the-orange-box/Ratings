import React from 'react';
import ReviewDisplayItem from './reviewDisplayItem.jsx'

const ReviewDisplay = (props) => {
  //console.log("Rendering ReviewDisplay ", props.reviews)

  return (
      <div>
        {props.reviews.map((review) => <ReviewDisplayItem review={review} hostIcon={props.hostIcon} hostName={props.hostName}/> )}
      </div>
  )
}

export default ReviewDisplay;