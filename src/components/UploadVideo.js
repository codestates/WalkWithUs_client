import React, { Component } from "react";
import "./UploadVideo.css";
import axios from "axios";

import { withRouter,Link } from "react-router-dom";
import logo from "../image/walkLogoBlack.png"
// const IP_ADDRESS = "52.78.59.129";
const IP_ADDRESS = "localhost"

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
    await axios
      .post(`http://${IP_ADDRESS}:3001/video/videoup`, formData)
      .then((res) => {
        // console.log("res:", res);
        alert("파일이 성공적으로 업로드되었습니다!");
        //this.props.history.push(`/`);
      })
      .catch((err) => console.log(err));
  };
  handleInputedit = (e) => {
    this.setState({ selectedFile: e.target.files[0] });
  };
  render() {
    return (
      <div>

      <div>
      <Link to= {`/`}><img className="walkWithUsBtn" src={logo}/></Link>
  </div>
      <div>

        <form onSubmit={this.videoup} encType="multipart/form-data">
          <input type="file" name="userfile" onChange={this.handleInputedit} />
          <input type="submit"></input>
        </form>
      </div>

      </div>
    );
  }
}
export default withRouter(UploadVideo);
