import React from 'react';
import Song from '../components/Song'
import Filter from '../components/Filter'

const SongList = ({songs}) => {

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>
        {songs.map(song => <Song key={song.id} song={song} />)}
        <Filter/>
      </tbody>
    </table>
  )
}

export default SongList;
