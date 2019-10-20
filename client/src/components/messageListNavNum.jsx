import React from 'react';


class MessageListNavNum extends React.Component {
  constructor(props){
      super(props)
      this.state = {
      }
  }

  render() {
  console.log("Rendering MessageListNavNum: ",this.props.SortedMessageArray)
  console.log("currentMessageList: ", this.props.currentMessageList)
  return (
    <ul className="messageList">
    <button className="messageArrow" onClick={this.props.MessageListBack}>
      <svg viewBox="0 0 18 18" className="LeftMessageArrow">
        <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" />
      </svg>
    </button>
    {this.props.SortedMessageArray.map((item,key) => key < 7 ?
      key === this.props.currentMessageList ? <li><button className="messageButtonActive" value={key} onClick={this.props.MessageListSet}>{key + 1}</button></li> :
      <li><button className="messageButton" value={key} onClick={this.props.MessageListSet}>{key + 1}</button></li> : console.log("false ", key)
    )}
    <button className="messageArrow" onClick={this.props.MessageListForward}>
      <svg viewBox="0 0 18 18"className="RightMessageArrow" >
        <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" />
      </svg>
    </button>
    </ul>
  )
  }
}

export default MessageListNavNum;