import React, { Component } from "react";
import axios from "axios";
 class UserCanSearchArtist extends Component {
  state = {
    query: ""
  };
  onSubmitHandler = async e => {
    try {
      e.preventDefault();
      let response = await axios.get("http://localhost:3000/api/v1/artists", {
        params: {
          q: e.target.elements.query.value
        }
      });
      this.setState({
        artists: response.data.artists,
        song: response.data.song
      });
    } catch (error) {
      this.setState({
        errorMessage: error.response.data.error_message
      });
    }
  };
  render() {
    let results;
    let message; 
    if (this.state.errorMessage) {
      message = <p id="errorMessage">{this.state.errorMessage}</p>;
    }
    if (this.state.artists) {
      results = this.state.artists.map(artist => {
        return (
          <div id={"artist-" + artist.name} key={artist.name}>
            <p id="artistName">{artist.name}</p>
            <p id="genre">{artist.genre}</p>{" "}
            <p id="songName">{artist.song.name}</p>{" "}
          </div>
        );
      });
    }

    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <input id="search-field" name="query" />
          <button type="submit" id="search">
            Search Artist
          </button>
        </form>
        <div>
          {results}
          {message}
        </div>
      </>
    );
  }
}
export default UserCanSearchArtist;
