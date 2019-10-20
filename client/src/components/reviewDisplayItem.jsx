import React from 'react';

const ReviewDisplayItem = (props) => {
function test(){
  if(props.review.responded===true) {
    console.log("============================================================================ITS HAPPENING")
    return (
      <div className="messageResponse">
      <span className="box" style={{flex: 1, flexDirection: 'row', marginBottom: 20}}>
      <img className='iconimg' src={props.fulldata.hostIcon}></img>
      <span className='messageUsername'>
        Response from {props.fulldata.hostName}:
        <div className='messageDate'>{props.review.responseTime}</div>
      </span>
      </span>
      <div className='messageText'>{props.review.responseText}</div>
      </div>

    )
  }
}
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
          {test()}
          <div className="separator-bar" style={ {marginTop: 24,marginBottom: 24} }>
              <hr style={{ color: '#FFFFFF', backgroundColor: '#FFFFFF', height: 0.0, borderColor : '#FFFFFF' }} />
          </div>
      </div>
  )
}


export default ReviewDisplayItem;