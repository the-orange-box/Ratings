import React from 'react';

const ReviewDisplayItem = (props) => {
  return (
      <div>
          <span className="box" style={{flex: 1, flexDirection: 'row', marginBottom: 20}}>
          <img className='iconimg' src={props.review.userIcon}></img>
          <span className='messageUsername'>
            {props.review.userName}
            <div className='messageDate'>{props.review.postDate}</div>
          </span>
          </span>
          <div className='messageText'>{props.review.messageText}</div>
          <div className="separator-bar" style={ {marginTop: 24,marginBottom: 24} }>
              <hr style={{ color: '#FFFFFF', backgroundColor: '#FFFFFF', height: 0.0, borderColor : '#FFFFFF' }} />
          </div>
      </div>
  )
}


export default ReviewDisplayItem;