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
        Communication: 0.0,
        Cleanliness: 0.0,
        Accuracy: 0.0,
        Location: 0.0,
        Checkin: 0.0,
        Value: 0.0
      }
    }
    this.updateRender = this.updateRender.bind(this)
    this.getHello = this.getHello.bind(this)
    this.SortMessageList = this.SortMessageList.bind(this)
  }
  updateRender(update) {
    this.setState({
      fulldata: update[0],     //Remember res stores the 'send' data in a data obj
      ratingAverages: update[0].ratingAverages,
      reviews: update[0].reviews
    })
    //console.log("Updating Render ",this.state)
  }

  getHello(){
    //console.log("Getting Reviews")
    var data = [];
    // Axios.get('/ratings') //Gets 'real' data from database
    Axios.get('http://localhost:3002/test/test') //Gets fake data for development
      .then((response) => {
        data = response.data;
        //console.log("this is server response:", data)
        this.updateRender(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  SortMessageList(){
    let resultArray=[]
    let tempArray=[]
    for(let i=0; i < this.state.reviews.length; i++) {
        tempArray.push(this.state.reviews[i])
        if (tempArray.length === 7) {
            resultArray.push(tempArray.splice(0,7 ))
        }
    }
    resultArray.push(tempArray);
    //console.log("Sorted Message List:", resultArray)

    return resultArray;
  }

  componentDidMount() {
      this.getHello();
  }

  render() {
    return (
      <div>
        <Review fulldata={this.state.fulldata} SortedMessageArray={this.SortMessageList()} ratingAverages={this.state.ratingAverages} reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default App;