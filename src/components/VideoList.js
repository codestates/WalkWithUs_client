import React,{Component} from "react";
import {Link, withRouter} from "react-router-dom"
import PropTypes from "prop-types";
import "./VideoList.css"
import axios from "axios";
import heart from "../image/heart.png"
import logo from "../image/walkLogoBlack.png"
import {GlobalStyle} from "./VideoListStyle"
import { Height } from "@material-ui/icons";

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
        const {isLogin, video} = this.props
        if(isLogin){
            return (

                <div>
                    <GlobalStyle />
                            <Link to= {`/`}><img className="walkWithUsListBtn" src={logo}/></Link>
            
                    <div className="videoListBody">
                   <video style={{width:"100%"}} autoPlay="autoPlay" src={`http://${IP_ADDRESS}:3001/${video.fileName}`} controls/>
            
                    </div>
    
                   <div className="videoListFooter">
                      <Link to= {`/video/videoup`} className="uploadVideoPara">
                       <span>Upload your video</span>
                      </Link>
                      <button className="walkingAroundBtn" onClick={handleNextClick}><p>walking around the world!</p></button>
                      {/* <img className="heart" src={heart}/>
                      <span>333</span> */}
                      <Link to ={{pathname: "https://www.buymeacoffee.com/walkwithus3"}} className="supportUsPara" target="_blank">
                      <span >Support us</span>
                      </Link>
    
    
                   </div>
                </div>
            );
        }else{
            return (

                <div>
                    <GlobalStyle />
                            <Link to= {`/`}><img className="walkWithUsListBtn" src={logo}/></Link>
            
                    <div className="videoListBody">
                   <video style={{width:"100%"}} autoPlay="autoPlay" src={`http://${IP_ADDRESS}:3001/${video.fileName}`} controls/>
            
                    </div>
                   <div className="videoListFooter">
                     
                      <button className="walkingAroundBtn" onClick={handleNextClick}><p>walking around the world!</p></button>
                      {/* <img className="heart" src={heart}/>
                      <span>333</span> */}
                      <Link to ={{pathname: "https://www.buymeacoffee.com/walkwithus3"}} className="supportUsPara" target="_blank">
                      <span >Support us</span>
                      </Link>
    
    
                   </div>
                </div>
            );
        }
            
        
        
      
    }
}

export default withRouter(VideoList);