import React from 'react';
import { Switch, Route, Redirect, withRouter} from "react-router-dom"
import Main from "./components/MainPage"
import AboutUs from "./components/AboutUs"
import MyPage from "./components/MyPage"
import SignUp from "./components/SignUpPage"
import UploadVideo from "./components/UploadVideoPage"
import VideoList from "./components/VideoListPage"
import axios from "axios";

// import logo from './logo.svg';
import './App.css';
import SignUpPage from './components/SignUpPage';
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

  

  render() {
    const {isLogin, userInfo, video} = this.state
    return (
     <div>
       <Switch>
         <Route
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
         path={`video/uploadvideo`}
         render={()=><UploadVideo isLogin ={isLogin} userInfo = {userInfo}/>}
         />
         <Route
         exact
         path={`video/videolist`}
         render={()=><VideoList isLogin = {isLogin} userInfo ={userInfo} video = {video}/>}
           />
         
       </Switch>
       </div>
    )
    }
  }


  

export default App;