import React from 'react';
import styles from './modules/ReviewDisplayItem.module.css'

const ReviewDisplayItem = (props) => {
function checkResponse(){
  if(props.review.responded===true) {
    return (
      <div className={styles.messageResponse}>
      <span className={styles.boxTop}>
      <img className={styles.iconimgResponse} src={props.fulldata.hostIcon}></img>
      <span className={styles.messageUsernameResponse}>
        Response from {props.fulldata.hostName}:
        <div className={styles.messageTextResponse}>{props.review.responseText}</div>
      </span>
      </span>

      <div className={styles.messageDateResponse}>{props.review.responseTime}</div>
      </div>
    )
  }
}
  return (
      <div>
          <span className={styles.boxBottom}>
          <img className={styles.iconimg} src={props.review.userIcon}></img>
          <span className={styles.messageUsername}>
            {props.review.userName}
            <div className={styles.messageDate}>{props.review.postDate}</div>
          </span>
          </span>
          <div className={styles.messageText}>{props.review.messageText}</div>
          {checkResponse()}
          <div className={styles.messageSeparator}>
              <hr className={styles.messageHr} />
          </div>
      </div>
  )
}


export default ReviewDisplayItem;