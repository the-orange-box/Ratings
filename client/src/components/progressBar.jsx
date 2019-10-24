import React from 'react';
import styles from './modules/progressBar.module.css'

class RatingsBar extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <span>
          <ProgressBar rating={this.props.rating} />
        </span>
      )
    }
  }

  const ProgressBar = (props) => {
    return (
      <div className={styles.noWrap} style={{width: 648, height:88}}>
        <div className={styles.progressBar}>
          <Filler rating={props.rating} />
        </div>
        <text className={styles.ratingNum}>{props.rating.toFixed(1)}</text>
      </div>
      )
  }

  const Filler = (props) => {
    return <div className={styles.filler} style={{ width: `${props.rating*20}%` }} />
  }


  export default RatingsBar;