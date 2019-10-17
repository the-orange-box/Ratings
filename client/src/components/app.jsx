import React from 'react';
import Axios from 'axios';
import Review from './review.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hello: "",
      fulldata: [],
      reviews: [],
      ratingAverages: {
        communication: 0.1,
        accuracy: 0.1,
        location: 0.1,
        checkin: 0.1,
        value: 0.1,
        Cleanliness: 0.1
      }
    }
    this.updateRender = this.updateRender.bind(this)
    this.getHello = this.getHello.bind(this)
  }
  updateRender(update) {
    console.log("Updating Render ",this.state)
    this.setState({
      fulldata: update[0],     //Remember res stores the 'send' data in a data obj
      ratingAverages: update[0].ratingAverages,
      reviews: update[0].reviews
    })
  }

  getHello(){
    var self = this;
    console.log("Getting Reviews")
    var data = [];
    // Axios.get('/ratings') //Gets 'real' data from database
    Axios.get('/test') //Gets fake data for development
      .then(function (response) {
        console.log(response.data);
        data = response.data;
        console.log("this is server response:", data)
        self.updateRender(data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  componentDidMount() {
      this.getHello();
  }

  render() {
    return (
      <div>
        <Review fulldata={this.state.fulldata} ratingAverages={this.state.ratingAverages} reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default App;