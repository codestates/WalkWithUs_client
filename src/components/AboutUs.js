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
import instagram from "../image/instagram.jpg";
import instagramlogo from "../image/instagramlogo.jpg";
import video from "../video/share.mp4";
import arrow from "../image/arrow.jpg";
import cloudImg from "../image/cloudImg.png";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="page1">
          <div className="aboutUsPage">
            <div className="challenge container">
              <header className="aboutUs">
                <Link to={`/`}>
                  <img className="aboutusbtn" src={logo} alt="profile" />
                </Link>
              </header>
            </div>
            <div>
              <br/><br/><br/>
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
              모두가 힐링하는 하루가 되기를 소망합니다.
            </p>
            <br/>
            <div className="corona">
              *코로나 사태가 심각해지고 있습니다. 저희 walkwithus는 외출 권장이
              아닌, 추억을 함께 공유하는 공간입니다*
            </div>
            <div className="pinkBack"></div>
          </div>
          <div className="page3">
            <h1 className="shareyourstory">SHARE YOUR STORY</h1>{" "}
            
              <Link
                to={{ pathname: "https://www.instagram.com/walkwithus3/" }}
                target="_blank"
                className="instagramLogoLink"
              >
                <img className="instagramlogo" src={instagramlogo} alt="profile" />
              </Link>
            
            <video
              className="swissvideo"
              autoPlay="autoplay"
              muted="muted"
              loop
            >
              <source src={video} type="video/mp4" />
            </video>
              <div>
              <img className="instagram" src={instagram} alt="profile" />
              <div className="wrap">
              <img className="arrow" src={arrow} alt="profile" />
              </div>
              <div className="memory">당신의 추억을 인스타그램에도 공유해주세요<br/>많은 힐링 영상들이 당신을 기다리고 있습니다</div>
              </div>
          </div>
          <div className="page4">
            <br/><br/><br/><br/>
            <h1 className="introduction">INTRODUCE OUR TEAM MEMBER</h1>
            <br></br>
            <br></br>
            <br></br><br/><br/><br/><br/>
            <div className="cloudImg" width="1%">
              <img src={cloudImg} alt="profile" />
            </div>
            <Introduce />
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(AboutUs);
