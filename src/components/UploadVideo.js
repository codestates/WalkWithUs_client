import React, { Component } from "react";
import "./UploadVideo.css";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import logo from "../image/walkLogoWhite.png"
import backgroundimgUp from "../image/backgroundimgUp.jpg"
import { GlobalStyle } from "./MainStyle";
import swal from 'sweetalert';


// const IP_ADDRESS = "127.0.0.1";
const IP_ADDRESS = "13.124.114.15";



class UploadVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
    this.handleInputedit = this.handleInputedit.bind(this);
    this.videoup = this.videoup.bind(this);
  }
  videoup = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userfile", this.state.selectedFile);

    if (this.state.selectedFile === null || this.state.selectedFile === undefined) {
      swal({
        title: "Info",
        text: "파일을 올려주세요",
        icon: "info",
      })
    }
    else if ((this.state.selectedFile.size > 31457280) || this.state.selectedFile.type !== "video/mp4") {
      swal({
        title: "Fail",
        text: "파일의 용량은 30MB 이상일 수 없으며\n동영상은 mp4 형식만 지원합니다",
        icon: "error",
      })
    }
    else {
      await axios
        .post(`http://${IP_ADDRESS}:3001/video/videoup`, formData)
        .then((res) => {
          // console.log("res:", res);
          swal({
            title: "Success",
            text: "파일이 성공적으로 업로드되었습니다!",
            icon: "success",
          })
          //this.props.history.push(`/`);
        })
        .catch((err) =>
          swal({
            title: "Fail",
            text: "파일 업로드에 실패하였습니다",
            icon: "error",
          })

        )
    }
    // console.log(this.state.selectedFile.size)
    // console.log(this.state.selectedFile.type)
  };
  handleInputedit = (e) => {
    this.setState({ selectedFile: e.target.files[0] });
  };
  render() {
    return (
      <div>
        <GlobalStyle />

        <div className="uploadVideoWrapper">
          <Link to={`/`} className="logoBtn"><img className="walkWithUsBtn" src={logo} alt="profile" /></Link>
        </div>
        <div>
          <img className="backgroundimgUp" src={backgroundimgUp} alt="profile"></img>
        </div>
        <h1 className="uploadVideoTitle">Upload your Footprint</h1>
        <div>
          <p className="caution">Limit 30MB & Video mp4 only</p>


          <form onSubmit={this.videoup} encType="multipart/form-data">
            <input className="uploadFileForm" type="file" name="userfile" onChange={this.handleInputedit} />
            <input className="submitBtn" type="submit"></input>
          </form>
        </div>

      </div>
    );
  }
}
export default withRouter(UploadVideo);
