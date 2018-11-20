import React from "react";
import Input from "../basicComponents/Input";
import Button from "../basicComponents/Button";
import Label from "../basicComponents/Label";
import { connect } from "react-redux";
import { signup } from "../store/actions/authActions";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  state = {
    email: "",
    name: "",
    password: ""
  };

  onInputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signup = e => {
    e.preventDefault();

    this.props.signup(this.state);
  };

  render() {
    return (
      <div>
        <h3>Signup</h3>
        <Label>Name</Label>
        <Input
          name="name"
          type="text"
          value={this.state.name}
          onInputChangeHandler={this.onInputChangeHandler}
        />
        <Label>Email</Label>
        <Input
          name="email"
          type="email"
          value={this.state.email}
          onInputChangeHandler={this.onInputChangeHandler}
        />
        <Label>Password</Label>
        <Input
          name="password"
          type="password"
          value={this.state.password}
          onInputChangeHandler={this.onInputChangeHandler}
        />
        <Button onClick={this.signup}>Create Account</Button>
        <Link to="/signin">Go to signin</Link>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     auth: state.firebase.auth
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    signup: credentials => dispatch(signup(credentials))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Signup);
