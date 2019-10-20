import React from 'react';
import ReviewDisplayItem from './reviewDisplayItem.jsx'

const ReviewDisplay = (props) => {
  console.log(props.reviews)
  const test = (input) => {
    if (input) {
        console.log("TEST-------------------------------------",input)
        return input;
      }
      return []
    }

  return (
      <div>
        {test(props.reviews).map((review) => <ReviewDisplayItem review={review} fulldata={props.fulldata}/> )}
      </div>
  )
}


export default ReviewDisplay;