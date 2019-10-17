import React from 'react';
import ReviewDisplay from './reviewDisplay.jsx'
import ReviewRating from './reviewRating.jsx'

class Review extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hello: "Hello World"
        }
    }
    render() {
        console.log("Rendering Reviews")
        console.log("Review.jsx props are: ", this.props.reviews)
        return (
            <div style={{width: 648}}>
                <div className="separator-bar" style={ {marginTop: 24,marginBottom: 24} }>
                    <hr style={{ color: '#EBEBEB', backgroundColor: '#EBEBEB', height: .0, borderColor : '#EBEBEB' }} />
                </div>
                <div style={{width: 648, height: 88}}>
                    <h2 className="hello" style={ {color: '#484848', fontSize: 24, fontWeight: 600, fontFamily: "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif", lineHeight: 1.25, paddingtop: 2, paddingBottom: 2,margin: 0, marginBottom: 20} }>Reviews</h2>
                    <div style={ {height: 42, color: '#484848', fontSize: 18, fontWeight: 600, fontFamily: "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif", lineHeight: 1.25, paddingtop: 2, paddingBottom: 2,margin: 0} }>
                    *{this.props.fulldata.totalRatingAverages} | {this.props.fulldata.totalReviews} reviews <form className="searchbox">Search Placeholder</form>
                    {/* *4.91      |       896 reviews <form className="searchbox">Search Placeholder</form> */}
                    </div>
                </div>
                <div className="separator-bar" style={ {marginBottom: 15} }>
                    <hr style={{ color: '#EBEBEB', backgroundColor: '#EBEBEB', height: .0, borderColor : '#EBEBEB' }} />
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
//648 px wide
//this should be for display a single review
// box-sizing: border-box;
//     line-height: 1.43;
//
//margin-bottom: 24px;d



export default Review;

// background-repeat: space no-repeat !important;
//     display: block !important;
//     will-change: transform !important;
//     background-size: 14px 12px !important;
//     height: 12px !important;
//     background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='%23008489'%3E%3Cpath d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/%3E%3C/svg%3E") !important;
//     transform: none !important;

// }