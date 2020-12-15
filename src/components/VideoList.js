import React,{Component} from "react";
import {Link, withRouter} from "react-router-dom"
import "./VideoList.css"
import logo from "../image/walkLogoBlack.png"
import {GlobalStyle} from "./VideoListStyle"


const IP_ADDRESS = "127.0.0.1";
// const IP_ADDRESS = "52.78.59.129";



class VideoList extends Component {
    constructor(props){
        super(props)
        this.state = {
        };
    }
   
    render() {
        const {handleNextClick} = this.props
        const {isLogin, video, userInfo} = this.props
        if(isLogin){
            return (

                <div>
                    <GlobalStyle />
                            <Link to= {`/`}><img className="walkWithUsListBtn" src={logo}/></Link>
                    <span className="walkingUser">{userInfo.username}&nbsp; is walking with us</span>
            
                    <div className="videoListBody">
                   <video style={{width:"100%"}} autoPlay="autoPlay" src={`http://${IP_ADDRESS}:3001/${video.fileName}`} controls/>
            
                    </div>
    
                   <div className="videoListFooter">
                      <Link to= {`/video/videoup`} className="uploadVideoPara">
                       <span>Upload your video</span>
                      </Link>
                      <button className="walkingAroundBtn" onClick={handleNextClick}><p>walking around the world!</p></button>
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