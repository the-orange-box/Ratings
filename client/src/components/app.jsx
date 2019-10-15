import React from 'react';
import Axios from 'axios';
import Review from './review.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hello: "",
      reviews: []
    }
    this.updateRender = this.updateRender.bind(this)
    this.getHello = this.getHello.bind(this)
  }
  updateRender(update) {
    this.setState({             
      reviews: update     //Remember res stores the 'send' data in a data obj
    })
    console.log("Updating Render ",this.state)
  }
  
  getHello(){
    console.log("Getting Reviews")
    var data = [];
    Axios.get('/ratings')
      .then(function (response) {
        // handle success
        console.log(response.data);
        data = response.data;
        console.log("this is :", response.data[0].hostIcon)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
      this.updateRender(data);
  }

  componentDidMount() {
    // this.setState({
    //     movies : Module         //Get movies from dummyData
    //   })
      this.getHello();
  }

  render() {
    return (
      <div>
        <Review />
      </div>
    )
  }
}

export default App;