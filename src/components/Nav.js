import React, { Component } from 'react';
import {Link, Switch, Route, withRouter} from "react-router-dom";
import SignIn from "./SignIn"
import logo from "../image/walkLogo.png"

import "./Nav.css"

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {isModalOpen:false};
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }
    

    openModal = () => {
        this.setState({isModalOpen: true})
    }

    closeModal = () =>{
        this.setState({isModalOpen: false})
    }




    render() {
        const {isLogin, handleIsLogoutChange, handleIsLoginChange} = this.props
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
                               <img className="walkWithUsBtn" src={logo} /></Link>
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
                            <Link to= {`/`}><img className="walkWithUsBtn" src={logo} /></Link>
                            <span>ABOUT US</span>
                            <Link to= {`/`}><img className="walkWithUsBtn" src={logo} /></Link>
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
                        <Link to= {`/`}><img className="walkWithUsBtn" src={logo}/></Link>
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
                          <Link to= {`/`}><img className="walkWithUsBtn" src={logo}/></Link>
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
                            <Link to= {`/`}><img className="walkWithUsBtn" src={logo}/></Link>
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
                            <Link to= {`/`}><img className="walkWithUsBtn" src={logo}/></Link>
                            <Link to= {`/aboutus`}><span className="aboutUs">aboutUs</span></Link>
                            <span onClick={this.openModal}>로그인</span>
                            <SignIn
                            isOpen={this.state.isModalOpen} close={this.closeModal} handleIsLoginChange={handleIsLoginChange}
                            
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
                        <div>
                            <Link to= {`/`}><img className="walkWithUsBtn"src={logo} /></Link>
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
                            <Link to= {`/`}><img className="walkWithUsBtn" src={logo}/></Link>
                            <span>ABOUT US</span>
                            <Link to= {`/`}><img className="walkWithUsBtn" src={logo}/></Link>
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
                        <Link to= {`/`}><img className="walkWithUsBtn" src={logo}/></Link>
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

export default withRouter(Nav);