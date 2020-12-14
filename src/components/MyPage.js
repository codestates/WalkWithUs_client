import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MyPage.css";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import { withRouter } from "react-router-dom";
import backgroundimg from "../image/backgroundimg.jpg";

const IP_ADDRESS = "127.0.0.1";

// const IP_ADDRESS = "52.78.59.129";


const axiosInstance = axios.create({
  withCredentials: true,
});
class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.userInfo.email,
      username: this.props.userInfo.username,
      password: "",
      socialinfo: this.props.userInfo.socialinfo,
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  componentDidMount() {
    const userInfo = sessionStorage.getItem("userInfo");
    if (userInfo) {
      this.setState({
        email: JSON.parse(userInfo).email,
        username: JSON.parse(userInfo).username,
        socialinfo: JSON.parse(userInfo).socialinfo,
      });
    }
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  render() {
    const { email, username, password, socialinfo } = this.state;
    const { isLogin, userInfo, handleIsLoginChange } = this.props;
    if (isLogin) {
      return (
        <div className="mypageContainer">

          <div>
            <img className="backgroundimg" src={backgroundimg}></img>
          </div>

          <h1 className="mypage">My page</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              return axios

                .put(`http://${IP_ADDRESS}:3001/user/useredit`, {

                  email: email,
                  username: username,
                  password: password,
                  socialinfo: socialinfo,
                })
                .then((res) => {
                  handleIsLoginChange(JSON.parse(res.config.data));
                  alert("회원정보가 수정되었습니다");
                })
                .catch((err) => {
                  alert("비밀번호를 확인해 주세요");
                  console.log(err);
                });
            }}
          >

            <div className="textall">
              <div className="">
                <TextField className="email" value={`${email}`}></TextField>
              </div>
              <div>
                <TextField
                  className="username"
                  type="username"
                  value={`${username}`}
                  placeholder="닉네임을 입력하세요"
                  onChange={this.handleInputValue("username")}
                ></TextField>
              </div>

              <div>
                <TextField
                  className="socialinfo"
                  type="text"
                  value={socialinfo ? socialinfo : ``}
                  placeholder="소셜 정보를 입력하세요"
                  onChange={this.handleInputValue("socialinfo")}
                ></TextField>
              </div>
              <div>
                <TextField
                  className="password"

                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  onChange={this.handleInputValue("password")}
                ></TextField>

              </div>
            </div>

            <button type="submit" className="editbtn">
              Edit
            </button>

          </form>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default withRouter(MyPage);
