import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hello: "Hello World"
        }
    }

    render() {
        console.log("Rendering SearchBar")
        return (
          <span  className="searchbox1">
          <form className="searchbox2">
          <input className="searchbox3"
            placeholder="Search reviews"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>
          </form>
          </span>
        )
    }
}

export default SearchBar;