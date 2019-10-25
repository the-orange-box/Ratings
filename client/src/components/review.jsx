import React from 'react';
import ReviewDisplay from './reviewDisplay.jsx';
import ReviewRating from './reviewRating.jsx';
import SearchBar from './searchBar.jsx';
import MessageListNav from './messageListNav.jsx';
import styles from './modules/review.module.css';

class Review extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentMessageList: 0,
            searchString: ""
        }
        this.calculateAverage = this.calculateAverage.bind(this)
        this.MessageListForward = this.MessageListForward.bind(this)
        this.MessageListBack = this.MessageListBack.bind(this)
        this.RenderDisplay = this.RenderDisplay.bind(this)
        this.MessageListSet = this.MessageListSet.bind(this)
        this.setSearch = this.setSearch.bind(this)
    }

    setSearch(event){
        event.preventDefault()
        var temp = event.target
        console.log("temp is: ", temp)
        console.log("temp is: ", temp.value)
        
        this.setState({                      //Search isnt implemented yet
            searchString: event.target.value
        })
        console.log(this.state.searchString)
    }

    calculateAverage(){
        var totalResult = this.props.ratingAverages.Communication + this.props.ratingAverages.Checkin + this.props.ratingAverages.Accuracy + this.props.ratingAverages.Value + this.props.ratingAverages.Location + this.props.ratingAverages.Cleanliness;
        totalResult = (totalResult / 6).toFixed(2);
        //console.log("Calculating Total Average: ", totalResult)
        return totalResult;
    }

    MessageListForward(event){
        if (this.state.currentMessageList < this.props.SortedMessageArray.length -1) {
            var result = parseInt(this.state.currentMessageList) + 1;
            this.setState({
                currentMessageList: result
              })
            //console.log('MessageList Add', this.state.currentMessageList);
        }
    }

    MessageListBack(event){
        if (this.state.currentMessageList > 0) {
            var result = parseInt(this.state.currentMessageList) - 1;
            this.setState({
                currentMessageList: result
              })
            //console.log('MessageList Subtracted', this.state.currentMessageList);
        }
    }

    MessageListSet(event){
            this.setState({
                currentMessageList: parseInt(event.target.value)
              })
            //console.log('MessageList Set', event.target.value);
        }

    RenderDisplay(){
        return this.props.SortedMessageArray[this.state.currentMessageList]
    }

    render() {
        //console.log("Rendering Reviews" , this.props.SortedMessageArray)
        return (
            <div className={styles.reviewWidth1}>
                <div className={styles.separatorBarTop}>
                    <hr className={styles.hrStyle} />
                </div>
                <div className={styles.reviewWidth2}>
                    <h2 className={styles.title}>Reviews</h2>
                    <div className={styles.reviewAverages}>
                    <span className={styles.star}></span>
                    <span>
                        {this.calculateAverage()} 
                            <span className={styles.reviewDiv}></span>
                            <span className={styles.reviewCount}>{this.props.reviews.length}</span>
                            <span className={styles.reviewReview}>{" reviews"}</span>
                            <span><SearchBar setSearch = {this.setSearch}/></span>
                    </span>
                    </div>
                </div>
                <div className={styles.separatorBarMid}>
                    <hr className={styles.hrStyle} />
                </div>
                    <ReviewRating ratingAverages={this.props.ratingAverages}/>
                <div className={styles.reviewSpacing} >
                </div>
                <div>
                    <ReviewDisplay reviews={this.RenderDisplay()} currentMessageList={this.state.currentMessageList} fulldata={this.props.fulldata} searchString={this.state.searchString}/>
                </div>
                <MessageListNav SortedMessageArray={this.props.SortedMessageArray} currentMessageList={this.state.currentMessageList} MessageListBack={this.MessageListBack} MessageListForward={this.MessageListForward} MessageListSet={this.MessageListSet}/>
            </div>
        )
    }
}

export default Review;

