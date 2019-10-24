import React from 'react';
import MessageListNavNum from './messageListNavNum.jsx'

class MessageListNav extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    //console.log("Rendering MessageListNav", this.props.SortedMessageArray)
    return(
      <div style={{flex: 1, flexDirection: 'row'}}>
        <MessageListNavNum currentMessageList={this.props.currentMessageList} SortedMessageArray={this.props.SortedMessageArray} MessageListBack={this.props.MessageListBack} MessageListForward={this.props.MessageListForward} MessageListSet={this.props.MessageListSet}/>
      </div>
    )
  }
}

export default MessageListNav;