import React, {Component} from "react";
import "./SignIn.css";
import {Link} from "react-router-dom"
;
const IP_ADDRESS = "52.78.59.129";

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
                            <h1>Login</h1>
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
                          console.log(res.data);
                          handleIsLoginChange(res.data);
                          this.props.history.push(`/`);
                        })
                        .catch((err) => {
                          alert("Login failed");
                          console.log(err);
                        });
                    } else {
                      alert("아이디와 비밀번호를 입력해주세요");
                    }
                  }}
                >
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
                            <button className="loginBtn" type="submit">
                                {" "}Login{" "}
                            </button>
                            </form>
                            <Link to="/user/signup">
                            <button className="signUpBtn">
                                 Signup 
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

export default SignIn;