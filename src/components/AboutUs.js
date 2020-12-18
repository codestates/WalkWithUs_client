import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import { withRouter } from "react-router-dom";
import Introduce from "./introduce";
import logo from "../image/walkLogoBlack.png";
import walkingtext from "../image/walkingtext.png";
import walkingtext2 from "../image/walkingtext2.png";
import walkingtext3 from "../image/walkingtext3.png";
import walkingtext4 from "../image/walkingtext4.png";


import image1 from "../image/image1.jpg";
import instagramlogo from "../image/instagramlogo.jpg";
import video from "../video/share.mp4";
import arrow from "../image/arrow.jpg";
import testimg from "../image/testimg.png";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="page1">
        <div>
          <div className="aboutUsPage">
            <div className="challenge container">
              <header className="aboutUs">
                <Link to={`/`}>
                  <img className="aboutusbtn" src={logo} alt="profile" />
                </Link>
              </header>
            </div>
            <div>
              <span>
                <img className="walkingtext" src={walkingtext} alt="profile" />
              </span>
              <span>
                <img className="walkingtext2" src={walkingtext2} alt="profile" />
              </span>
              <span>
                <img className="walkingtext3" src={walkingtext3} alt="profile" />
              </span>
              <span>
                <img className="walkingtext4" src={walkingtext4} alt="profile" />
              </span>
            </div>

            <h1 className="ourVision">Our vision</h1>
            <p className="ourvision2">
              우리에게 너무나도 당연했던 외출이 힘든 세상이 되었습니다.
              <br />
              저희 Walk with us를 통해 여러분들의 걷는 모습을 공유하고,
              <br />
              저희 서비스를 통해 모두가 힐링하는 하루가 되기를 소망합니다.
            </p>
            <div className="corona">
              *코로나 사태가 심각해지고 있습니다. 저희 walkwithus는 외출 권장이
              아닌, 추억을 함께 공유하는 공간입니다*
            </div>
          </div>
          <div className="page2"></div>
          <div className="page3">
            <br></br>
            <h1 className="shareyourstory">SHARE YOUR STORY</h1>{" "}
            <span>
              <Link
                to={{ pathname: "https://www.instagram.com/walkwithus3/" }}
                target="_blank"
              >
                <img className="instagramlogo" src={instagramlogo} alt="profile" />
              </Link>
            </span>
            <video
              className="swissvideo"
              autoPlay="autoplay"
              muted="muted"
              loop
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="page1">
              <img className="image1" src={image1} alt="profile" />
            </div>{" "}
            <div className="wrap">
              <img className="arrow" src={arrow} alt="profile" />
            </div>
          </div>
          <div className="page4">
            <h1 className="introduction">INTRODUCE OUR TEAM MEMBER</h1>
            <br></br>
            <br></br>
            <br></br>{" "}
            <div className="testimg" width="1%">
              <img src={testimg} alt="profile" />
            </div>
            <Introduce />
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(AboutUs);
