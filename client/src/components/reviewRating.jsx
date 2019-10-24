import React from 'react';
import RatingsBar from './progressBar.jsx';
import styles from './modules/reviewRating.module.css'

class ReviewRatings extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className={styles.lineLength}>
                <div>
                    <span className={styles.box}>
                        <span className={styles.ratingText1}>Communication</span>
                        <span className={styles.ratingsBar1}><RatingsBar rating={this.props.ratingAverages.Communication}/></span>
                        <span className={styles.ratingText2}>Check-in</span>
                        <span className={styles.ratingsBar2}><RatingsBar rating={this.props.ratingAverages.Checkin}/></span>
                    </span>
                </div>
                <div>
                    <span className={styles.box}>
                        <span className={styles.ratingText1}>Accuracy</span>
                        <span className={styles.ratingsBar1}><RatingsBar rating={this.props.ratingAverages.Accuracy}/></span>
                        <span className={styles.ratingText2}>Value</span>
                        <span className={styles.ratingsBar2}><RatingsBar rating={this.props.ratingAverages.Value}/></span>
                    </span>
                </div>
                <div>
                    <span className={styles.box}>
                        <span className={styles.ratingText1}>Location</span>
                        <span className={styles.ratingsBar1}><RatingsBar rating={this.props.ratingAverages.Location}/></span>
                        <span className={styles.ratingText2}>Cleanliness</span>
                        <span className={styles.ratingsBar2}><RatingsBar rating={this.props.ratingAverages.Cleanliness}/></span>
                    </span>
                </div>
            </div>
        )
    }
}


export default ReviewRatings;