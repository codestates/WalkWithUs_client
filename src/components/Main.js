import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Main.css";
import video from "../video/walk.mp4";
import { GlobalStyle } from "./MainStyle";
import swal from 'sweetalert';



class Main extends Component {

    constructor(props){
        super(props)
        this.state = {};
        this.alertBtn = this.alertBtn.bind(this)
    }

    alertBtn = () => {
      swal('회원가입을 하셔야 동영상을 올릴 수 있습니다')
    }
  

    render() {
      const {isLogin, handleNextClick} = this.props
      if(isLogin){
        return (
          
          <div>
            <GlobalStyle />
           <div className="mainBody">

            <div className="videoContainer">
              <video autoPlay="autoplay" muted="muted" loop>
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="middleBtn">

            <Link to={`/video/videolist`}>
            <button className ="walkBtn" onClick={handleNextClick}><p>walk with us</p></button>
            </Link>


              <Link to={`/video/videoup`}>
                <div className="uploadClick">
                  <p>upload your video here</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="mainFooter">
            <Link
              to={{ pathname: "https://www.instagram.com/walkwithus3/" }}
              className="instagramLink"
              target="_blank"
            >
              <span className="Instagram">Instagram</span>
            </Link>
            <Link
              to={{ pathname: "https://www.buymeacoffee.com/walkwithus3" }}
              className="supportLink"
              target="_blank"
            >
              <span className="supportus">Support us</span>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <GlobalStyle />

          <div className="mainBody">
            <div className="videoContainer">
              <video autoPlay="autoplay" muted="muted" loop>
                <source src={video} type="video/mp4" />
              </video>
            </div>

           <div className="middleBtn">
           <Link to={`/video/videolist`}>
           <button className ="walkBtn"  onClick={handleNextClick}><p>walk with us</p></button>
           </Link>


                <div className="uploadClick" onClick={this.alertBtn}>
                  <p>upload your video here</p>
                </div>
              </div>
          
          </div>

          <div className="mainFooter">
            <Link
              to={{ pathname: "https://www.instagram.com/walkwithus3/" }}
              className="instagramLink"
              target="_blank"
            >
              <span>Instagram</span>
            </Link>
            <Link
              to={{ pathname: "https://www.buymeacoffee.com/walkwithus3" }}
              className="supportLink"
              target="_blank"
            >
              <span>Support us</span>
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Main);
