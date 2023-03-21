import React from "react";

class Form extends React.Component {
  state = {
    username: "",
    password: "",
  };

  UsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  PasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  Submit = (event) => {
    event.preventDefault();
  };

  Reset = () => {
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <form onSubmit={this.Submit}>
        <img src="" alt="" />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={this.state.username}
          onChange={this.UsernameChange}
        />
        <img src="" alt="" />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          value={this.state.password}
          onChange={this.PasswordChange}
        />
        <div>
          <button type="submit">Login</button>
          <button type="reset" onClick={this.Reset}>
            Reset
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
