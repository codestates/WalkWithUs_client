import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MyPage.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import backgroundimg from "../image/backgroundimg.jpg";
//const IP_ADDRESS = "127.0.0.1";
const IP_ADDRESS = "52.78.59.129";
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
          <h1 className="mypage">My page</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              return axios
                .put(`https://${IP_ADDRESS}:3001/user/useredit`, {
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
            <div>
              <img className="backgroundimg" src={backgroundimg}></img>
            </div>
            <div className="textall">
              <p>
                <TextField
                  className="email"
                  input
                  placeholder={
                    this.props.userInfo.email
                      ? this.props.userInfo.email
                      : "닉네임을 입력하세요"
                  }
                  onChange={this.handleInputValue("email")}
                ></TextField>
              </p>
              <p>
                <TextField
                  className="username"
                  input
                  placeholder={
                    this.props.userInfo.username
                      ? this.props.userInfo.username
                      : "사용자 이름을 입력하세요"
                  }
                  onChange={this.handleInputValue("username")}
                ></TextField>
              </p>
              <div>
                <TextField
                  className="socialinfo"
                  input
                  placeholder={
                    this.props.userInfo.socialinfo
                      ? this.props.userInfo.socialinfo
                      : "소셜 계정을 추가하세요"
                  }
                  onChange={this.handleInputValue("socialinfo")}
                ></TextField>
              </div>
              <p>
                <TextField
                  className="password"
                  input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  onChange={this.handleInputValue("password")}
                ></TextField>
              </p>
            </div>
            <div>
              <button
                className="editbtn"
                type="submit"
                onClick={this.editUserInfo}
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
export default withRouter(MyPage);
