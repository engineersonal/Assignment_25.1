import React, { Component } from "react";
import PropTypes from "prop-types";
//Class Component User getting the details as props from App component
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age
    };
  }

  incrementAge(value) {
    const tempAge = parseInt(this.state.age, 10) + parseInt(value, 10);
    this.setState({ age: tempAge });
  }

  render() {
    return (
      <div>
        <br />
        <p>
          Your name is {this.props.name} and age is {this.state.age}
        </p>
        <br />
        <h1>Skills</h1>
        <ul>{this.props.skills.map(item => <li> {item} </li>)}</ul>
        <br />
        <button onClick={() => this.incrementAge(3)}>MakemeOlder</button>
      </div>
    );
  }
}

//Validate the props
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string,
  skills: PropTypes.array
};

export default User;
