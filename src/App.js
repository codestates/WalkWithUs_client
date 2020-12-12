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
import './App.css';

// import logo from './logo.svg';
// const IP_ADDRESS = "52.78.59.129";
const IP_ADDRESS = "localhost"

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
        this.handleNextClick = this.handleNextClick.bind(this)

    }

    handleNextClick = async () => {

      await axios
        .get("http://localhost:3001/video/nextvideo", {})
        .then((res) => {
          const random = Math.floor(Math.random() * res.data.length);
          this.setState({ video: res.data[random] });
        })
        .catch((err) => console.log(err));
    };

  openModal = () => {
      this.setState({isModalOpen: true})
  }

  closeModal = () =>{
      this.setState({isModalOpen: false})
  }
    componentDidMount(){
      const userInfo = sessionStorage.getItem('userInfo')
      if(userInfo){
        this.setState({isLogin: true, userInfo: JSON.parse(userInfo)})
      }
    }

    
    handleIsLoginChange = (res) => {
      this.setState({isLogin: true, userInfo: res})
      sessionStorage.setItem("userInfo",  JSON.stringify(this.state.userInfo))
    }
    handleIsLogoutChange = () => {
      sessionStorage.clear();
      this.setState({isLogin:false, userInfo: {},isModalOpen: false })
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
           handleNextClick = {this.handleNextClick}
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
         render={()=><MyPage isLogin = {isLogin} userInfo={userInfo} handleIsLoginChange = {this.handleIsLoginChange.bind(this)} />}
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
         render={()=><VideoList isLogin = {isLogin} userInfo ={userInfo} video = {video} handleNextClick={this.handleNextClick}/>}
           />
         
       </Switch>
       </div>
    )
    }
  }


  

export default withRouter(App);