import React, {Component} from "react";
import "./SignIn.css";
import {Link} from "react-router-dom"
;

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }
        this.loginHandler = this.loginHandler.bind(this)
    }
        loginHandler = (e) =>{
            const {name, value} = e.target;
            this.setState({[name]: value})
        }
         loginClickHandler = () =>{/*함수 작성 필요*/}
    
    render() {
        const { isOpen, close} = this.props
        return (
            <>
            {isOpen ?(
            
            <div className ="modal">
                <div>
                    <div className="loginModal">
                        <span className="close" onClick={close}>
                            &times;
                        </span>
                        <div className="modalContents" >
                            <h1>Login</h1>
                            <div>
                            <input
                            name="email"
                            className="loginId"
                            type="text"
                            placeholder="What is your email?"
                            onChange={this.loginHandler}
                            />
                            <input
                            name="password"
                            className="loginPw"
                            type="password"
                            placeholder="What is your password?"
                            onChange={this.loginHandler}
                            />
                            </div>
                            <button className="loginBtn" onClick={this.loginClickHandler}>
                                {" "}Login{" "}
                            </button>
                            <button className="signUpBtn">
                                <Link to="/user/signup"> Signup </Link>
                            </button>
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