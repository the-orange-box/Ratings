import React from 'react';
import ReviewDisplay from './reviewDisplay.jsx';
import ReviewRating from './reviewRating.jsx';
import SearchBar from './searchBar.jsx';
import MessageListNav from './messageListNav.jsx';

class Review extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentMessageList: 0
        }
        this.calculateAverage = this.calculateAverage.bind(this)
        this.MessageListForward = this.MessageListForward.bind(this)
        this.MessageListBack = this.MessageListBack.bind(this)
        this.RenderDisplay = this.RenderDisplay.bind(this)
        this.MessageListSet = this.MessageListSet.bind(this)
    }

    calculateAverage(){
        var totalResult = this.props.ratingAverages.Communication + this.props.ratingAverages.Checkin + this.props.ratingAverages.Accuracy + this.props.ratingAverages.Value + this.props.ratingAverages.Location + this.props.ratingAverages.Cleanliness;
        totalResult = (totalResult / 6).toFixed(2);
        console.log("Calculating Total Average: ", totalResult)
        return totalResult;
    }

    MessageListForward(event){
        if (this.state.currentMessageList < this.props.SortedMessageArray.length -1) {
            var result = parseInt(this.state.currentMessageList) + 1;
            this.setState({
                currentMessageList: result
              })
            console.log('MessageList Add', this.state.currentMessageList);
        }
    }

    MessageListBack(event){
        if (this.state.currentMessageList > 0) {
            var result = parseInt(this.state.currentMessageList) - 1;
            this.setState({
                currentMessageList: result
              })
            console.log('MessageList Subtracted', this.state.currentMessageList);
        }
    }

    MessageListSet(event){
            this.setState({
                currentMessageList: parseInt(event.target.value)
              })
            console.log('MessageList Set', event.target.value);
        }

    RenderDisplay(){
        if (true) {
            return this.props.SortedMessageArray[this.state.currentMessageList]
        }
    }

    render() {
        console.log("Rendering Reviews")
        console.log("Review.jsx props are: ", this.props.SortedMessageArray)
        return (
            <div style={{width: 648}}>
                <div className="separator-bar" style={ {marginTop: 24,marginBottom: 24} }>
                    <hr style={{ color: '#FFFFFF', backgroundColor: '#FFFFFF', height: .0, borderColor : '#FFFFFF' }} />
                </div>
                <div style={{width: 648, height: 76}}>
                    <h2 className="hello" style={ {color: '#484848', fontSize: 24, fontWeight: 600, fontFamily: "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif", lineHeight: 1.25, paddingtop: 2, paddingBottom: 2,margin: 0, marginBottom: 20} }>Reviews</h2>
                    <div style={ {height: 38, color: '#484848', fontSize: 18, fontWeight: 600, fontFamily: "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif", lineHeight: 1.25, paddingtop: 2,margin: 0} }>
                    <span className="star"></span><span>{this.calculateAverage()} <span className='reviewDiv'></span><span className='reviewCount'>{this.props.reviews.length}</span><span className='reviewReview'>{" reviews"}</span><span className="test"><SearchBar /></span></span>
                    </div>
                </div>
                <div className="separator-bar" style={ {marginTop: 17, marginBottom: 15} }>
                    <hr style={{ color: '#FFFFFF', backgroundColor: '#FFFFFF', height: .0, borderColor : '#FFFFFF' }} />
                </div>
                    <ReviewRating ratingAverages={this.props.ratingAverages}/>
                <div className="spacing" style={ {marginTop: 10,marginBottom: 24} }>
                </div>
                <div>
                    <ReviewDisplay reviews={this.RenderDisplay()} currentMessageList={this.state.currentMessageList} fulldata={this.props.fulldata}/>
                </div>
                <MessageListNav SortedMessageArray={this.props.SortedMessageArray} currentMessageList={this.state.currentMessageList} MessageListBack={this.MessageListBack} MessageListForward={this.MessageListForward} MessageListSet={this.MessageListSet}/>
            </div>
        )
    }
}

export default Review;

