import React from 'react';
import style from './modules/searchBar.module.css'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: ""
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(event) {
      // console.log(event.target)
      this.setState({
        search: event.target.value
      });
      console.log(this.state)
      //console.log("Rendering SearchBar", this.state.search)
    }

    render() {
        return (
          <form className={style.searchBoxForm} onSubmit={this.props.setSearch}>
          <svg viewBox="0 0 24 24" role="presentation" focusable="false" className={style.glass} >
            <path d="m10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c .3.3.8.3 1.1 0s .4-.8.1-1.1" />
          </svg>
          <input className={style.searchBoxInput}
            type="Text"
            placeholder="Search reviews"
            onChange={this.handleSearch}
            value={this.state.search}
          />
          </form>
        )
    }
}

export default SearchBar;