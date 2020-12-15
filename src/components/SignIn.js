import React, {Component} from "react";
import "./SignIn.css";
import {Link, withRouter} from "react-router-dom";
import axios from "axios";


const IP_ADDRESS = "127.0.0.1";
// const IP_ADDRESS = "52.78.59.129";



const axiosInstance = axios.create({
  withCredentials: false,
});

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }
        this.handleInputValue = this.handleInputValue.bind(this);
    }
    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
      };
         
    
    render() {
        const {email, password} = this.state;
        const { isOpen, close, handleIsLoginChange} = this.props
        return (
            <>
            {isOpen ?(
            
            <div className ="modal" onClick={close}>
                <div className= "modalContainer" >
                    <div className="loginModal" onClick={(e)=>e.stopPropagation()}>
                        <span className="close" onClick={close}>
                            &times;
                        </span>
                        <div className="modalContents" >
                        
                          <br/>
                            <h1 className="loginName">Login</h1>
                            <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email && password) {
                      return axiosInstance
                        .post(`http://${IP_ADDRESS}:3001/user/signin`, {
                          email: email,
                          password: password,
                        })
                        .then((res) => {
                        
                          handleIsLoginChange(res.data);
                          this.props.history.push(`/`);
                          
                        })
                        .catch((err) => {
                          alert("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다");
                          console.log(err);
                        });
                    } else {
                      alert("아이디와 비밀번호를 모두 입력해 주세요");
                    }
                  }}
                >
                
                  <br/>
                            <div>
                            <input
                            name="email"
                            className="loginId"
                            type="text"
                            placeholder="What is your email?"
                            onChange={this.handleInputValue("email")}
                            />
                            <input
                            name="password"
                            className="loginPw"
                            type="password"
                            placeholder="What is your password?"
                            onChange={this.handleInputValue("password")}
                            />
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <button className="loginBtn" type="submit">
                                {" "}Login{" "}
                            </button>
                            </form>
                            <Link to="/user/signup">
                            <button type="button" className="signUpBtn">
                            {" "}Signup {" "} 
                            </button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
           
           
         ):null }
           </>
        );
    }
}

export default withRouter(SignIn);