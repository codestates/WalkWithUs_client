import React,{Component} from "react";
import {Link, withRouter} from "react-router-dom"
import PropTypes from "prop-types";
import "./VideoList.css"
import axios from "axios";
import heart from "../image/heart.png"
import logo from "../image/walkLogoBlack.png"

// const IP_ADDRESS = "52.78.59.129";
const IP_ADDRESS = "localhost"

class VideoList extends Component {
    constructor(props){
        super(props)
        this.state = {
        };
    }
   


    render() {
        const {handleNextClick} = this.props
        const {video} = this.props
        
            return (

                <div>
                    <div>
                            <Link to= {`/`}><img className="walkWithUsBtn" src={logo}/></Link>
                            
                        </div>
                    <div className="videoListBody">
                   <video style={{width:"100%"}} autoPlay="autoPlay" src={`http://${IP_ADDRESS}:3001/${video.fileName}`} controls/>
            
                    </div>
    
    
    
                   <div className="videoListFooter">
                      <Link to= {`/video/videoup`}>
                       <span>Upload your video</span>
                      </Link>
                      <button onClick={handleNextClick}>walking around the world</button>
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