import React from 'react';
import RatingsBar from './progressBar.jsx';

class ReviewRatings extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        console.log("Rendering ReviewsRatings", this.props.ratingAverages)
        console.log("Communication is: ", this.props.ratingAverages.Communication)
        console.log("Check-in is: ", this.props.ratingAverages.Checkin)
        console.log("Accuracy is: ", this.props.ratingAverages.Accuracy)
        console.log("Value is: ", this.props.ratingAverages.Value)
        console.log("Location is: ", this.props.ratingAverages.Location)
        console.log("Cleanliness is: ", this.props.ratingAverages.Cleanliness)
        return (
            <div style={{width: 648, height:88}}>
                <div>
                    <span className="box" style={{flex: 1, flexDirection: 'row'}}>
                        <span className="ratingText" style={{width: 180, height: 33,marginRight: 10}}>Communication</span>
                        <span style={{width: 170, height: 33,marginRight: 38}}><RatingsBar rating={this.props.ratingAverages.Communication}/></span>
                        <span className="ratingText" style={{width: 180, height: 33, marginRight: 24}}>Check-in</span>
                        <span style={{width: 170, height: 33,marginRight: 65}}><RatingsBar rating={this.props.ratingAverages.Checkin}/></span>
                    </span>
                </div>
                <div>
                    <span className="box" style={{flex: 1, flexDirection: 'row'}}>
                        <span className="ratingText" style={{width: 180, height: 33,marginRight: 10}}>Accuracy</span>
                        <span style={{width: 170, height: 33,marginRight: 38}}><RatingsBar rating={this.props.ratingAverages.Accuracy}/></span>
                        <span className="ratingText" style={{width: 180, height: 33, marginRight: 24}}>Value</span>
                        <span style={{width: 170, height: 33,marginRight: 65}}><RatingsBar rating={this.props.ratingAverages.Value}/></span>
                    </span>
                </div>
                <div>
                    <span className="box" style={{flex: 1, flexDirection: 'row'}}>
                        <span className="ratingText" style={{width: 180, height: 33, marginRight: 10}}>Location</span>
                        <span style={{width: 170, height: 33,marginRight: 38}}><RatingsBar rating={this.props.ratingAverages.Location}/></span>
                        <span className="ratingText" style={{width: 180, height: 33, marginRight: 24}}>Cleanliness</span>
                        <span style={{width: 170, height: 33,marginRight: 65}}><RatingsBar rating={this.props.ratingAverages.Cleanliness}/></span>
                    </span>
                </div>
            </div>
        )
    }
}


export default ReviewRatings;