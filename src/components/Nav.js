import React, { Component } from 'react';
import {Link, Switch, Route, withRouter} from "react-router-dom";
import SignIn from "./SignIn"
import logo from "../image/walkLogoBlack.png"
import "./Nav.css"

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    

    render() {
        const {isOpen, openModal, closeModal} = this.props
        const {isLogin, handleIsLogoutChange, handleIsLoginChange} = this.props
        if(isLogin){
            return (
               <Switch>
                   <Route
                   exact
                   path={`/`}
                   render={()=>{
                       return (
                           <div className="loginMainNav">
                               <Link to={`/`}>
                               <img className="walkWithUsBtn" src={logo} /></Link>
                                  <span className="loginRightSide">
                       <Link to= {`/aboutus`} className="aboutUsNav "><span className="aboutUs">AboutUs</span></Link>&nbsp;&nbsp;&nbsp;
                                   <Link to= {`/user/mypage`} className="myPageNav"><span className="myPage">MyPage</span></Link>&nbsp;&nbsp;&nbsp;
                               <span className="logOut"
                               onClick={handleIsLogoutChange}
                               >Logout</span>   </span>
                           </div>
                       )
                   }}
                   />
               
              
                <Route
                exact
                path={`/user/mypage`}
                render={()=>{
                    return (
                        <div className="loginMypageNav">
                          <Link to= {`/`}><img className="walkWithUsBtn" src={logo}/></Link>
                      
                          <span className="logOut"
                               onClick={handleIsLogoutChange}
                               >Logout</span>  
                           
                        </div>
                    )
                }}
                />
               
               </Switch>
            );
        }
        else{
        return (
            <Switch>
                <Route
                exact
                path={`/`}
                render={()=>{
                    return (
                        <div className="logOutMainNav">
                            <Link to= {`/`}><img className="walkWithUsBtn" src={logo}/></Link>
                            <span className="logOutRightSide">
                            <Link to= {`/aboutus`}  className="aboutUsNav"><span className="aboutUs">AboutUs</span></Link>&nbsp;&nbsp;&nbsp;
                            <span className="logIn" onClick={openModal}>Login</span>
                            <SignIn
                            isOpen={isOpen} close={closeModal} handleIsLoginChange={handleIsLoginChange}
                            /></span>
                        </div>
                    )
                }}
                />
                <Route
                exact
                path={`/user/signup`}
                render={()=>{
                    return(
                        <div className="signupNav">
                            <Link to= {`/`}><img className="walkWithUsBtn"src={logo} /></Link>
                        </div>
                    )
                }}
                />
             
              
            </Switch>
        )   
        }
        
       
    }
}

export default withRouter(Nav);