import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';
import './App.css';

// const API_KEY = 'AIzaSyD9Fc8oaYiiJ4roIjy2-vmQxbhw6AM2pys';
const API_KEY = 'AIzaSyAjnQPgTgGeOJkupevGhflPWnkyRFm2bBg';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('pcb cut');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render () {

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300 );

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} /> 
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />      
      </div>
    );
  }  
}

ReactDOM.render(
  <App />, document.getElementById('root')
);