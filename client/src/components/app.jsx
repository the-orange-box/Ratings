import React from 'react';
import Axios from 'axios';
import Review from './review.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchString: '',
      hostIcon: '',
      hostName: '',
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
    this.setSearch = this.setSearch.bind(this)
  }

  setSearch(event, state){
    event.preventDefault();
    this.setState({
      searchString: state
    })
  }

  updateRender(update) {
    this.setState({
      hostName: update[0].hostName,
      hostIcon: update[0].hostIcon,
      ratingAverages: update[0].ratingAverages,
      reviews: update[0].reviews
    })
    //console.log("Updating Render ",this.state)
  }

  getHello(){
    //console.log("Getting Reviews")
    var data = [];
    Axios.get('http://localhost:3002/ratings' + window.location.pathname) //Gets 'real' data from database
    // Axios.get('http://localhost:3002/test/test') //Gets fake data for development
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
        if (this.state.searchString.length > 0 && this.state.reviews[i].messageText.includes(this.state.searchString)){
          tempArray.push(this.state.reviews[i])
        }
        if (this.state.searchString.length === 0){
          tempArray.push(this.state.reviews[i])
        }
        if (tempArray.length === 7) {
            resultArray.push(tempArray.splice(0,7))
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
    // console.log("This is Search String: ",this.state.searchString)
    return (
      <div>
        <Review hostIcon={this.state.hostIcon} hostName={this.state.hostName} SortedMessageArray={this.SortMessageList()} ratingAverages={this.state.ratingAverages} reviews={this.state.reviews} setSearch={this.setSearch}/>
      </div>
    )
  }
}

export default App;