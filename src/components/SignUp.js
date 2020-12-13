import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";
// const IP_ADDRESS = "52.78.59.129";
const IP_ADDRESS = "localhost"

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  render() {
    const { email, password, username } = this.state;
    const { isLogin, userInfo } = this.props;
    if (!isLogin) {
      return (
        <div>
          <center>
            <h1 className="signup">Sign up</h1>
            <br />
            <br />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email && password && username) {
                  axios
                    .post(`http://${IP_ADDRESS}:3001/user/signup`, {
                      email: email,
                      password: password,
                      username: username,
                    })
                    .then((res) => {
                      this.props.history.push(`/`);
                      alert("회원가입이 완료되었습니다!");
                    })
                    .catch((err) =>

                      alert("You are already a registered member")

                    );
                } else {
                  alert("회원정보를 모두 입력해 주세요");
                }
              }}
            >
              <input
                type="email"
                placeholder="What is your email?"
                onChange={this.handleInputValue("email")}
              ></input>
              <input
                type="password"
                placeholder="What is your password?"
                onChange={this.handleInputValue("password")}
              ></input>
              <input
                type="username"
                placeholder="What is your username?"
                onChange={this.handleInputValue("username")}
              ></input>
              <button type="submit" className="submit">
                Submit
              </button>
              <h2 className="welcome">welcome to walk with us!</h2>
            </form>
          </center>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default withRouter(SignUp);
