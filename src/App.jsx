import React, { Component } from "react";
import UserCanSearchSong from "./components/UserCanSearchSong";
import UserCanSearchArtist from "./components/UserCanSearchArtist";
import FacebookLogin from "./components/FacebookLogin";
import LoginForm from "./Components/LoginForm";

class App extends Component {
  state = {
    renderLoginForm: false
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const renderLogin = this.state.renderLoginForm ? (
      <LoginForm />
    ) : (
      <button
        id="login"
        onClick={() => this.setState({ renderLoginForm: true })}
      >
        Login
      </button>
    return (
      <>
        <div>
          <InputFields onChangeHandler={this.onChangeHandler} />
          {renderLogin}
        </div>

        <div>
          <FacebookLogin />
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