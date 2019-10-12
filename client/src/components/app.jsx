import React from 'react';
import Axios from 'axios';


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hello: "Hello World"
        }
        this.updateRender = this.updateRender.bind(this)
    }
    updateRender(update) {
        console.log("Updating Render ",this.state)
        this.setState({             
            hello: update     //Remember res stores the 'send' data in a data obj
        })
    }
    
    getHello(){
      Axios.get('/test')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
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
            {this.state.hello}
        </div>
      )
    }
  }

export default App;