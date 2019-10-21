import React from 'react';

const ReviewDisplayItem = (props) => {
function checkResponse(){
  if(props.review.responded===true) {
    return (
      <div className="messageResponse">
      <span className="box" style={{flex: 1, flexDirection: 'row', marginBottom: 20, marginTop: 16}}>
      <img className='iconimgResponse' src={props.fulldata.hostIcon}></img>
      <span className='messageUsernameResponse'>
        Response from {props.fulldata.hostName}:
        <div className='messageTextResponse'>{props.review.responseText}</div>
      </span>
      </span>

      <div className='messageDateResponse'>{props.review.responseTime}</div>
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
          {checkResponse()}
          <div className="separator-bar" style={ {marginTop: 24,marginBottom: 24} }>
              <hr style={{ color: '#FFFFFF', backgroundColor: '#FFFFFF', height: 0.0, borderColor : '#FFFFFF' }} />
          </div>
      </div>
  )
}


export default ReviewDisplayItem;