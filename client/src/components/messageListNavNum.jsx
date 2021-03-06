import React from 'react';
import styles from './modules/messageListNavNum.module.css';

class MessageListNavNum extends React.Component {
  constructor(props){
      super(props)
      this.state = {
      }
  }

  render() {
  //console.log("Rendering MessageListNavNum: ",this.props.SortedMessageArray.length)
  //console.log("currentMessageList: ", this.props.currentMessageList)
                        //Crazy ternary operator spaghetti monster
  return (
    <ul className={styles.messageList}>
    {this.props.currentMessageList === 0 ? null : <button className={styles.messageArrow} onClick={this.props.MessageListBack}>
      <svg viewBox="0 0 18 18" className={styles.LeftMessageArrow}>
        <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" />
      </svg>
    </button>}
    {this.props.SortedMessageArray.length !== 1 ?
      this.props.currentMessageList === 0 ?
    <li><button className={styles.messageButtonActive} value={0} onClick={this.props.MessageListSet}>{1}</button></li> :<li><button className={styles.messageButton} value={0} onClick={this.props.MessageListSet}>{1}</button></li>
    : null
    }
    {this.props.SortedMessageArray.map((item,key) =>
      key === this.props.currentMessageList-1 && key !== 0 && key !== this.props.SortedMessageArray.length-1 ?
      <span><li><button className={styles.messagePeriods}>...</button></li>
      <li><button className={styles.messageButton} value={key} onClick={this.props.MessageListSet}>{key + 1}</button></li> </span>
      : key === this.props.currentMessageList && key !== 0 && key !== this.props.SortedMessageArray.length-1 ?
      key === this.props.currentMessageList ?
      <li><button className={styles.messageButtonActive} value={key} onClick={this.props.MessageListSet}>{key + 1}</button></li>
      : <li><button className={styles.messageButton} value={key} onClick={this.props.MessageListSet}>{key + 1}</button></li>
      : key === this.props.currentMessageList+1 && key !== 0 && key !== this.props.SortedMessageArray.length-1 ?
      <span><li><button className={styles.messageButton} value={key} onClick={this.props.MessageListSet}>{key + 1}</button></li>
      <li><button className={styles.messagePeriods}>...</button></li></span>
      : null
    )}
    {this.props.SortedMessageArray.length !== 1 ?
    this.props.currentMessageList === this.props.SortedMessageArray.length-1 ? <li><button className={styles.messageButtonActive} value={this.props.SortedMessageArray.length-1} onClick={this.props.MessageListSet}>{this.props.SortedMessageArray.length}</button></li> :
    <li><button className={styles.messageButton} value={this.props.SortedMessageArray.length-1} onClick={this.props.MessageListSet}>{this.props.SortedMessageArray.length}</button></li>
    : null
    }
    {this.props.currentMessageList === this.props.SortedMessageArray.length-1 ? null : <button className={styles.messageArrow} onClick={this.props.MessageListForward}>
      <svg viewBox="0 0 18 18"className={styles.RightMessageArrow} >
        <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" />
      </svg>
    </button>}
    </ul>
  )
  }
}

export default MessageListNavNum;