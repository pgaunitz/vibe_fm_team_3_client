import React, { Component } from "react";
import UserCanSearchSong from "./components/UserCanSearchSong";
import UserCanSearchArtist from "./components/UserCanSearchArtist";
import { FacebookProvider, LoginButton } from 'react-facebook';

class App extends Component {
  state = {
    tracks: "",
    artists: ""
  }


  handleResponse = data => {
    debugger;
  } 

  onChangeHandler = e => {
    this.setState( { [e.track.name]: e.track.name });
  };



  render() {
    return (
      <>
      <div>
      <FacebookProvider appId="869256990162492">
        <LoginButton
          scope="email"
          onCompleted={this.handleResponse}
        >
          <span>Login via Facebook</span>
        </LoginButton>
      </FacebookProvider>
      </div>

        <label> Search by track</label>
       {<UserCanSearchSong />}

        <label> Search by artists</label>
        {<UserCanSearchArtist />}
      </>
    );
  }
}

export default App;