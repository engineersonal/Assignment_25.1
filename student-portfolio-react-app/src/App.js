import React, { Component } from "react";
import "./App.css";
import User from "./User";
//Class Component App passing a user details to another class component User
class App extends Component {
  skills = ["sleeping", "writing codes"];
  render() {
    return (
      <div>
        <h1>Hi, This is a React App</h1>
        <User name="Som" age="78" skills={this.skills} />
      </div>
    );
  }
}

export default App;
