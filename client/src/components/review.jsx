import React from 'react';

class Review extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hello: "Hello World"
        }
    }
    render() {
        console.log("Rendering Reviews")
        return (
          <div>
              {this.state.hello}
          </div>
        )
    }
}
//this should be for display a single review

export default Review;