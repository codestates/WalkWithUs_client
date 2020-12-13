import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./AboutUs.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Introduce from "./introduce";
import ShareStory from "./shareYourStory";
import logo from "../image/walkLogoBlack.png";
import walkingtext from "../image/walkingtext.png";
import walkingtext2 from "../image/walkingtext2.png";

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
                  <img className="aboutusbtn" src={logo} />
                </Link>
              </header>
            </div>
            <img className="walkingtext2" src={walkingtext2} />

            <img className="walkingtext" src={walkingtext} />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <h1 className="ourVision">Our vision</h1>
            <p className="ourvision2">
              언젠가부터, 우리에게 너무나도 당연했던 산책이 힘든 세상이
              되었습니다.
              <br />
              이로 인한, 우울감을 WalkWith Us를 통해 각자의 산책을 공유하면서,
              조금이나마 마음의 답답함을 푸실 수 있기를 바랍니다.
              <br />
              저희 서비스가 사람들에게 작은 희망이 될 수 있기를 기원합니다.{" "}
            </p>
          </div>

          <div className="page2"></div>

          <div className="page3">
            <h1>Share your story</h1>

            <ShareStory />
          </div>

          <div className="page4">
            <h1>Let me introduce our team member!</h1>
            <br></br>
          </div>

          <Introduce />
        </div>
      </div>
    );
  }
}
{
  /* <Link to ={{pathname: "https://www.instagram.com/walkwithus3/"}} target="_blank">
<span className="pink">#우울함은 이제 안녕</span>
</Link> */
}

export default withRouter(AboutUs);
