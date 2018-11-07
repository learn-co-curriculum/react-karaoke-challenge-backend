import React, { Component } from 'react';
import Header from '../components/Header';
import KaraokeContainer from './KaraokeContainer';

class App extends Component {

  constructor() {
    super()
    this.state = {
      songs: []
    }
  } //end of constructor

  componentDidMount() {
    fetch('http://localhost:4000/users/1/songs')
      .then(response => response.json())
      .then((songObj)=> {
        this.setState({
          songs: songObj
        })
      })

  }//end of component function

  render() {
    return (
      <div className="app">
        <Header />
        <KaraokeContainer songs={this.state.songs} />
      </div>
    );
  }
}

export default App;
