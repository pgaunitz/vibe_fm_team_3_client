import React, { Component } from "react";

class App extends Component {

  state={
    query: ''
  }

  onChangeHandler = e => {
    const input = e.target.value
    this.setState({ [e.target.name]: input });
  }

  onSubmitHandler = e => {
    e.preventDefault();
    //this.props.fetchSearchedTracks(this.state.query)
  }

  render() {
    return (
      <form
        onSubmitHandler={this.onSubmitHandler}
      >
        <input
        id="tracks"
        type="text"
        name="query"
        value={this.state.query}
        onChangeHandler={this.onChangeHandler}/>
        <button id="search"> Search</button>
      </form>
    );
  }
}

export default App;
