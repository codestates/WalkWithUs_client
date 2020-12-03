import React,{Component} from "react";
import PropTypes from "prop-types";
import "./MyPage.css"
import axios from "axios";



class MyPage extends Component {
    constructor(props){
        super(props)
        this.state = {}

    }
    render() {
        const {isLogin, userInfo} = this.props;
        if(isLogin){
            return (
                <div className="mypageContainer">
                    <h1>My page</h1>
                    <form>
            <div className="email">{`email`}</div>
            <div className="username">{`username`}</div>
            <div className="password">비밀번호</div>
            <div className="socialInfo">{`socialInfo`}</div>     
            <button type="submit">Edit</button>
            </form>
                </div>
            );

        }else{
            return <div></div>
        }
        
    }
}

export default MyPage;