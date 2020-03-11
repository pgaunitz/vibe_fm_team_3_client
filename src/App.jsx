import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    query: ""
  };

  onSubmitHandler = async e => {
    e.preventDefault();
    let response = await axios.get("http://localhost:3000/api/v1/tracks", {
      params: {
        q: e.target.elements.query.value
      }
    });

    if (response.status == 200) {
      this.setState({
        tracks: response.data.tracks
      })
    } else {
      debugger
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          id="search-field"
          name="query"
          onChangeHandler={this.onChangeHandler}
        />
        <button type="submit" id="search">
          {" "}
          Search
        </button>
      </form>
    );
  }
}

export default App;
