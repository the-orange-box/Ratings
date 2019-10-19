import React from 'react';
import ReviewDisplay from './reviewDisplay.jsx';
import ReviewRating from './reviewRating.jsx';
import SearchBar from './searchBar.jsx';

class Review extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hello: "Hello World"
        }
        this.calculateAverage = this.calculateAverage.bind(this)
    }

    calculateAverage(){
        var totalResult = this.props.ratingAverages.Communication + this.props.ratingAverages.Checkin + this.props.ratingAverages.Accuracy + this.props.ratingAverages.Value + this.props.ratingAverages.Location + this.props.ratingAverages.Cleanliness;
        totalResult = (totalResult / 6).toFixed(2);
        console.log("Calculating Total Average", totalResult)
        return totalResult;
    }

    render() {
        console.log("Rendering Reviews")
        console.log("Review.jsx props are: ", this.props.reviews)
        return (
            <div style={{width: 648}}>
                <div className="separator-bar" style={ {marginTop: 24,marginBottom: 24} }>
                    <hr style={{ color: '#FFFFFF', backgroundColor: '#FFFFFF', height: .0, borderColor : '#FFFFFF' }} />
                </div>
                <div style={{width: 648, height: 76}}>
                    <h2 className="hello" style={ {color: '#484848', fontSize: 24, fontWeight: 600, fontFamily: "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif", lineHeight: 1.25, paddingtop: 2, paddingBottom: 2,margin: 0, marginBottom: 20} }>Reviews</h2>
                    <div style={ {height: 38, color: '#484848', fontSize: 18, fontWeight: 600, fontFamily: "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif", lineHeight: 1.25, paddingtop: 2,margin: 0} }>
                    <span className="star"></span><span>{this.calculateAverage()} <span className='reviewDiv'></span><span className='reviewCount'>{this.props.reviews.length}</span><span className='reviewReview'>{" reviews"}</span><span className="test"><SearchBar /></span></span>
                    {/* *4.91      |       896 reviews <form className="searchbox">Search Placeholder</form> */}
                    </div>
                </div>
                <div className="separator-bar" style={ {marginTop: 17, marginBottom: 15} }>
                    <hr style={{ color: '#FFFFFF', backgroundColor: '#FFFFFF', height: .0, borderColor : '#FFFFFF' }} />
                </div>
                    <ReviewRating ratingAverages={this.props.ratingAverages}/>
                <div className="spacing" style={ {marginTop: 10,marginBottom: 24} }>
                </div>
                <div>
                    <ReviewDisplay reviews={this.props.reviews}/>
                </div>
            </div>
        )
    }
}

export default Review;

