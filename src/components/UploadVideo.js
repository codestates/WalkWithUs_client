import React, { Component } from "react";
import "./UploadVideo.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
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
      .post("http://localhost:3001/video/videoup", formData)
      .then((res) => {
        console.log("res:", res);
        alert("The file is successfully uploaded");
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
        <form onSubmit={this.videoup} encType="multipart/form-data">
          <input type="file" name="userfile" onChange={this.handleInputedit} />
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}
export default withRouter(UploadVideo);
