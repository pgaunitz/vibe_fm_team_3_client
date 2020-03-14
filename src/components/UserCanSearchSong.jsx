import React, { Component } from "react";
import axios from "axios";

class UserCanSearchSong extends Component {
  state = {
    query: ""
  };

  onSubmitHandler = async e => {
    try {
      e.preventDefault();
      let response = await axios.get("http://localhost:3000/api/v1/tracks", {
        params: {
          q: e.target.elements.query.value
        }
      });
      this.setState({
        tracks: response.data.tracks
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
    if (this.state.tracks) {
      results = this.state.tracks.map(track => {
        return (
          <div id={"track-" + track.spotify_id} key={track.spotify_id}>
            <p id="songName">{track.name}</p>{" "}
            <p id="artistName">{track.artist}</p>
          </div>
        );
      });
    }

    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <input id="search-field" name="query" />
          <button type="submit" id="search">
            Search Track
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
export default UserCanSearchSong;
