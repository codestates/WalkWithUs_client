import React from 'react';
import { Switch, Route, Redirect, withRouter} from "react-router-dom"
import Main from "./components/Main"
import AboutUs from "./components/AboutUs"
import MyPage from "./components/MyPage"
import SignUp from "./components/SignUp"
import UploadVideo from "./components/UploadVideo"
import VideoList from "./components/VideoList"
import Nav from "./components/Nav"
import axios from "axios";

// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            userInfo: {},
            video: {}
        };
    }
    
    handleIsLoginChange = (res) => {
      this.setState({isLogin: true, userInfo: res}, ()=>{console.log(this.state)})
    }
    handleIsLogoutChange = () => {
      this.setState({isLogin:false, userInfo: {}},()=>{console.log(this.state)})
      this.props.history.push(`/`);
    }

  

  render() {
    const {isLogin, userInfo, video} = this.state
    return (
     <div>
       <Nav
       isLogin = {isLogin}
       handleIsLogoutChange={this.handleIsLogoutChange.bind(this)}
       />
       <Switch>
         <Route
         exact
         path ={`/`}
         render = {() =>(
           <Main
           isLogin = {isLogin}
           userInfo = {userInfo}
           handleIsLoginChange = {this.handleIsLoginChange.bind(this)} 
           />
         ) }
         />
         <Route
         exact
         path={`/user/signup`}
         render={()=><SignUp isLogin = {isLogin} userInfo={userInfo}/>}
         />
         <Route
         exact
         path={`/user/mypage`}
         render={()=><MyPage isLogin = {isLogin} userInfo={userInfo}/>}
         />
         <Route
         exact
         path={`/aboutus`}
         render={()=><AboutUs isLogin = {isLogin} userInfo={userInfo}/>}
         />
         <Route
         exact
         path={`/video/uploadvideo`}
         render={()=><UploadVideo isLogin ={isLogin} userInfo = {userInfo}/>}
         />
         <Route
         exact
         path={`/video/videolist`}
         render={()=><VideoList isLogin = {isLogin} userInfo ={userInfo} video = {video}/>}
           />
         
       </Switch>
       </div>
    )
    }
  }


  

export default App;