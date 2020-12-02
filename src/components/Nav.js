import React, { Component } from 'react';
import {Link, Switch, Route, withRouter} from "react-router-dom";
import "./Nav.css"

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        const {isLogin, handleIsLogoutChange} = this.props
        if(isLogin){
            return (
               <Switch>
                   <Route
                   exact
                   path={`/`}
                   render={()=>{
                       return (
                           <div>
                               <Link to={`/`}>
                               <span className="walkWithUsBtn">로고</span></Link>
                                   <Link to= {`/aboutus`}><span className="aboutUs">AboutUs</span></Link>
                                   <Link to= {`/user/mypage`}><span className="myPage">MyPage</span></Link>
                               <span className="logOut"
                               onClick={handleIsLogoutChange}
                               >Logout</span>   
                           </div>
                       )
                   }}
                   />
                     <Route
                exact
                path={`/aboutus`}
                render={()=>{
                    return (
                        <div>
                            <header className="aboutUs">
                            <Link to= {`/`}><span className="walkWithUsBtn">로고</span></Link>
                            <span>ABOUT US</span>
                            <Link to= {`/`}><span className="walkWithUsBtn">로고</span></Link>
                            </header>
                        </div>
                    )
                }}
                />
                 <Route
                exact
                path={`/video/videolist`}
                render={()=>{
                    return (
                    <div>
                        <Link to= {`/`}><span className="walkWithUsBtn">로고</span></Link>
                        <span>[username] is walking in [country]</span>
                    </div>
                    )
                }}
                />
                <Route
                exact
                path={`/user/mypage`}
                render={()=>{
                    return (
                        <div>
                          <Link to= {`/`}><span className="walkWithUsBtn">로고</span></Link>
                          <span className="logOut"
                               onClick={handleIsLogoutChange}
                               >Logout</span>   
                        </div>
                    )
                }}
                />
                <Route
                exact
                path={`/video/uploadvideo`}
                render={()=>{
                    return (
                        <div>
                            <Link to= {`/`}><span className="walkWithUsBtn">로고</span></Link>
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
                        <div>
                            <Link to= {`/`}><span className="walkWithUsBtn">로고</span></Link>
                            <Link to= {`/aboutus`}><span className="aboutUs">aboutUs</span></Link>
                            <span>로그인</span>
                        </div>
                    )
                }}
                />
                <Route
                exact
                path={`/user/signup`}
                render={()=>{
                    return(
                        <div>
                            <Link to= {`/`}><span className="walkWithUsBtn">로고</span></Link>
                        </div>
                    )
                }}
                />
                <Route
                exact
                path={`/aboutus`}
                render={()=>{
                    return (
                        <div>
                            <header className="aboutUs">
                            <Link to= {`/`}><span className="walkWithUsBtn">로고</span></Link>
                            <span>ABOUT US</span>
                            <Link to= {`/`}><span className="walkWithUsBtn">로고</span></Link>
                            </header>
                        </div>
                    )
                }}
                />
                <Route
                exact
                path={`/video/videolist`}
                render={()=>{
                    return (
                    <div>
                        <Link to= {`/`}><span className="walkWithUsBtn">로고</span></Link>
                        <span>[username] is walking in [country]</span>
                    </div>
                    )
                }}
                />
            </Switch>
        )   
        }
        
       
    }
}

export default Nav;