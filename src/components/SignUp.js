import React,{Component} from "react";
import PropTypes from "prop-types";
import "./SignUp.css"
import axios from "axios";



class SignUp extends Component {
    constructor(props){
        super(props)
        this.state ={
            email: "",
            password: "",
            username: "",
        }
        this.handleInputValue = this.handleInputValue.bind(this)
    }
    handleInputValue = (key) => (e) => {
        this.setState({[key]: e.target.value})
    }
    render() {
        const {email, password, nickName} = this.state;
        const {isLogin, userInfo} = this.props;
        if(!isLogin){
            return (
            <div>
                <center>
                    <h1>Sign up</h1>
                    <br/>
                    <br/>
                    <form>
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
                       <button type="submit">Submit</button>

                       <h2>welcome to walk with us!</h2>



                    </form>

                </center>
            </div>
                )

        }else{
            return (<div></div>)
        }
       
    }
}

export default SignUp;