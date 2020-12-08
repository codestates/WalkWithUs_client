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
            video: {},
            isModalOpen:false,
        };
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)

    }

  openModal = () => {
      this.setState({isModalOpen: true})
  }

  closeModal = () =>{
      this.setState({isModalOpen: false})
  }


    
    handleIsLoginChange = (res) => {
      this.setState({isLogin: true, userInfo: res}, ()=>{console.log(this.state)})
    }
    handleIsLogoutChange = () => {
      this.setState({isLogin:false, userInfo: {},isModalOpen: false },()=>{console.log(this.state)})
      this.props.history.push(`/`);
    }

  

  render() {
    const {isLogin, userInfo, video} = this.state
    return (
     <div>
       <Nav
       isOpen = {this.state.isModalOpen}
       isLogin = {isLogin}
       handleIsLogoutChange={this.handleIsLogoutChange.bind(this)}
       handleIsLoginChange = {this.handleIsLoginChange.bind(this)} 
       openModal = {this.openModal}
       closeModal = {this.closeModal}
       />
       <Switch>
         <Route
         exact
         path ={`/`}
         render = {() =>(
           <Main
           isLogin = {isLogin}
           userInfo = {userInfo}
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
         path={`/video/videoup`}
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


  

export default withRouter(App);