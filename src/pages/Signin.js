import React from "react";
import Input from "../basicComponents/Input";
import Button from "../basicComponents/Button";
import Label from "../basicComponents/Label";
import { connect } from "react-redux";
import { signin } from "../store/actions/authActions";
import { Link } from "react-router-dom";

class Signin extends React.Component {
  state = {
    email: "",
    name: "",
    password: ""
  };

  onInputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signin = e => {
    e.preventDefault();
    this.props.signin(this.state);
  };

  render() {
    return (
      <div>
        <h3>Signin</h3>
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
        <Button onClick={this.signin}>Sign in</Button>
        <Link to="/signup">Go to signup</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signinError: state.auth.signinError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signin: credentials => dispatch(signin(credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
