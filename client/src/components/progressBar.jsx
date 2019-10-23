import React from 'react';

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
      <div className="noWrap" style={{width: 648, height:88}}>
        <div className="progressBar">
          <Filler rating={props.rating} />
        </div>
        <text className="ratingNum">{props.rating.toFixed(1)}</text>
      </div>
      )
  }

  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.rating*20}%` }} />
  }


  export default RatingsBar;