import React,{Component} from "react";
import {Link, withRouter} from "react-router-dom"
import PropTypes from "prop-types";
import "./VideoList.css"
import axios from "axios";
import heart from "../image/heart.png"



class VideoList extends Component {
    constructor(props){
        super(props)
        this.state = {};
    }
    render() {
        const {userInfo, isLogin} = this.props
        return (
            <div>
                <div className="videoListBody">
                <img src={"https://ifh.cc/g/WK91e6.jpg"}/>
                </div>



               <div className="videoListFooter">
                  <Link to= {`/video/uploadvideo`}>
                   <span>Upload your video</span>
                  </Link>
                  <button>walking around the world</button>
                  <img className="heart" src={heart}/>
                  <span>333</span>
                  <Link to ={{pathname: "https://www.buymeacoffee.com/walkwithus3"}} target="_blank">
                  <span>Support us</span>
                  </Link>


               </div>
            </div>
        );
    }
}

export default withRouter(VideoList);