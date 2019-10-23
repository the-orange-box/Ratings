import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: ""
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(event) {
      this.setState({
        search: event.target.value
      });
      //console.log("Rendering SearchBar", this.state.search)
    }

    render() {
        return (
          <form className="searchBoxForm" value={this.state.search} onSubmit={this.props.setSearch} onChange={this.handleSearch}>
          <svg viewBox="0 0 24 24" role="presentation" focusable="false" className="glass" >
            <path d="m10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c .3.3.8.3 1.1 0s .4-.8.1-1.1" />
          </svg>
          <input className="searchBoxInput"
            placeholder="Search reviews"
            ref={input => this.search = input}
          />
          </form>
        )
    }
}

export default SearchBar;