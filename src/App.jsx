import React, { Component } from "react";
import UserCanSearchSong from "./components/UserCanSearchSong";
import UserCanSearchArtist from "./components/UserCanSearchArtist";

class App extends Component {
  state = {
    tracks: "",
    artists: ""
  }
  onChangeHandler = e => {
    this.setState( { [e.track.name]: e.track.name });
  };

  render() {
    return (
      <>
        <label> Search by track</label>
       {<UserCanSearchSong />}

        <label> Search by artists</label>
        {<UserCanSearchArtist />}
      </>
    );
  }
}

export default App;