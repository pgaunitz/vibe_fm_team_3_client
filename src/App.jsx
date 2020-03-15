import React, { Component } from "react";
import UserCanSearchSong from "./components/UserCanSearchSong";
import UserCanSearchArtist from "./components/UserCanSearchArtist";
import FacebookLogin from "./components/FacebookLogin";
import LoginForm from "./Components/LoginForm";

class App extends Component {
  state = {
    renderLoginForm: false,
    authenticated: false,
    message: ""
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  render() {
    const renderLogin = this.state.renderLoginForm ? (
      <LoginForm submitFormHandler={this.onLogin} />
    ) : (
        <button
          id="login"
          onClick={() => this.setState({ renderLoginForm: true })}
        >
          Login
        </button>
      );
      
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