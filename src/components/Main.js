import React,{Component} from "react";
import PropTypes from "prop-types";
import {Link, withRouter} from "react-router-dom"
import axios from "axios";
import "./Main.css"
import video from "../video/walk.mp4"
import { Switch } from "@material-ui/core";



class Main extends Component {
    constructor(props){
        super(props)
        this.state = {};
        this.alertBtn = this.alertBtn.bind(this)
    }
    alertBtn = () => {
    alert('Please sign up as a member')
    }

    

    render() {
      const {isLogin} = this.props
      if(isLogin){
        return (
          
          <div>
           
           <div className="mainBody">
            <div class="videoContainer">
           <video autoPlay="autoplay" muted="muted" loop>
    <source src={video} type="video/mp4"/>
   </video>
    </div>
            <div className="middleBtn">
            <Link to={`/video/videolist`}>
            <button className ="walkBtn"><p>walk with us</p></button>
            </Link>

            
            <Link to={`/video/videoup`}>
            <div className="uploadClick"><p>Upload your video here</p></div>
            </Link>
            
            </div>
           </div>
     
           <div className="mainFooter">
            <Link to  ={{pathname: "https://www.instagram.com/walkwithus3/"}} className="instagramLink" target="_blank">
              <span>Instagram</span>
            </Link>  
            <Link to ={{pathname: "https://www.buymeacoffee.com/walkwithus3"}} className="supportLink" target="_blank">
              <span>Support us</span>
            </Link>  
            
           </div>

          </div>
      );
      }else{
        return(
          <div>
           
          <div className="mainBody">
           <div class="videoContainer">
          <video autoPlay="autoplay" muted="muted" loop>
   <source src={video} type="video/mp4"/>
  </video>
   </div>
           <div className="middleBtn">
           <Link to={`/video/videolist`}>
           <button className ="walkBtn"><p>walk with us</p></button>
           </Link>

           
           
           <div className="uploadClick"  onClick={this.alertBtn}><p>Upload your video here</p></div>
           
           
           </div>
          </div>
    
          <div className="mainFooter">
           <Link to  ={{pathname: "https://www.instagram.com/walkwithus3/"}} className="instagramLink" target="_blank">
             <span>Instagram</span>
           </Link>  
           <Link to ={{pathname: "https://www.buymeacoffee.com/walkwithus3"}} className="supportLink" target="_blank">
             <span>Support us</span>
           </Link>  
           
          </div>

         </div>
        )
      }
       
    }
}

export default withRouter(Main);