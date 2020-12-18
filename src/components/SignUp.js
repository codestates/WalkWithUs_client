import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";
import backgroundimg2 from "../image/backgroundimg2.jpg";
import TextField from "@material-ui/core/TextField";
import swal from 'sweetalert';



// const IP_ADDRESS = "127.0.0.1";
const IP_ADDRESS = "3.35.93.83";



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
    const { isLogin } = this.props;

    if (!isLogin) {

      return (
        <div className="signupcontainer">
          <div>
            <img className="backgroundimg2" src={backgroundimg2} alt="profile"></img>
          </div>
          <h1 className="signup">Sign up</h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email && username && password.length <= 6) {
                swal({
                  title: "Info",
                  text: "비밀번호는 7자리 이상이어야 합니다",
                  icon: "info",
                })
              }

              else if (email && username && password.length >= 7) {
                axios
                  .post(`http://${IP_ADDRESS}:3001/user/signup`, {
                    email: email,
                    password: password,
                    username: username,
                  })
                  .then((res) => {
                    this.props.history.push(`/`);
                    swal({
                      title: "Success",
                      text: "회원가입이 완료되었습니다!",
                      icon: "success",
                    })
                  })
                  .catch((err) => swal({
                    title: "Fail",
                    text: "이미 가입된 회원입니다",
                    icon: "error",
                  }));
              } else {
                swal({
                  title: "Fail",
                  text: "회원정보를 모두 입력해 주세요",
                  icon: "error",
                })
              }
            }}
          >
            <div className="alltext">
              <div className="">
                <TextField
                  className="email2"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  onChange={this.handleInputValue("email")}
                ></TextField>
              </div>
              <div>
                <TextField
                  className="password2"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  onChange={this.handleInputValue("password")}
                ></TextField>
              </div>
              <div>
                <TextField
                  className="username2"
                  type="text"
                  placeholder="닉네임을 입력하세요"
                  onChange={this.handleInputValue("username")}
                ></TextField>
              </div>
            </div>


            <button className="submit2" type="submit">
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default withRouter(SignUp);
