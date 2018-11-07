import React, { Component } from 'react';

class Filter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: ""
    }
  }

  // handleChange(event) {
  //   const title = event.target.value
  //   this.setState({ title }, () => this.filterList());
  // }
  //
  // filterList() {
  //   let filteredSongs = this.props.songs
  //
  //   filteredSongs.filter((song) {
  //     return song.name; // returns true or false
  //   });
  //   this.setState({
  //     title: filteredSongs
  //   });
  // }

  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input id="title-filter" type="text" onChange={this.handleChange} value={this.state.title}/>
      </div>
    );
  }
}

export default Filter;
