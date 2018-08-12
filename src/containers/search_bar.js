import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVideos } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick(){
    this.props.getVideos(this.state.term);
  }

  render() {
    return (
      <div className="search-bar">
        <span>Youtube Search</span>
        <input
          placeholder='search for videos here....'
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <button className='btn btn-secondary' type='submit' onClick={this.onButtonClick}>Submit</button>
        <hr />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getVideos},dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);
