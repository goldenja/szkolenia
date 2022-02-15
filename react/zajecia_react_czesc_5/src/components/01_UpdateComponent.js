import { Component } from 'react';
import { VideoList } from './VideoList/VideoList';
import { Player } from './Player/Player';
import videos from '../videos.json';

export default class UpdateComponent extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  render() {
    const { selectedVideo } = this.state;

    return (
      <div>
        <h1>Selected video: {selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        <Player url={selectedVideo} />
      </div>
    );
  }
}
