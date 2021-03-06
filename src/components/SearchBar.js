import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props); 
    
    this.state = {
      term: ''
    };
  }

  render() {
      return (
        <div className="searchBar">
          <input onChange = {event => this.onInputChange(event.target.value)} />
        </div>         
      );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}//end of class

export default SearchBar;