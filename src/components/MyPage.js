import React,{Component} from "react";
import PropTypes from "prop-types";
import "./MyPage.css"
import axios from "axios";
import {withRouter} from "react-router-dom"


const IP_ADDRESS = "127.0.0.1";
const axiosInstance = axios.create({
    withCredentials: true,
  });


class MyPage extends Component {
    constructor(props){
        super(props)
        this.state = 
        {email:this.props.userInfo.email,
        username:this.props.userInfo.username,
        password: "",
        socialinfo:this.props.userInfo.socialinfo
        }
        this.handleInputValue = this.handleInputValue.bind(this);
    }
    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
      };
    render() {
        const {email, username, password, socialinfo} = this.state
        const {isLogin, userInfo} = this.props;
        if(isLogin){
            return (
                <div className="mypageContainer">
                    <h1>My page</h1>
                    <form
                     onSubmit={(e) => {
                        e.preventDefault();
                        return axios
                          .put(`http://${IP_ADDRESS}:3001/user/useredit`, {
                          email:email,
                          username:username,
                          password:password,
                          socialinfo:socialinfo
                          })
                          .then((res) => {
                             alert("Member information has been modified.")
                            console.log(res);
                          })
                          .catch((err) => {
                            alert("Please check your password");
                            console.log(err);
                          });
                      }}
                    >
            <div className="inputText">
            <div className ="email">
                    <div className ="email">{email}</div>
            </div>
            <div className ="input">
            <input type="username" value={`${username}`}
            placeholder="enter your username"
            onChange={this.handleInputValue("username")}
            ></input>
            </div>
            
            
            <div className ="input">
            <input type="text"  value={`${socialinfo}`} placeholder="enter your social info"
            onChange={this.handleInputValue("socialinfo")}
            ></input>
            </div>
            <div className ="input">
            <input type="password" placeholder="enter your own password" onChange={this.handleInputValue("password")}>
            
            </input>
            </div>


            </div>
                
            <button type="submit">Edit</button>
            </form>
                </div>
            );

        }else{
            return <div></div>
        }
        
    }
}

export default withRouter(MyPage);