import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';

class KaraokeContainer extends Component {


  render() {
    const {songs} = this.props;
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter songs={songs}/>
          <SongList songs={songs} />
        </div>
        <KaraokeDisplay />
      </div>
    );
  }

} //end of functional component

export default KaraokeContainer;
