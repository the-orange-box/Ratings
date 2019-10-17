import React from 'react';
import ReviewDisplayItem from './reviewDisplayItem.jsx'

const ReviewDisplay = (props) => {
  console.log(props.reviews)
  return (
      <div>
          {props.reviews.map((review) => <ReviewDisplayItem review={review}/> )}
      </div>
  )
}


export default ReviewDisplay;