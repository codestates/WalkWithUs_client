import React, { Component } from 'react';
import {Link, Switch, Route, withRouter} from "react-router-dom";
import SignIn from "./SignIn"
import logo from "../image/walkLogo.png"
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
                                   <Link to= {`/aboutus`} className="aboutUsNav"><span className="aboutUs">AboutUs</span></Link>
                                   <Link to= {`/user/mypage`} className="myPageNav"><span className="myPage">MyPage</span></Link>
                               <span className="logOut"
                               onClick={handleIsLogoutChange}
                               >Logout</span>   
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
                            <Link to= {`/aboutus`}  className="aboutUsNav"><span className="aboutUs">AboutUs</span></Link>
                            <span className="logIn" onClick={openModal}>login</span>
                            <SignIn
                            isOpen={isOpen} close={closeModal} handleIsLoginChange={handleIsLoginChange}
                            
                            />
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