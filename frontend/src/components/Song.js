import React from 'react';

const Song = ({song}) => {
  return (
    <tr className="song">
      <td>{song.title}</td>
      <td>{song.singer}</td>
      <td><button>Play</button></td>
    </tr>
  )
  
} //end of Song functional component

export default Song;
